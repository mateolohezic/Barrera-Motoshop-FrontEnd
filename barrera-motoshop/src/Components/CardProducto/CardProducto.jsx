import React from 'react'
import './cardProducto.css'
import foto from '../../assets/cascoprueba.jpg'
import carrito from '../../assets/carrito.svg'

function CardProducto() {
  return (
    <>
        <div className='cardProducto'>
            <div className='portadaCardProducto'><img src={foto} alt="" /></div>
            <div className='tituloCardProducto'><span>Casco de moto super piola</span></div>
            <div className='precioCardProducto'><span>$49.999,00</span></div>
            <div className='botonCardProducto'>
              <button><img src={carrito} alt="" /></button>
            </div>
        </div>
    </>
  )
}

export default CardProducto