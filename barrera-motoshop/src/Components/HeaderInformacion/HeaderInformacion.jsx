import React from 'react'
import './headerInformacion.css'

function HeaderInformacion() {
  return (
    <>
        <div className='headerInformacionInicio'>
            <div className='itemHeaderInformacion'><i className="bi bi-box-seam-fill"></i>ENVÍOS A TODO EL PAÍS</div>
            <div className='itemHeaderInformacion'><i className="bi bi-geo-alt-fill"></i>PEDRO DE VILLALBA 300, YERBA BUENA, TUCUMÁN</div>
            <div className='itemHeaderInformacion'><i className="bi bi-envelope-fill"></i>BARRERAMOTOSHOP@GMAIL.COM</div>
            <div className='itemHeaderInformacion'><i className="bi bi-whatsapp"></i>+54 9 381 5690169</div>
        </div>
    </>
  )
}

export default HeaderInformacion