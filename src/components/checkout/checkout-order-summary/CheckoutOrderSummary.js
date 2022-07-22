import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutTitle from "../../common-component/checkout-title/CheckoutTitle";
import ProductSummary from "../../common-component/product-summary/ProductSummary";
import "./CheckoutOrderSummary.scss";

const CheckoutOrderSummary = () => {
  const navigate = useNavigate()
  const userInfo = useSelector((state) => state.cart_reducer.UserInformation);
  const shippingInfo = useSelector(
    (state) => state.cart_reducer.DeliveryDetails
  );
  const paymentInfo = useSelector(
    (state) => state.cart_reducer.PaymentInformation
  );
  const cart = useSelector((state) => state.cart_reducer.cart);

  let last4 = paymentInfo.cardNumber.slice(-4);
  return (
    <>
      <CheckoutTitle />
      <section className="checkout__order_summary" aria-labelledby="order-summary-information">
        <aside className="checkout__order_summary_wrapper" aria-labelledby="order-summary-details">
          <header><h3 className="checkout__guest_title">Guest Checkout</h3></header>
          <div className="checkout__shipping_information">
            <div className="shipping__information_title">
              <h3 className="shipping_title">Shipping Information</h3>
              <figure onClick={() => navigate('/checkout')} className="shipping__edit">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 22.061 21.828" >
                  <path id="edit-1" d="M17,3a2.828,2.828,0,0,1,4,4L7.5,20.5,2,22l1.5-5.5Z" transform="translate(-1 -1.172)" fill="none"
                    stroke="#E26A2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>{" "}
                <figcaption>Edit</figcaption>
              </figure>
            </div>
            <div className="shipping__information_details">
              <p>
                <span>{userInfo.emailInput}</span> <br />
                <span>{userInfo.phoneInput}</span>{" "}
              </p>
              <p>
                <span> {userInfo.firstName}{" "} {userInfo.lastName}{" "} </span> <br />
                <span>
                  {userInfo.addressOne} {userInfo.addressTwo} ,{userInfo.City} ,
                  {userInfo.State} {userInfo.zipInput} {userInfo.Country}
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="checkout__shipping_method_details">
            <div className="shipping__method__details_title">
              <h3 className="shipping_title">Shipping Method</h3>
              <figure onClick={() => navigate('/CheckoutShipping')} className="shipping__edit">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 22.061 21.828" >
                  <path id="edit-2" d="M17,3a2.828,2.828,0,0,1,4,4L7.5,20.5,2,22l1.5-5.5Z" transform="translate(-1 -1.172)" fill="none" stroke="#E26A2C" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="2" />
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
          <div className="checkout__payment_method_info">
            <div className="payment__method__details_title">
              <h3 className="payment_title">Payment Information</h3>
              <figure onClick={() => navigate('/CheckoutPayment')} className="payment__edit">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" >
                  <path id="edit-3" d="M17,3a2.828,2.828,0,0,1,4,4L7.5,20.5,2,22l1.5-5.5Z" transform="translate(-1 -1.172)" fill="none" stroke="#E26A2C" strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="2" />
                </svg>{" "}
                <figcaption>Edit</figcaption>
              </figure>
            </div>
            <div className="shipping__information_details">
              <p>
                {paymentInfo.payment}
                <br />
                {paymentInfo.payment === "paypal" ? " " : `Visa ending with ${last4}`}
              </p>
            </div>
          </div>
          <div className="checkout__order_summary_info">
            {cart.map((item) => (
              <div className="order__products" key={item.id}>
                <div className="order__product_details">
                  <img style={{ width: "100px", height: "100px" }} className="order__product_img" src={item.image} alt="product" />
                  <div className="order__product_info">
                    <h4>{item?.title?.substring(0, 15)}</h4>
                    <p>quanity : {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => navigate('/orderSuccess')} className="checkout__shipping_button">Place Order</button>
          <div className="terms__condition">
            <p> By clicking confirm order you agree to our{" "}
              <span>Terms and Conditions</span>
            </p>
          </div>
        </aside>
        <aside className="checkout__payment_summary" aria-labelledby="order-summary-title">
          <ProductSummary />
        </aside>
      </section>
    </>
  );
};

export default CheckoutOrderSummary;
