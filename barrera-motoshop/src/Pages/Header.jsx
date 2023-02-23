import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header id='header'>
        <Link to="/"><img src='/images/logo.svg' className='header-logo' alt='Logo BarreraMotoshop'/>
        </Link>
            
                <div class="usuario">
                  <Link to="/"><img src='/images/user.svg' className='usuario-svg' alt='Logo BarreraMotoshop'/>
                  </Link>
                </div>

                <div class="carrito">
                  <Link to="/"><img src='/images/carrito.svg' className='carrito-svg' alt='Logo BarreraMotoshop'/>
                  </Link>
                </div>
    </header>
  )
}

export default Header