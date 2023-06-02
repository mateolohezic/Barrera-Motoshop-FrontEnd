import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

function FormularioIniciarSesion() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [error, setError] = useState(false)
    const [logeando, setLogeando] = useState(false)

    const onSubmit = async(datos) => {
        setLogeando(true) 
        const respuesta = await axios.post(`http://localhost:8000/login-user`, {
            email: datos.email,
            password: datos.password
        })
        if (respuesta.status === 200) {
            setError(false);
            const userEncontrado = respuesta
            localStorage.setItem('idUsuarioLogeado', userEncontrado.data.user._id);
            if (userEncontrado.data.user.rol === "admin") {
                localStorage.setItem('token', userEncontrado.data.token);
            }
            setLogeando(false) 
            window.location.replace("/")
          } 
          
        if (respuesta.status === 206){
            setLogeando(false) 
            setError(true);
          }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row justify-content-center mb-2">
                    <div className="mb-4 mt-2 col-xxl-10 col-xl-10 col-lg-12 col-sm-12 col-md-12">
                        <input type="text" placeholder="Correo electrónico" className="form-control form-control-lg" {...register("email", {
                            required:  <div className='text-danger mt-2 ms-1 fs-6'>E-mail requerido.</div>,
                            pattern: {
                                value: /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/i,
                                message: <div className='text-danger mt-2 ms-1 fs-6'>E-mail invalido.</div>
                            },
                        })}  name="email"  defaultValue="" maxLength={50}/>
                        {errors.email && errors.email.message}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="mb-4 col-xxl-10 col-xl-10 col-lg-12 col-sm-12 col-md-12">
                        <input type="password" placeholder="Contraseña" className="form-control form-control-lg" {...register("password", {
                            required:  <div className='text-danger mt-2 ms-1 fs-6'>Contraseña requerida.</div>,
                        })}  name="password"  defaultValue="" maxLength={25}/>
                        {errors.password && errors.password.message}
                        {
                            error && <div className='text-danger mt-2 ms-1 fs-6'>Usuario o contraseña incorrectos.</div>
                        }
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className="mb-4 col-xxl-10 col-xl-10 col-lg-12 col-sm-12 col-md-12 text-end">
                        <span>¿Olvidaste tu contraseña?</span>
                        <a className="restablecer__contraseña" href='/RestablecerContraseña'> Restablecer</a>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <button type="submit" className="btn  btn-danger">INGRESAR</button>

                </div>
                {
                    logeando ?
                    <>
                        <div className="d-flex justify-content-center mt-4">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </>
                    :
                    <></>
                }
            </form>
        </>
  )
}

export default FormularioIniciarSesion