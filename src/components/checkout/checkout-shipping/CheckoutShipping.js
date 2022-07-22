import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutTitle from "../../common-component/checkout-title/CheckoutTitle";
import ProductSummary from "../../common-component/product-summary/ProductSummary";
import "./CheckoutShipping.scss";
import { DeliveryDetails } from "../../../redux/actions";
const CheckoutShipping = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 769);
  const userInfo = useSelector((state) => state.cart_reducer.UserInformation);
  const [shipping, setShipping] = useState();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  const updateText = () => {
    setDesktop(window.innerWidth > 769);
  };
  useEffect(() => {
    window.addEventListener("resize", updateText);
    return () => window.removeEventListener("resize", updateText);
  });

  const handleChange = (e) => {
    let value = e.target.value;
    setId(value);
    switch (value) {
      case "1":
        setShipping({
          delivery: "Standard Delivery",
          days: "Est. delivery in 4-8 business days",
          price: "Free",
        });

        break;
      case "2":
        setShipping({
          delivery: "Express Delivery",
          days: "Est. delivery in 2-5 business days",
          price: "$17.95",
        });

        break;
      case "3":
        setShipping({
          delivery: "Next day Delivery",
          days: "Next business days",
          price: "$53.61",
        });

        break;
      default:
        setShipping({});
    }
  };
  const handleClick = () => {
    if (id === null) {
      setError("Please Select one option");
      return;
    }
    dispatch(DeliveryDetails(shipping));
    navigate("/checkoutPayment");
  };
  return (
    <>
      <CheckoutTitle />
      <section className="checkout__shipping" aria-labelledby="checkout-shipping-details">
        <aside className="checkout__shipping_wrapper">
          <header>
            <h3 className="checkout__guest_title">Guest Checkout</h3>
          </header>
          <div className="checkout__shipping_information">
            <div className="shipping__information_title">
              <h3 className="shipping_title">Shipping Information</h3>
              <figure onClick={() => navigate("/checkout")} className="shipping__edit" >
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 22.061 21.828" >
                  <path id="edit-2"
                    d="M17,3a2.828,2.828,0,0,1,4,4L7.5,20.5,2,22l1.5-5.5Z" transform="translate(-1 -1.172)" fill="none" stroke="#E26A2C" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="2" />
                </svg>{" "} <figcaption>Edit</figcaption>
              </figure>
            </div>
            <div className="shipping__information_details">
              <p>
                <span>{userInfo.emailInput}</span> <br />
                <span>{userInfo.phoneInput}</span>{" "}
              </p>
              <p>
                <span> {userInfo.firstName} {userInfo.lastName}{" "} </span>{" "}
                <br />
                <span>
                  {userInfo.addressOne} {userInfo.addressTwo} ,{userInfo.City} ,
                  {userInfo.State} {userInfo.zipInput} {userInfo.Country}
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="checkout__shipping_method">
            <div className="shipping_radio_field">
              <label></label>
              <input type="radio" onChange={handleChange} name="standard" value="1" />{" "}
              <span> {" "}
                <b>Standard Shipping</b> (4-8 business days via USPS) FREE
              </span>
            </div>
            <div className="shipping_radio_field">
              <input type="radio" onChange={handleChange} name="standard" value="2" />{" "}
              <span> {" "} <b>Express Delivery</b> (2-5 business days via USPS) $17.95 </span>
            </div>
            <div className="shipping_radio_field">
              <input type="radio" onChange={handleChange} name="standard" value="3" />{" "}
              <span> {" "} <b>Next Day Delivery</b> (Next business days via FedEx) $53.61 </span>
            </div>
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <button type="button" onClick={handleClick} className="checkout__shipping_button">
            {isDesktop ? (<span>Continue to Payment</span>) : (<span>CONTINUE</span>)}
          </button>
          <div className="checkout__other_option">
            <p className="payment_method">3. Payment Method</p>
          </div>
        </aside>
        <aside className="checkout__shipping_summary">
          <ProductSummary />
        </aside>
      </section>
    </>
  );
};

export default CheckoutShipping;
