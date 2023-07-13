import React from 'react'
import './tiraMarcas.css'
import logo1 from '../../assets/logoBeta.png'
import logo2 from '../../assets/logoYamaha.png'
import logo3 from '../../assets/logoKTM.png'
import logo4 from '../../assets/logoHonda.png'
import logo5 from '../../assets/logoKawasaki.png'
import logo6 from '../../assets/logoBorilli.png'
import logo7 from '../../assets/logoIphone.png'
import logo8 from '../../assets/logoPolisport.png'

function TiraMarcas() {
  return (
    <>
        <div className='tiraMarcasInicio'>
            <div className='MarcaDeTira'>
                <img src={logo1} alt="Marca Barrera Motoshop" />
            </div>
            <div className='MarcaDeTira'>
                <img src={logo2} alt="Marca Barrera Motoshop" />
            </div>
            <div className='MarcaDeTira'>
                <img src={logo3} alt="Marca Barrera Motoshop" />
            </div>
            <div className='MarcaDeTira'>
                <img src={logo4} alt="Marca Barrera Motoshop" />
            </div>
            <div className='MarcaDeTira'>
                <img src={logo5} alt="Marca Barrera Motoshop" />
            </div>
            <div className='MarcaDeTira'>
                <img src={logo6} alt="Marca Barrera Motoshop" />
            </div>
            <div className='MarcaDeTira'>
                <img src={logo7} alt="Marca Barrera Motoshop" />
            </div>
            <div className='MarcaDeTira'>
                <img src={logo8} alt="Marca Barrera Motoshop" />
            </div>
        </div>
    </>
  )
}

export default TiraMarcas