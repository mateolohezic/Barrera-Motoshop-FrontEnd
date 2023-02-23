import React from 'react'
import FormularioRegistrarUsuario from '../Components/FormularioRegistrarUsuario';

function Register() {

    return (
        <>     
            <div className='register mt-5 mb-5'>
                <div className="formulario__register mx-auto pb-5">
                    <div className="text-center mx-auto w-75 mb-4 titulo__register">Crear una cuenta</div>
                    <div>
                      <FormularioRegistrarUsuario />
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                      <span>¿Ya tienes una cuenta?</span>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <a href='/Login'>
                        <button type="button" className="btn  btn-outline-danger">Iniciar sesión</button>
                      </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register