import { ReactComponent as Sliders } from "../../assets/Icons/sliders.svg";
import { ReactComponent as ArrowUp } from "../../assets/Icons/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/Icons/arrow-down.svg";
import { ReactComponent as ArrowLeft } from "../../assets/Icons/chevron-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/Icons/chevron-right.svg";
import "./css/Productlist.scss";
import timesIcon from "../../assets/Icons/x.svg";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { filterCategory } from "../../redux/actions";
import { orderBy } from "lodash";
const ProductList = () => {
  const [id, setId] = useState([]);
  const { allProduct } = useSelector((state) => state.cart_reducer);
  const [showFilter, setShowFilter] = useState(false);
  const categoryName = useSelector((state) => state.cart_reducer.category);

  const [checkedId, SetCheckedId] = useState(null);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/product":
        dispatch(filterCategory("All"));
        break;
      case "/product/men":
        dispatch(filterCategory("men's clothing"));
        break;
      case "/product/jewelery":
        dispatch(filterCategory("jewelery"));
        break;
      case "/product/women":
        dispatch(filterCategory("women's clothing"));
        break;
      case "/product/electronics":
        dispatch(filterCategory("electronics"));
        break;
      default:
        dispatch(filterCategory("All"));
        break;
    }
  }, [location]);
  useEffect(() => {
    setProduct(allProduct);
  }, [allProduct]);
  const handleClick = () => {
    showFilter === true ? setShowFilter(false) : setShowFilter(true);
  };

  const checkProduct = (e) => {
    let value = e.target.value;
    if (value === checkedId) {
      SetCheckedId(null);
    } else {
      SetCheckedId(value);
      dispatch(filterCategory(value));

      switch (value) {
        case "men's clothing":
          navigate(`men`);
          break;
        case "women's clothing":
          navigate(`women`);
          break;
        case "electronics":
          navigate(`${value}`);
          break;
        case "jewelery":
          navigate(`${value}`);
          break;
        case "All":
          navigate(`/product`);
          break;
        default:
          break;
      }
    }
  };
  const handleSort = (e) => {
    const name = e.target.value;
    if (name === "price") {
      let sortArray = orderBy(allProduct, [name], ["asc"]);
      setProduct(sortArray);
    } else {
      let sortArray = orderBy(allProduct, [(c) => c.rating.rate], ["dsc"]);
      setProduct(sortArray);
    }
  };
  const handleHeart = (e, index) => {
    const indexFound = id.indexOf(index);
    if (indexFound > -1) {
      let a = id;
      a.splice(indexFound, 1);
      setId([...id, a]);
    }
    else{
    setId([...id, index]);
    }
  };

  const ShowProducts = (e) => {
    return (
      <>
        {product.map((product, index) => {
          return (
            <div className="product_cards_card" key={product.id}>
              <figure>
              <img onClick={() => navigate(`/product/${product.id}`)} className="product__card_image" src={product.image}
                alt={product.title} />
              </figure>
              <h5 className="product__card_title">
                {product.title.substring(0, 15)}
              </h5>
              <p className="product__card_price">${product.price}</p>
              <figure className="product__card_save">
                <svg xmlns="http://www.w3.org/2000/svg" width="22.903" height="20.232" viewBox="0 0 22.903 20.232" onClick={(e) => handleHeart(e, index)} >
                  <path id="heart" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z"
                    transform="translate(-0.549 -1.998)" fill={id.includes(index) ? "#333" : "none"} stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </figure>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <section className="product__container aem-Grid aem-Grid--default--12 aem-Grid--phone--1" aria-labelledby="all-products-list">
        <aside className="product__filter aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--12 aem-GridColumn--phone--1" aria-label="product-filter">
          <div className="category">
            <ul>
              <li className="category_title">
              <a href="/product">Clothing</a>
              </li>
              <li className="category_title">
                <a href="/product"> / </a>
              </li>
              <li className="category_title">
                <a href="/product">Categories</a>
              </li>
              <li className="category_title">
                <a href="/product"> / </a>
              </li>
              <li className="category_title">
                <p className="product__filter-outwear">
                {categoryName}
                </p>
              </li>
            </ul>
          </div>
          <header className="product__filter_btn">
            <h4 onClick={handleClick} className="filter__mob" role="header" aria-label="filter-title">
              <Sliders style={{ width: "15px", height: "15px" }} />
              <span> Filter Results</span>
            </h4>
            <h4 onClick={handleSort} className="filter__mob" role="header" aria-label="sort-product-title">
              <ArrowUp style={{ width: "12px", height: "12px" }} />
              <ArrowDown style={{ width: "12px", height: "12px" }} />
              <span> Sort Products</span>
            </h4>
          </header>

          <header>
          <h3 className="filter__desktop"> Filters </h3>
          </header>

          <section className={ showFilter ? "product__filter_list active" : "product__filter_list" }>
            <div className="filter__button_mob">
              <h2>Filters</h2>
              <img onClick={handleClick} src={timesIcon} alt="Button to close fliter bar" role="img"/>
            </div>
            <hr className="horizontal_line"/>
            <div className="filter__item" aria-labelledby="filter-product">
              <header><h3 className="filter__item_title">Categories</h3></header>
              <ul className="filter__list" role="list">
                <li className="filter__list_item" role="listitem">
                  <input  value="All" type="checkbox" id={1} checked={checkedId === "All"} name="checkbox" onChange={checkProduct} aria-label="all-product-checkbox"/>
                  <label htmlFor="1" >All</label>
                </li>
                <li className="filter__list_item" role="listitem">
                  <input value="jewelery" type="checkbox" id={2} checked={checkedId === "jewelery"} name="checkbox" onChange={checkProduct} aria-label="jewelery-checkbox"/>
                  <label htmlFor="2">Jewellery</label>
                </li>
                <li className="filter__list_item" role="listitem">
                  <input value="electronics" type="checkbox" id={3} checked={checkedId === "electronics"} name="checkbox" onChange={checkProduct} aria-label="electronics-checkbox"/>
                  <label htmlFor="3">Electronics</label>
                </li>
                <li className="filter__list_item" role="listitem">
                  <input type="checkbox" name="checkbox" value="men's clothing" id={4} checked={checkedId === "men's clothing"} onChange={checkProduct} aria-label="men-checkbox"/>
                  <label htmlFor="4">Men's Clothing</label>
                </li>
                <li className="filter__list_item" role="listitem">
                  <input type="checkbox" name="checkbox" value="women's clothing" id={5} checked={checkedId === "women's clothing"} onChange={checkProduct}  aria-label="women-checkbox"/>
                  <label htmlFor="5">Women's Clothing</label>
                </li>
              </ul>
            </div>
            <hr className="horizontal_line"/>
          </section>
        </aside>
        <aside className="product__card_wrapper aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--12 aem-GridColumn--phone--1" aria-label="product-list">
          <div className="product__card_result">
            <div>{allProduct.length} Results</div>
            <select onChange={handleSort}>
              <option value="price">Sort By Price</option>
              <option value="rating">Sort By Rating</option>
            </select>
          </div>
          <div className="product_cards">
            <ShowProducts />
          </div>
          <section className="product__pagination" aria-labelledby="filter-pagination-product">
            <button type="button" className="pagination__btn">
              <ArrowLeft />
            </button>
            <ul className="pagination__list" role="listbox">
              <li role="listitem">
                <Link to="/product/women" target="_self" onClick={() => dispatch(filterCategory("women's clothing"))} > 1 </Link>
              </li>
              <li role="listitem">
                <Link to="/product/men" target="_self" onClick={() => dispatch(filterCategory("men's clothing"))}> 2 </Link>
              </li>
              <li role="listitem">
                <Link to="/product/electronics" target="_self" onClick={() => dispatch(filterCategory("electronics"))} > 3 </Link>
              </li>
              <li role="listitem">
                <Link to="/product/jewelery" target="_self" onClick={() => dispatch(filterCategory("jewelery"))} > 4 </Link>
              </li>
            </ul>
            <button type="button" className="pagination__btn">
              <ArrowRight />
            </button>
          </section>
        </aside>
      </section>
    </>
  );
};

export default ProductList;
