import React from 'react'
import CarouselProductDetails from '../../Components/CarouselProductDetails/CarouselProductDetails';
import InfoProductDetails from '../../Components/InfoProductDetails/InfoProductDetails';
import './productDetails.css'

function ProductDetails() {

  document.body.classList.add('product-details');

  return (
    <>
    <div className="bg"></div>
    <div className='ContenedorProductDetails'>
      <CarouselProductDetails/>
      <InfoProductDetails/>
    </div>
    </>
  )
}

export default ProductDetails