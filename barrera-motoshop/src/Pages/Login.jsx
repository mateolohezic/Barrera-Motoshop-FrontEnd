import React from 'react'
import FormularioIniciarSesion from '../Components/FormularioIniciarSesion';
import '../Sass/Login.css';

function Login() {

    return (
        <>     
            <div className='login mt-5 mb-5'>
                <div className="formulario__login mx-auto pb-5">
                    <div className="text-center mx-auto w-75 mb-4 titulo__login">Inicio de sesión</div>
                    <div className="text-center mx-auto w-75 mb-4 subtitulo__login">Ingreso con email</div>
                    <div>
                      <FormularioIniciarSesion />
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                      <span>¿Aún no tenes una cuenta?</span>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <a href='/Register'>
                        <button type="button" className="btn  btn-outline-danger">REGÍSTRATE</button>
                      </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login