import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardProducto from '../CardProducto/CardProducto';
import favourite from '../../assets/favourite.png'
import './destacadosInicio.css'

function DestacadosInicio() {

    const responsiveCarousel = {
        superLargeDesktop: {
          breakpoint: { max: 10000, min: 1200 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1200, min: 992 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 992, min: 576 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1
        }
      };

    return (
        <>
            <div className='destacadosInicioContenedor'>
                <div className='tituloDestacadosInicio'><h1><img src={favourite} alt="Destacados Inicio" />DESTACADOS</h1></div>
            </div>
            <div className='divisionDestacadosInicio'></div>
            <div className='carouselDestacadoInicio'>
                <Carousel infinite={true} autoPlay={true} pauseOnHover partialVisible={true} containerClass='carouselCardsDestacadoInicio' responsive={responsiveCarousel}>
                    <CardProducto/>
                    <CardProducto/>
                    <CardProducto/>
                    <CardProducto/>
                    <CardProducto/>
                    <CardProducto/>
                    <CardProducto/>
                    <CardProducto/>
                </Carousel>
            </div>
        </>
    )
}

export default DestacadosInicio