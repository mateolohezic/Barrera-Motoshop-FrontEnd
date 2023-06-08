import React from 'react'
import logo1 from '../../assets/truck.png'
import logo2 from '../../assets/tarjeta.png'
import logo3 from '../../assets/security.png'
import './caracteristicasEmpresa.css';

function CaracteristicasEmpresa() {
  return (
    <>
    <div className="cajaCaracteristicasEmpresa row mx-auto justify-content-evenly">
        <div className="col-3 cajaCaracteristicas">
            <div className="text-center">
                <img src={logo2} className="mx-auto img-fluid" alt='Todos los medios de pago'/>
                <div className="card-body infoCaracteristicaEmpresa">
                    <h3>Todos los medios de pago</h3>
                    <p>¡Elige el que te parezca más cómodo!</p>
                </div>
            </div>
        </div>
        <div className='separacionCaracteristicas'><div className='lineaDivisoraCaracteristicas'></div></div>
        <div className="col-3 cajaCaracteristicas">
            <div className="text-center">
                <img src={logo1} className="mx-auto img-fluid" alt='Envíos a todo el país' />
                <div className="card-body infoCaracteristicaEmpresa">
                    <h3>Envíos a todo el país</h3>
                    <p>¡Hacemos envíos a todas las provincias!</p>
                </div>
            </div>    
        </div>
        <div className='separacionCaracteristicas'><div className='lineaDivisoraCaracteristicas'></div></div>
        <div className="col-3 cajaCaracteristicas">
            <div className="text-center">
                <img src={logo3} className="mx-auto img-fluid" alt='Seguridad en tu compra' />
                <div className="card-body infoCaracteristicaEmpresa">
                    <h3>Seguridad en tu compra</h3>
                    <p>¡Tu compra siempre esta protegida!</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CaracteristicasEmpresa