import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutTitle from "../../common-component/checkout-title/CheckoutTitle";
import ProductSummary from "../../common-component/product-summary/ProductSummary";
import { useForm } from "react-hook-form";
import "./CheckoutContact.scss";
import { useDispatch , useSelector } from "react-redux";
import { UserInformation } from "../../../redux/actions";

const CheckoutContact = (props) => {
  const userInfo = useSelector((state) => state.cart_reducer.UserInformation);
  const { loggedIn } = props;
  const dispatch= useDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues:userInfo
  });
  const [isDesktop, setDesktop] = useState(window.innerWidth > 769);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const updateText = () => {
    setDesktop(window.innerWidth > 769);
  };
  useEffect(() => {
    window.addEventListener("resize", updateText);
    return () => window.removeEventListener("resize", updateText);
  });
  
  const onSubmit = (data) => {
    if (!loggedIn) {
      setError("Please Login First");
      return;
    }
    dispatch(UserInformation(data))
    navigate("/checkoutShipping");
  };
  return (
    <>
      <CheckoutTitle />
      <section className="checkout__contact" aria-labelledby="checkout-contact-information">
        <aside className="checkout__contact_form">
          <h3 className="checkout__guest_title">Guest Checkout</h3>
          <div className="checkout__guest_info">
            <h4 className="checkout__info_title">Contact Information</h4>
            <p className="checkout__info_desc">
              We’ll use these details to keep you informed on your delivery.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} role="form" aria-label="contact-form">
            <div className="form__input_groups">
              <div className="form__input_grp">
                <label className="checkout__contact_label" htmlFor="emailInput"> Email </label> <br />
                <input
                  {...register("emailInput", {
                    required: "Email Address is required",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Enter valid Email",
                    },
                  })}
                  type="text" name="emailInput" id="emailInput" placeholder="abc@xyz.com" autoComplete="off" />
                <p style={{ color: "red" }}>{errors?.emailInput?.message}</p>
              </div>
              <div className="form__input_grp">
                <label className="checkout__contact_label" htmlFor="phoneInput">Phone number</label>
                <br />
                <input
                  {...register("phoneInput", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Enter numbers only",
                    },
                    minLength:{
                      value:10,
                      message:'Enter 10 digit mobile number'
                    },
                    maxLength:{
                      value:10,
                      message:'Enter 10 digit mobile number'
                    }
                  })}
                  type="text" name="phoneInput" id="phoneInput" placeholder="(222) 222-222" autoComplete="off" />
                <p style={{ color: "red" }}>{errors.phoneInput?.message}</p>
              </div>
            </div>
            <h4>1. Shipping Information</h4>
            <div className="form__input_grp">
              <label className="checkout__contact_label" htmlFor="countryList"> {" "} Country </label>{" "} <br />
              <select {...register("Country", { required: "Country is required" })}
                className="country__dropdown" id="countryList" >
                <option name="USA">USA</option>
                <option name="India">India</option>
                <option name="Russia">Russia</option>
                <option name="Japan">Japan</option>
              </select>
              <p style={{ color: "red" }}>{errors.Country?.message}</p>
            </div>
            <div className="form__input_groups">
              <div className="form__input_grp">
                <label className="checkout__contact_label" htmlFor="firstName"> First Name </label> <br />
                <input
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  type="text" name="firstName" id="firstName" autoComplete="off"/>
                <p style={{ color: "red" }}>{errors.firstName?.message}</p>
              </div>
              <div className="form__input_grp">
                <label className="checkout__contact_label" htmlFor="lastName"> Last Name </label> <br />
                <input
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  type="text" name="lastName" id="lastName" autoComplete="off"/>
                <p style={{ color: "red" }}>{errors.lastName?.message}</p>
              </div>
            </div>
            <div className="form__input_groups">
              <div className="form__input_grp">
                <label className="checkout__contact_label" htmlFor="addressOne"> Street Address </label> <br />
                <input
                  {...register("addressOne", {
                    required: "Street Address is required",
                  })}
                  type="text" name="addressOne" id="addressOne" autoComplete="off"/>
                <p style={{ color: "red" }}>{errors.addressOne?.message}</p>
              </div>
              <div className="form__input_grp">
                <label className="checkout__contact_label" htmlFor="addressTwo">
                  Street Address 2
                </label>
                <br />
                <input
                  {...register("addressTwo")}
                  type="text" name="addressTwo" id="addressTwo" autoComplete="off"/>
              </div>
            </div>
            <div className="form__input_groups">
              <div className="form__input_grp">
                <label className="checkout__contact_label" htmlFor="cityInput"> City </label> <br />
                <input
                  {...register("cityInput", { required: "City is required" })}
                  type="text" name="cityInput" id="cityInput" autoComplete="off"/>
                <p style={{ color: "red" }}>{errors.cityInput?.message}</p>
              </div>
              <div className="form__input_grp">
                <label className="checkout__contact_label" htmlFor="stateInput">  State </label> <br />
                <select
                  {...register("State", { required: "State is required" })}
                  className="state__dropdown"
                  id="stateList" >
                  <option name="California">California</option>
                  <option name="Delhi">Delhi</option>
                  <option name="Tokyo">Tokyo</option>
                  <option name="Mexico">Mexico</option>
                </select>
                <p style={{ color: "red" }}>{errors.State?.message}</p>
              </div>
              <div className="form__input_grp">
                <label className="checkout__contact_label" htmlFor="zipInput"> Zip </label> <br />
                <input
                  {...register("zipInput", {
                    required: "Zipcode is required",
                    valueAsNumber: true,
                    pattern: {
                      value: /^(0|[1-9]\d*)(\.\d+)?$/,
                      message: "enter numbers only",
                    },
                  })}
                  type="text" name="zipInput" id="zipInput" placeholder="91001" autoComplete="off"/>
                <p style={{ color: "red" }}>{errors.zipInput?.message}</p>
              </div>
            </div>
            <p style={{ color: "red" }}> {error}</p>
            <button type="submit" className="checkout__contact_submitbtn">
              {isDesktop ? (
                <span>Continue to Shipping Method</span>
              ) : (
                <span>CONTINUE</span>
              )}
            </button>
          </form>
          <div className="checkout__other_option" aria-label="shipping-method">
            <p className="shipment_method">2. Shipping Method</p>
            <p className="payment_method">3. Payment Method</p>
          </div>
        </aside>
        <aside className="checkout__summary" aria-labelledby="product-summary">
          {!loggedIn && (
            <div className="checkout__login" aria-label="sign-in">
              <h4 className="checkout__login_title">
                Sign in for Express Checkout
              </h4>
              <button
                onClick={() => navigate("/login")}
                type="button"
                className="checkout__login_btn"
              >
                SIGN IN
              </button>
            </div>
          )}
          <ProductSummary />
        </aside>
      </section>
    </>
  );
};

export default CheckoutContact;
