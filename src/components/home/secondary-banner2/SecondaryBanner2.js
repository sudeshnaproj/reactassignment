import React from 'react';
import "./SecondaryBanner2.scss";
import Map from "../../../assets/Icons/map-pin.svg";
import { useNavigate } from 'react-router-dom';

const SecondaryBanner2 = () => {
const navigate=useNavigate()

  return (
    <>
      <section className='secondary__banner2' aria-labelledby="adventure-title">
        <div className='secondary__banner2_image' role="img" aria-label="conquer-adventure"></div>
        <div className='secondary__banner2_content'>
          <h2 className='secondary__banner2_title'>Conquer Your <br /> Next Adventure</h2>
          <p className='secondary__banner2_desc'>Lorem Ipsum Dolor Tempor</p>
          <button type='button' onClick={()=>navigate(`/product`)} className='secondary__banner2_button'>SHOP DEVICES</button>
        </div>  
        <div className='secondary__banner2_map'>
          <img src={Map} alt="Map Pin"/>
        </div>      
      </section>
    </>
  )
}

export default SecondaryBanner2