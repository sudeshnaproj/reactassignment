import React, { useState } from "react";
import "./Cart.scss";
import trash from "../../assets/Icons/trash-2.svg";
import edit from "../../assets/Icons/edit-2.svg";
import chevron from "../../assets/Icons/chevron-down.svg";
import { useSelector, useDispatch } from "react-redux";
import { increaseQt, decreaseQt, remove } from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart_reducer.cart);

  const [id, setId] = useState([]);
  let priceAndQuantity = cart?.map((item) => {
    return { price: item.price, quanity: item.quantity };
  });
  let totalSum = priceAndQuantity
    ?.map((i) => i.price * i.quanity)
    ?.reduce((prev, cur) => {
      return prev + cur;
    }, 0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHeart = (e, index) => {
    const indexFound = id.indexOf(index);
    if (indexFound > -1) {
      let a = id;
      a.splice(indexFound, 1);
      setId([...id, a]);
    } else {
      setId([...id, index]);
    }
  };

  return (
    <>
      <section className="cart__wrapper aem-Grid aem-Grid--default--12 aem-Grid--phone--1" aria-labelledby="shopping-cart">
        <header>
        <Link to="/"> {" "} <h2 className="cart__shopping_bag">Shopping Bag</h2> </Link>
        </header>
        <aside className="cart__left aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--1" aria-labelledby="cart-product">
          {cart.map((cart) => {
            return (
              <div className="cart__product_wrapper aem-Grid aem-Grid--default--12 aem-Grid--phone--1" key={cart.id} aria-labelledby="cart-product-item" >
                <div className="product__wrapper_left aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--1">
                  <img src={cart.image} alt="cart titile here" className="cart__img" />
                  <div className="content-wrapper">
                    <h2 className="">{cart.category}</h2>
                    <p>Size: Medium</p>
                    <p>Color: Medium</p>
                    <p>{cart.price}</p>
                  </div>
                </div>
                <div className="product__wrapper_right aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--1">
                  <div className="button__qty">
                    <button type="button" className="button__qty_btn" onClick={() => dispatch(decreaseQt(cart.id))}>
                      {" "}
                      -{" "}
                    </button>
                    <input className="button__qty_input" type="string" value={cart.quantity} id="numbr" />
                    <button className="button__qty_btn" onClick={() => dispatch(increaseQt(cart.id))}>
                      {" "}
                      +{" "}
                    </button>
                  </div>
                  <div className="cart_edit">
                    <button type="button" onClick={() => { navigate(`/product/${cart.id}`); }}>
                      {" "}
                      <img src={edit} alt="edit icon" /> Edit{" "}
                    </button>
                    <button type="button" onClick={() => dispatch(remove(cart.id))} >
                      <img src={trash} alt="trash icon" /> Remove
                    </button>
                    <button type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="17" height="17" viewBox="0 0 22.903 20.232" onClick={(e) => handleHeart(e, cart.id)} >
                        <path id="heart" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z"
                          transform="translate(-0.549 -1.998)" fill={id.includes(cart.id) ? "#333" : "none"} stroke="#172026" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2"/>
                      </svg> Save for later
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </aside>
        <aside className="cart__right aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1" aria-labelledby="product-summary">
          <div className="product__summary_wrapper">
            <strong>Pricing Summary</strong>
            <ul className="product__summary_content">
              <li>Subtotal</li>
              <li>${totalSum}</li>
            </ul>
            <ul className="product__summary_content">
              <li>Coupon</li>
              <li>$77.00</li>
            </ul>
            <ul className="product__summary_content">
              <li>Gift Card</li>
              <li>$100.00</li>
            </ul>
            <ul className="product__summary_content">
              <li>Estimated Tax</li>
              <li>$28.00</li>
            </ul>
            <ul className="product__summary_content">
              <li>Estimated Shopping</li>
              <li>Free</li>
            </ul>
            <ul className="product__summary_content">
              <li style={{ fontWeight: "bold" }}>Estimated Total</li>
              <li style={{ fontWeight: "bold" }}>${totalSum + 100 + 28}</li>
            </ul>
            <div className="product__checkout_button">
              <button type="button" className="product__checkout_btn" disabled={cart.length === 0} onClick={() => navigate("/checkout")}>
                {" "} CHECKOUT </button>
              <button type="button" className="product__checkout_paypal">
                {" "} <img src={require("../../assets/images/ppbtn.png")} alt="Paypal" />{" "}
              </button>
            </div>
          </div>
        </aside>
      </section>
      <section className="select__wrapper" aria-labelledby="estimate-shopping-title">
        <ul className="select__wrapper_list" role="listbox">
          <li>Estimate Your Shopping</li>
          <li>
            Shopping to 91001 <img src={chevron} alt="dropdown" />
          </li>
        </ul>
        <ul className="select__wrapper_list" role="listbox">
          <li>Enter a Coupon code</li>
          <li>
            20% discount applied <img src={chevron} alt="dropdown" />
          </li>
        </ul>
        <ul className="select__wrapper_list" role="listbox">
          <li>Apply Gift Card </li>
          <li>
            <img src={chevron} alt="dropdown" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Cart;
