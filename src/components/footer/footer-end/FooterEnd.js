import React from 'react';
import "./FooterEnd.scss";
import veniaLogo from "../../../assets/Icons/venia-logo.svg";
const FooterEnd = () => {
    return (
        <>
            <footer className='footer__end_wrapper' aria-labelledby="footer-terms-copyright">
                <div className='footer__end_container'>
                    <figure className="footer__venia_Logo ">
                        <img src={veniaLogo} alt="Logo" aria-hidden="true" />
                    </figure>
                    <div className="footer__copyright">
                        <p>© Company Name Address Ave, City Name, State ZIP</p>
                    </div>
                    <div className="footer__terms_condition">
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterEnd
