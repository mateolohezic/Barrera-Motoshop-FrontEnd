import React from 'react'
import CarouselProductDetails from '../../Components/CarouselProductDetails/CarouselProductDetails';
import InfoProductDetails from '../../Components/InfoProductDetails/InfoProductDetails';
import './productDetails.css'

function ProductDetails() {

  document.body.classList.add('product-details');

  return (
    <>
    <div className="bg"></div>
    <div className='botonVolverAlInicio'><a href="/" className='text-decoration-none'><button><i className="bi bi-chevron-left"></i>Inicio</button></a></div>
    <div className='ContenedorProductDetails'>
      <CarouselProductDetails/>
      <InfoProductDetails/>
    </div>
    <div className='contenedorDescripcionProductDetails'>
      <h4><i className="bi bi-chevron-double-right"></i>DESCRIPCIÓN</h4>
      <div className='contenedorParrafosProductDetails'>
        <p>Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. </p>
        <p>Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. </p>
        <p>Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. Este casco esta re piola. </p>
      </div>
    </div>
    </>
  )
}

export default ProductDetails