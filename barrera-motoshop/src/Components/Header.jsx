import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header id='header'>
      <Link to="/">
        <img src='/images/logo.svg' className='header-logo' alt='Logo BarreraMotoshop'/>
      </Link>
      <Link to="/Login" className="usuario">
        <div >
          <img src='/images/user.svg' className='usuario-svg' alt='Logo BarreraMotoshop'/>
        </div>
      </Link>
      <Link to="/" className="carrito">
        <div>
          <img src='/images/carrito.svg' className='carrito-svg' alt='Logo BarreraMotoshop'/>
        </div>
      </Link>
    </header>
  )
}

export default Header