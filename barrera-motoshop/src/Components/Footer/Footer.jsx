import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

function Footer() {
  return (
    <>
        <footer className='footer'>
            <div className='logoFooter'>
                <a href="/">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className='infoFooter'>
                <h3>Barrera Motoshop</h3>
                <span>Encontrá en Barrera Motoshop todo lo que necesitas para potenciar tu pasión. Todos nuestros productos son de la mejor calidad y cuentan con garantía. <b>Saca el Profesional que tenes dentro.</b></span>
            </div>
            <div className='contactoFooter'>
                <h2>CONTACTO</h2>
                <div><i className="bi bi-geo-alt-fill"></i>YERBA BUENA, TUCUMÁN</div>
                <div><i className="bi bi-mailbox2"></i>PEDRO DE VILLALBA 300 C.P. 4107</div>
                <div><i className="bi bi-envelope-fill"></i>BARRERAMOTOSHOP@GMAIL.COM</div>
                <div><i className="bi bi-telephone-fill"></i>+54 9 381 5690169</div>
                <div><i className="bi bi-whatsapp"></i>+54 9 381 5690169</div>
            </div>
        </footer>
    </>
  )
}

export default Footer