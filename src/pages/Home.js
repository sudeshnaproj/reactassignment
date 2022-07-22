import React from 'react';
import SecondaryBanner1 from '../components/home/secondary-banner/SecondaryBanner1';
import SecondaryBanner2 from '../components/home/secondary-banner2/SecondaryBanner2';
import ProductCategory from '../components/home/product-category/ProductCategory';
import FooterUp from '../components/footer/footer-up/FooterUp';
import Slider from '../components/home/slider-banner/Slider';

const Home = () => {
    return (
        <>
            <main>
                <Slider />
                <ProductCategory/>
                <SecondaryBanner1/>
                <SecondaryBanner2/>
                <FooterUp/>
            </main>
        </>
    )
}

export default Home