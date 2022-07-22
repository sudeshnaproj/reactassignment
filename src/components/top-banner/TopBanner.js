import React from 'react'
import { useSelector } from 'react-redux';
import "./TopBanner.scss";

const HeroBanner = () => {

const categoryName=useSelector((state)=>state.cart_reducer.category)
  return (
    <>
        <section className='top__banner' aria-labelledby="clothing-categories-title">
          <div className='top__banner-content'>
            <h2 className='top__banner-title'>{categoryName}</h2>
          </div>
          <div className='top__banner-image'></div>
          <div className='top__banner_content-mob'>
            <h2 className='top__banner-title'>{categoryName}</h2>
          </div>
        </section>
    </>
  )
}

export default HeroBanner