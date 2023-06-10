import React from 'react'
import './carouselProductDetails.css'
import imagen from '../../assets/cascoprueba.jpg'
import imagen2 from '../../assets/motoprueba.jpeg'
import imamgenLogo from '../../assets/logo.svg'

function CarouselProductDetails() {
  return (
    <>
        <div id="carouselProductDetails" className="carousel slide carouselProductDetails" data-bs-touch="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={imagen} className="" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={imagen2} className="" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/177/160/products/diseno-sin-titulo-61-f812e6b8e834a6d3a716856491069520-1024-1024.webp" className="" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselProductDetails" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselProductDetails" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}

export default CarouselProductDetails