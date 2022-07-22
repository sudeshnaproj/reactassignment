import React from "react";
import "./FooterUp.scss";
import facebook from "../../../assets/Icons/facebook.svg";
import instagram from "../../../assets/Icons/instagram.svg";
import twitter from "../../../assets/Icons/twitter.svg";
import { Link } from "react-router-dom";

const FooterUp = () => {
  return (
    <>
      <footer className="footer__wrapper aem-Grid aem-Grid--default--12 aem-Grid--phone--1" aria-labelledby="signin-contact-socialicons">
        <div className="footer__wrapper_container">
          <div className="footer__wrapper_links aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1" aria-label="signin">
            <strong>Account</strong>
            <ul>
              <li className="footer__list">
                <Link to="/" target="_self">Sign in</Link>
              </li>
              <li className="footer__list">
                <Link to="/" target="_self">Register</Link>
              </li>
              <li className="footer__list">
                <Link to="/" target="_self">Order Status</Link>
              </li>
            </ul>
          </div>
          <div className="footer__wrapper_links aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1" aria-label="about">
            <strong>About Us</strong>
            <ul>
              <li className="footer__list">
                <Link to="/" target="_self">Our Story</Link>
              </li>
              <li className="footer__list">
                <Link to="/" target="_self">Courses</Link>
              </li>
            </ul>
          </div>
          <div className="footer__wrapper_links aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1" aria-label="contact"> 
            <strong>Help</strong>
            <ul>
              <li className="footer__list">
                <Link to="/" target="_self">
                  Contact Us
                </Link>
              </li>
              <li className="footer__list">
                <Link to="/" target="_self">
                  Order Status
                </Link>
              </li>
              <li className="footer__list">
                <Link to="/" target="_self">
                  Return
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__wrapper_links last aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1" aria-label="social-icons">
            <strong className="column_4_title">Follow Us</strong>
            <p className="column_4_desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="social-icons">
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterUp;
