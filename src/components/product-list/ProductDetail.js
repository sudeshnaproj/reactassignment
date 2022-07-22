import "./css/ProductDetail.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import star from "../../assets/Icons/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/actions/index";
import FooterUp from "../footer/footer-up/FooterUp";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const data = useSelector((state) => state.cart_reducer.cart);
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(addItem({ id, quantity }));
  };
  const getProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await response.json());
  };

  useEffect(() => {
    getProduct();
    let a = data.find((item) => item.id === parseInt(id));
    if (a) {
      setQuantity(a.quantity);
    }
  }, []);

  return (
    <>
      <section className="product__detail" aria-labelledby="product-description-title">
        <section className="product__detail_wrapper1" aria-labelledby="product-images">
          <aside className="product__detail_left">
            <div className="product__image" role="img" aria-label="product-image">
              <img className="product__image_img" src={product.image} alt="{product.title}" />
            </div>
            <div className="product__image_slider">
              <figure role="img" aria-label="product-image">
                <img className="slider_image" src={product.image} alt="swatch01" />
              </figure>
              <figure role="img" aria-label="product-image">
                <img className="slider_image" src={product.image} alt="swatch01" />
              </figure>
              <figure role="img" aria-label="product-image">
                <img className="slider_image" src={product.image} alt="swatch01" />
              </figure>
              <figure role="img" aria-label="product-image">
                <img className="slider_image" src={product.image} alt="swatch01" />
              </figure>
              <figure role="img" aria-label="product-image">
                <img className="slider_image" src={product.image} alt="swatch01" />
              </figure>
            </div>
          </aside>
          <aside className="product__detail_right" aria-labelledby="product-description">
            <header>
              <p className="product__detail_subtitle" aria-label="product-subtitle">Clothing / Category / {product.category}</p>
              <h2 className="product__detail_title" aria-label="product-title">{product.title}</h2>
            </header>
            <p className="product__detail_price"> ${product.price}</p>
            <div className="product__detail_rating" aria-label="product-rating">
              <figure>
                <img className="rating_icon" src={star} alt="rating icon 1" />
                <img className="rating_icon" src={star} alt="rating icon 1" />
              </figure>
              <figure>
                <img className="rating_icon" src={star} alt="rating icon 2" />
              </figure>
              <figure>
                <img className="rating_icon" src={star} alt="rating icon 3" />
              </figure>
              <figure>
                <img className="rating_icon" src={star} alt="rating icon 4" />
              </figure>
              <figure>
                <img className="rating_icon" src={star} alt="rating icon 5" />
              </figure>
              <figure> {product.rating && product.rating.rate}</figure>
            </div>
            <p className="product__detail_description">{product.description}</p>
            <hr />
            <div className="product__detail_buttons">
              <label>Quantity</label>
              <div className="product__detail_btn">
                <button type="button" disabled={quantity === 0} className="price_button" onClick={() => setQuantity((pre) => pre - 1)} >
                  -
                </button>
                <input className="input_value" value={quantity} id="numbr" />
                <button type="button" className="price_button" onClick={() => setQuantity((pre) => pre + 1)} >
                  +
                </button>
              </div>
            </div>            
            <button type="submit" disabled={quantity === 0} onClick={() => handleCart(product)} style={{ backgroundColor: quantity === 0 ? "#707070" : "#E26A2C", }}
               className="add__cart_btn">
              Add to cart
            </button>
            <figure className="product__detail_save_share">
            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" width="22.903" height="20.232" viewBox="0 0 22.903 20.232" >
                <path id="heart" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z" transform="translate(-0.549 -1.998)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg> <figcaption>Save </figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true"  width="20" height="22" viewBox="0 0 20 22">
                <g id="share-2" transform="translate(-2 -1)">
                  <circle id="Ellipse_155" data-name="Ellipse 155" cx="3" cy="3" r="3" transform="translate(15 2)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <circle id="Ellipse_156" data-name="Ellipse 156" cx="3" cy="3" r="3" transform="translate(3 9)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <circle id="Ellipse_157" data-name="Ellipse 157" cx="3" cy="3" r="3" transform="translate(15 16)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <line id="Line_551" data-name="Line 551" x2="6.83" y2="3.98" transform="translate(8.59 13.51)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <line id="Line_552" data-name="Line 552" x1="6.82" y2="3.98" transform="translate(8.59 6.51)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg> <figcaption>Share </figcaption>           
            </figure>
          </aside>
        </section>
        <section className="product__detail_wrapper2">
          <h2 className="product_title1">{product.title}</h2>
          <p className="product_title2">Description</p>
          <p className="product_description">
            {product.description}            
          </p>
          <hr className="product_description_line" />
        </section>
      </section>
      <FooterUp />
    </>
  );
};

export default ProductDetail;
