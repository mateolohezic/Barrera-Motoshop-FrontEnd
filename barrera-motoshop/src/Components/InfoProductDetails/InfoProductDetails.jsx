import React from 'react'
import './infoProductDetails.css'

function InfoProductDetails() {
  return (
    <>
        <div className='containerInfoProductDetails'>
            <div className='nombreInfoProductDetails'><h1><i className="bi bi-chevron-double-right"></i>Casco super piola super piola super piola super piola</h1></div>
            <div className='categoriaInfoProductDetails'><h2><i className="bi bi-gear-wide-connected"></i>Casco</h2></div>
            <div className='precioInfoProductDetails'>$49.998.98<span><i className="bi bi-credit-card-fill"></i>12 cuotas sin interés</span></div>
            <div className='tituloDescripcionProductDetails'>Descripción</div>
            <div className='parrafoDescripcionProductDetails'>Este casco esta muy bueno. Este casco esta muy bueno. Este casco esta muy bueno. Este casco esta muy bueno. Este casco esta muy bueno. Este casco esta muy bueno. Este casco esta muy bueno. Este casco esta muy bueno. Este casco esta muy bueno. Este casco esta muy bueno. Este casco esta muy bueno. Este casco esta muy bueno. Este casco esta muy bueno.</div>
            <div className='contenedorCaracteristicasProductDetails'>
              <div className='caracteristicaProductDetails'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-seam" width="27" height="27" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CE1D1F95" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" />
                  <path d="M12 12l8 -4.5" />
                  <path d="M8.2 9.8l7.6 -4.6" />
                  <path d="M12 12v9" />
                  <path d="M12 12l-8 -4.5" />
                </svg>  
                <span>Stock disponible!</span>
              </div>
              <div className='caracteristicaProductDetails'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-truck" width="27" height="27" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CE1D1F95" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                </svg>
                <span>Envíos a todo el país</span>
              </div>
              <div className='caracteristicaProductDetails'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-check" width="27" height="27" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CE1D1F95" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
                  <path d="M15 19l2 2l4 -4" />
                </svg>
                <span>Compra protegida</span>
              </div>
            </div>
            <div className='contenedorTalleProductDetails'>
              <h3>Talle</h3>
              <div className='contenedorTalles'>
                <div className='talleElegir'>XS</div>
                <div className='talleElegir'>S</div>
                <div className='talleElegir'>M</div>
                <div className='talleElegir'>L</div>
                <div className='talleElegir'>XL</div>
                <div className='talleElegir'>XXL</div>
              </div>
            </div>
            <div className='botonComprarProductDetails'><button>COMPRAR</button></div>  
        </div>
    </>
  )
}

export default InfoProductDetails