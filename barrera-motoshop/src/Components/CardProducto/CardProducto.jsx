import React from 'react'
import './cardProducto.css'
import foto from '../../assets/cascoprueba.jpg'
import carrito from '../../assets/carrito.svg'
import imagen2 from '../../assets/motoprueba.jpeg'

function CardProducto() {
  return (
    <>
        <div className='cardProducto'>
          <a href="/Productos/Producto" className='text-decoration-none'>
            <div className='portadaCardProducto'><img src={foto} alt="" /></div>
            <div className='tituloCardProducto'><span>Casco de moto super piola</span></div>
            <div className='precioCardProducto'><span>$49.999,00</span></div>
            <div className='botonCardProducto'>
              <a href="/Carrito">            
                <button><img src={carrito} alt="Producto" /></button>
              </a>      
            </div>
          </a>
        </div>
    </>
  )
}

export default CardProducto