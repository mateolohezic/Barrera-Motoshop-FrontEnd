import React from 'react'
import './cardProductoCategorias.css'
import foto from '../../assets/cascoprueba.jpg'
import carrito from '../../assets/carrito.svg'
import imagen2 from '../../assets/motoprueba.jpeg'

function CardProductoCategorias() {
  return (
    <>
        <div className='cardProductoCategorias'>
          <a href="/Productos/Producto" className='text-decoration-none'>
            <div className='portadaCardProductoCategorias'><img src={foto} alt="" /></div>
            <div className='tituloCardProductoCategorias'><span>Casco de moto super piola</span></div>
            <div className='precioCardProductoCategorias'><span>$49.999,00</span></div>
            <div className='botonCardProductoCategorias'>
              <a href="/Carrito">            
                <button><img src={carrito} alt="Producto" /></button>
              </a>      
            </div>
          </a>
        </div>
    </>
  )
}

export default CardProductoCategorias