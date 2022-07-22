import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./SecondaryBanner1.css"

const SecondaryBanner1 = () => {
const navigate=useNavigate()
    return (
        <>
            <section className="secondary__banner1" aria-labelledby="signature-legging-title">
                <aside className='secondary__banner1_content'>
                    <h2 className='secondary__banner1_title'>Take Off In The <br />  New Signature Legging</h2>
                    <h5 className='secondary__banner1_title2'>Lorem Ipsum Dolor Tempor</h5>
                    <p className='secondary__banner1_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
                    <div className='secondary__banner1_buttons'>
                        <button type='button' className='button__1'>SHOP COLLECTION</button>
                        <button onClick={()=>navigate(`/product`)} type='button' className='button__2'>SHOP NOW</button>                        
                    </div>
                    <hr className='secondary__banner2_bottomline'/>
                </aside>
                <aside className='secondary__banner1-image' role="img" aria-label="signature-legging"></aside>
            </section>
        </>
    )
}

export default SecondaryBanner1