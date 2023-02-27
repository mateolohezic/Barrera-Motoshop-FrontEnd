import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <nav className={`nav ${isOpen && "open"}`}>
            <NavLink className='nav__link' to="/">Accesorios
{/*             
            <Link to="/">Accesorio1</Link>
            <Link to="/">Accesorio1</Link>
            <Link to="/">Accesorio1</Link>
            <Link to="/">Accesorio1</Link>
            <Link to="/">Accesorio1</Link>
            <Link to="/">Accesorio1</Link>
            <Link to="/">Accesorio1</Link> */}
            
            </NavLink>
            <NavLink className='nav__link' to="/">Indumentaria</NavLink>
            <NavLink className='nav__link' to="/">Repuestos</NavLink>
            <NavLink className='nav__link' to="/">Mas productos</NavLink>
            <NavLink className='nav__link' to="/">Contacto</NavLink>
        </nav>
        <div className={`nav__toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
            <span className='nav__toggle__bar'></span>
            <span className='nav__toggle__bar'></span>
            <span className='nav__toggle__bar'></span>
        </div>
    </>
  )
}

export default Navbar