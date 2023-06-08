import React from 'react'
import './botonWhatsapp.css'
import whatsapp from '../../assets/whatsapp.png'

function BotonWhatsapp() {
  return (
    <>
    <a href="https://api.whatsapp.com/send?phone=543815376736&text=Hola!%20%F0%9F%91%8B%F0%9F%91%8B%F0%9F%91%8B" target="_blank" className='botonWhatsapp'> 
        <tooltip role="tooltip" className='contactanosWhatsapp'>Contáctanos!</tooltip>
        <img src={whatsapp} alt="Whatsapp Barrera Motoshop" />
    </a>
    </>
  )
}

export default BotonWhatsapp