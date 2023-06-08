import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie'
import logo from '../../assets/logo.svg'
import logoUser from '../../assets/user.svg'
import logoCarrito from '../../assets/carrito.svg'
import logoCategorias from '../../assets/menuCategorias.png'
import { useLocation } from 'react-router-dom';
import './header.css'
import OffcanvasCategorias from '../OffcanvasCategorias/OffcanvasCategorias';

function Header() {

    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        
        if (location.pathname === '/') {
            setActiveIndex(0);
        }
        if (location.pathname.includes('/Perfil')) {
            setActiveIndex(1);
        }        
    }, [location.pathname]);

    if (location.pathname !== '/Iniciar-sesion' && !location.pathname.includes('/Recuperar-contrase%C3%B1a') && location.pathname !== '/404') {
        return (
            <>
                <nav className="navbar navbar-expand-lg sticky-top animate__animated animate__fadeInDown">
                    <div className="container-fluid">
                        <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrincipal" aria-controls="navbarPrincipal" aria-expanded="false" aria-label="Expandir" onClick={() => setOpen(!open)}>
                            <label className="burger" htmlFor="burgerButton">
                                <input type="checkbox" id="burgerButton"/>
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </button>
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="Logo Barra de Navegación" />
                        </a>
                        <div className="collapse navbar-collapse" id="navbarPrincipal">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/"><img src={logoCarrito} alt="Carrito Barra de Navegación" /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/Iniciar-sesion"><img src={logoUser} alt="Perfil Barra de Navegación" /></a>
                                </li>
                                <li className='nav-item'>
                                    <a className="nav-link" data-bs-toggle="offcanvas" href="#offcanvasCategorias" role="button" aria-controls="offcanvasCategorias">
                                        <img src={logoCategorias} alt="Perfil Barra de Navegación" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <OffcanvasCategorias/>
            </>
        )
    }
}

export default Header