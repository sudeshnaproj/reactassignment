import React from 'react';
import "./ProductSummary.css"
import { useSelector } from 'react-redux';
const ProductSummary = () => {
  const cart = useSelector((state) => state.cart_reducer.cart);


  let priceAndQuantity = cart?.map((item) => {
    return { price: item.price, quanity: item.quantity };
  });
  let totalSum= priceAndQuantity?.map((i) => i.price * i.quanity)?.reduce((prev, cur) => {
      return prev + cur;
    },0);

  return (
    <>
        <div className="product__summary_wrapper" aria-labelledby="product-summary">
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
            <ul className="product__summary_content" >
              <li style={{fontWeight:'bold'}}>Estimated Total</li>
              <li style={{fontWeight:'bold'}}>${totalSum+100+28}</li>
            </ul>
          </div>
    </>
  )
}


export default ProductSummary