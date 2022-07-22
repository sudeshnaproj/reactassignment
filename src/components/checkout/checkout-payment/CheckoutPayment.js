import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutTitle from "../../common-component/checkout-title/CheckoutTitle";
import ProductSummary from "../../common-component/product-summary/ProductSummary";
import "./CheckoutPayment.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { PaymentInformation } from "../../../redux/actions";

const CheckoutPayment = () => {
  const dispatch = useDispatch();

  const [isDesktop, setDesktop] = useState(window.innerWidth > 769);
  const [error, setError] = useState("");
  const paymentInfo= useSelector((state)=>state.cart_reducer.PaymentInformation)

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues:paymentInfo
  });

  const userInfo = useSelector((state) => state.cart_reducer.UserInformation);
  const shippingInfo = useSelector(
    (state) => state.cart_reducer.DeliveryDetails
  );
  const updateText = () => {
    setDesktop(window.innerWidth > 769);
  };

  useEffect(() => {
    window.addEventListener("resize", updateText);
    return () => window.removeEventListener("resize", updateText);
  });
  let check = watch("payment");
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (data.payment === null) {
      setError("you must select one payment method");
      return;
    }
    dispatch(PaymentInformation(data));
    navigate("/orderSummary");
  };

  return (
    <>
      <CheckoutTitle />
      <section className="checkout__payment" aria-labelledby="payment=information">
        <aside className="checkout__payment_wrapper" aria-label="payment=details">
          <h3 className="checkout__guest_title">Guest Checkout</h3>
          <section className="checkout__shipping_information">
            <div className="shipping__information_title">
              <h3 className="shipping_title">Shipping Information</h3>
              <figure onClick={()=>navigate('/checkout')} className="shipping__edit">
                <svg  xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 22.061 21.828" >
                  <path id="edit-2" d="M17,3a2.828,2.828,0,0,1,4,4L7.5,20.5,2,22l1.5-5.5Z" transform="translate(-1 -1.172)" fill="none"  stroke="#E26A2C" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="2" />
                </svg>{" "}
                <figcaption>Edit</figcaption>
              </figure>
            </div>
            <div className="shipping__information_details">
              <p>
                <span>{userInfo.emailInput}</span> <br />{" "}
                <span>{userInfo.phoneInput}</span>{" "}
              </p>
              <p>
                <span>
                  {userInfo.firstName} {userInfo.lastName}{" "}
                </span>{" "}
                <br />{" "}
                <span>
                  {userInfo.addressOne} {userInfo.addressTwo} ,{userInfo.City} ,
                  {userInfo.State} {userInfo.zipInput} {userInfo.Country}
                </span>{" "}
              </p>
            </div>
          </section>
          <div className="checkout__shipping_method_details">
            <div className="shipping__method__details_title">
              <h3 className="shipping_title">Shipping Method</h3>
              <figure onClick={()=>navigate('/CheckoutShipping')} className="shipping__edit">
                <svg  xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 22.061 21.828" >
                  <path id="edit-2" d="M17,3a2.828,2.828,0,0,1,4,4L7.5,20.5,2,22l1.5-5.5Z" transform="translate(-1 -1.172)" fill="none"
                    stroke="#E26A2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>{" "}
                <figcaption>Edit</figcaption>
              </figure>
            </div>
            <div className="shipping__information_details">
              <p>
                {shippingInfo.delivery} <br /> {shippingInfo.days}
                {shippingInfo.price}
              </p>
            </div>
          </div>
          <div className="checkout__payment_information">
            <h4 className="payment_info_title">3. Payment Information</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="payment__form" role="form" aria-label="payment-form">
              <div className="payment_card_title">
                <input
                  type="radio"
                  {...register("payment")} value="creditCard" name="payment" className="payment_card_radio" autoComplete="off" />{" "}
                <span>Credit Card</span>
              </div>
              <div className="payment__form_input">
                <label className="card_label" htmlFor="cardName"> Name on Card </label> <br />
                <input
                  {...register("cardName", {
                    required:
                      check === "creditCard" ? "Card Name is required" : false,
                  })}
                  type="text" name="cardName" autoComplete="off" id="cardName" className="card_input" />
                <p style={{ color: "red" }}>{errors.cardName?.message}</p>
              </div>
              <div className="payment__form_input">
                <label className="card_label" htmlFor="cardNumber">
                  Credit Card Number
                </label>
                <br />
                <input
                  {...register("cardNumber", {
                    required:
                      check === "creditCard" ? "Card is required" : false,
                      minLength: {
                        value: check === "creditCard" ? 16 : undefined,
                        message: "Enter 16 digit card number",
                      },
                      maxLength: {
                        value: check === "creditCard" ? 16 : undefined,
                        message: "Enter 16 digit card number",
                      },
                  })}
                  type="text" autoComplete="off" name="cardNumber" id="cardNumber" className="card_input" />
                <p style={{ color: "red" }}>{errors.cardNumber?.message}</p>
              </div>
              <div className="payment__form_groups">
                <div className="payment__form_input">
                  <label className="card_label" htmlFor="expiryDate"> Expiration Date </label> <br />
                  <input
                    {...register("expiryDate", {
                      required:
                        check === "creditCard"
                          ? "Expiry Date is required"
                          : false,
                    })}
                    type="text" name="expiryDate" autoComplete="off" id="expiryDate" className="expiry_date"/>
                  <p style={{ color: "red" }}>{errors.expiryDate?.message}</p>
                </div>
                <div className="payment__form_input">
                  <label className="card_label" htmlFor="cvv">
                    CVV
                  </label>
                  <br />
                  <input
                    {...register("cvv", {
                      required:
                        check === "creditCard" ? "CVV is required" : false,
                    })}
                    type="text" autoComplete="off" name="cvv" id="cvv" className="cvv" />
                  <p style={{ color: "red" }}>{errors.cvv?.message}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" width="16" height="16" viewBox="0 0 22 22" className="card_help" >
                  <g id="help-circle" transform="translate(-1 -1)"> <circle id="Ellipse_126" data-name="Ellipse 126" cx="10" cy="10"  r="10" transform="translate(2 2)"
                      fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path id="Path_38006" data-name="Path 38006" d="M9.09,9a3,3,0,0,1,5.83,1c0,2-3,3-3,3" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2" />
                    <line id="Line_472" data-name="Line 472" x2="0.01" transform="translate(12 17)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
              <input type="checkbox" name="checkbox" />{" "}
              <span>Billing address same as shipping address</span>
              <div className="payment_paypal">
                <input
                  {...register("payment")}
                  type="radio" name="payment" value="paypal" className="payment_card_radio" />{" "}
                <span>PayPal</span>
              </div>
              <p style={{ color: "red" }}>{error}</p>
              <button type="submit" className="checkout__shipping_button">
                {isDesktop ? (
                  <span>Continue to Review Order</span>
                ) : (
                  <span>CONTINUE</span>
                )}
              </button>
            </form>
          </div>
        </aside>
        <aside className="checkout__payment_summary">
          <ProductSummary />
        </aside>
      </section>
    </>
  );
};

export default CheckoutPayment;
