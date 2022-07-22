import React, { useState } from "react";
import "./Navbar.scss";
import shoppingBag from "../../assets/Icons/shopping-bag.svg";
import hamburgerIcon from "../../assets/Icons/align-justify.svg";
import timesIcon from "../../assets/Icons/x.svg";
import veniaLogo from "../../assets/Icons/venia-logo.svg";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { filterCategory } from "../../redux/actions/index";

const Navbar = () => {
  const state = useSelector((state) => state.cart_reducer.cart);
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    showMenu === true ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <>
      <header className="navbar aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
        <nav className="navbar__nav" role="navigation" aria-labelledby="main nav">
          <button
            className="navbar__nav-hamburger" onClick={handleClick} aria-expanded="true">
            <img src={hamburgerIcon} alt="hamburger" aria-hidden="true" />
          </button>
          <div className="navbar__nav-logo" aria-label="navbar title">
            <Link to="/"><img src={veniaLogo} alt="Logo"/></Link>
          </div>
          <div className={showMenu ? "navbar__nav_link active" : "navbar__nav_link"} aria-label="nav links" aria-expanded="true">
            <div className="navbar__btn-close">
              <h2>Shop Categories</h2>
              <img onClick={handleClick} src={timesIcon} alt="Button to close fliter bar"/>
            </div>
            <ul tabIndex={0} role="listbox">
            <li >
                <Link to="/" target="_self" >Home</Link>
              </li>
              <li >
                <Link to="/product" target="_self" onClick={() => dispatch(filterCategory("All"))}>Shop</Link>
              </li>
              <li>
                <Link to="/product/women" target="_self" onClick={() => dispatch(filterCategory("women's clothing"))}>Women</Link>
              </li>
              <li>
                <Link to="/product/men" target="_self" onClick={() => dispatch(filterCategory("men's clothing"))}>Men</Link>
              </li>
              <li>
                <Link to="/product/electronics" target="_self" onClick={() => dispatch(filterCategory("electronics"))}>Smart Gear</Link>
              </li>
              <li>
                <Link to="/product/jewelery" target="_self" onClick={() => dispatch(filterCategory("jewelery"))}>Accessories</Link>
              </li>
            </ul>
          </div>
          <div className="navbar__nav-cart">
            <Link to="/product/Cart">
              <img src={shoppingBag} alt="shopping cart" /> 
              <span className="cart__count">({state.length})</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
