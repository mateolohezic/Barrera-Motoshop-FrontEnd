import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


function Header() {
  return (
    <header>
        <div id='header'>

            <div className='nav__conteiner'>

              <Link to="/">
                <img src='/images/logo.svg' className='header__logo' alt='Logo BarreraMotoshop'/>
              </Link>

              <Navbar/>


          </div>


            <div className='header__box'>
              <Link to="/Login" className="usuario">
                <div >
                  <img src='/images/user.svg' className='usuario__svg' alt='Logo BarreraMotoshop'/>
                </div>
              </Link>

              <Link to="/" className="carrito">
                <div>
                  <img src='/images/carrito.svg' className='carrito__svg' alt='Logo BarreraMotoshop'/>
                </div>
              </Link>
            </div>


        </div>


    </header>
  )
}

export default Header