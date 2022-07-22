import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Slider.scss";

const Slider = () => {
    const navigate = useNavigate();
    return (
        <>
            <section>
                <div className='carousel__container' aria-labelledby="Signature-Collection Title">
                    <h2 className='carousel__title'>Shop The New <br /> Signature Collection</h2>
                    <p className='carousel__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
                    <button type='button' onClick={() => navigate('/product')} className='carousel__btn' >SHOP NOW</button>
                </div>
                <div className="carousel__wrapper" aria-labelledby="Signature-Collection Carousel">
                    <div id="item-1"></div>
                    <div id="item-2"></div>
                    <div className="carousel__item item-1">
                        <a href="#item-2">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='arrow-prev' width="25" height="25" viewBox="0 0 8.414 14.828">
                                <path id="chevron-left" d="M15,18,9,12l6-6" transform="translate(-8 -4.586)" fill="none" stroke="#00000033" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </a>
                        <a href="#item-2">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='arrow-next' width="25" height="25" viewBox="0 0 8.414 14.828">
                                <path id="chevron-right" d="M9,18l6-6L9,6" transform="translate(-7.586 -4.586)" fill="none" stroke="#00000033" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </a>
                    </div>
                    <div className="carousel__item item-2">
                        <a href="#item-1">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='arrow-prev' width="25" height="25" viewBox="0 0 8.414 14.828">
                                <path id="chevron-left" d="M15,18,9,12l6-6" transform="translate(-8 -4.586)" fill="none" stroke="#00000033" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </a>
                        <a href="#item-1">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='arrow-next' width="25" height="25" viewBox="0 0 8.414 14.828">
                                <path id="chevron-right" d="M9,18l6-6L9,6" transform="translate(-7.586 -4.586)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider