import React from 'react';
import TopBanner from '../components/top-banner/TopBanner';
import ProductList from '../components/product-list/ProductList';
import FooterUp from '../components/footer/footer-up/FooterUp';

const Product = () => {
  return (
    <>
      <article>
        <TopBanner />
        <ProductList />
        <FooterUp/>
      </article>
    </>
  )
}

export default Product