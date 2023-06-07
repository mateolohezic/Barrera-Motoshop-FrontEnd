import React from 'react'
import FormularioLogin from '../../Components/FormularioLogin/FormularioLogin';
import logo from '../../assets/logo.svg'
import './login.css'

function Login() {

    document.body.classList.add('iniciar-sesion');

    return (
        <>
        <div className='bgLogin'></div>
        <div className='loginContenido'>
            <div className='w-100 m-0 p-0'>
                <div className='volverAlInicioLogin'><a href='/' className='text-decoration-none'><i className="bi bi-caret-left-fill me-1"></i>Volver</a></div>
                <div className='cajaLoginGrande'>
                    <div className='logoIniciarSesion'><img src={logo} alt="Logo iniciar sesión" /></div>
                    <div className='tituloIniciarSesion'><h1>INICIAR SESIÓN</h1></div>
                    <div className='parrafoIniciarSesion'><p>Ingrese su correo electrónico y contraseña para iniciar sesión en el sitio.</p></div>
                    <FormularioLogin/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login