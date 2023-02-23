import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

function FormularioRegistrarUsuario() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [error, setError] = useState(false)
    const [creando, setCreando] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() =>{
        axios.get(`http://localhost:8000/obtener-users`)
        .then((response) =>{
            setUsers(response.data);
        })
        .catch((error) =>{
          console.error(error);
        })
    }, [])

    const usersEmailCoinciden = users.filter(user => user.email === watch('email'))

    const onSubmit = async(data) => {
        setCreando(true)
        await axios.post(`http://localhost:8000/crear-user`, data)
        window.location.replace('/Login');
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row justify-content-center">
                    <div className="mb-4 col-xxl-5 col-xl-5 col-lg-6 col-sm-6 col-md-6 col-6">
                        <input type="text" placeholder="Nombre" className="form-control form-control-lg" {...register("name", {
                            required: <div className='text-danger mt-2 ms-1 fs-6'>Nombre requerido.</div>,
                            pattern: {
                                value: /^[a-zA-Zá-úñÑÁ-Ú ]{1,50}$/i,
                                message: <div className='text-danger mt-2 ms-1 fs-6'>Nombre invalido.</div>
                            }
                            
                        })} name="name" defaultValue="" maxLength={50}/>
                        {errors.name && errors.name.message}
                    </div>
                    <div className="mb-4 col-xxl-5 col-xl-5 col-lg-6 col-sm-6 col-md-6 col-6">
                        <input type="text" placeholder="Apellido" className="form-control form-control-lg" {...register("surname", {
                            required: <div className='text-danger mt-2 ms-1 fs-6'>Apellido requerido.</div>,
                            pattern: {
                                value: /^[a-zA-Zá-úñÑÁ-Ú ]{1,50}$/i,
                                message: <div className='text-danger mt-2 ms-1 fs-6'>Apellido invalido.</div>
                            }
                        })} name="surname"  defaultValue="" maxLength={50}/>
                        {errors.surname && errors.surname.message}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="mb-4 mt-2 col-xxl-10 col-xl-10 col-lg-12 col-sm-12 col-md-12">
                        <input type="text" placeholder="Correo Electrónico" className="form-control form-control-lg" {...register("email", {
                            required:  <div className='text-danger mt-2 ms-1 fs-6'>E-mail requerido.</div>,
                            pattern: {
                                value: /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/i,
                                message: <div className='text-danger mt-2 ms-1 fs-6'>E-mail invalido.</div>
                            },
                            validate: value => usersEmailCoinciden.length === 0 || <div className='text-danger mt-2 ms-1 fs-6'>Este E-mail ya esta en uso.</div>,
                        })}  name="email"  defaultValue="" maxLength={50}/>
                        {errors.email && errors.email.message}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="mb-4 mt-2 col-xxl-10 col-xl-10 col-lg-12 col-sm-12 col-md-12">
                        <input type="text" placeholder="Dirección" className="form-control form-control-lg" {...register("address", {
                            required:  <div className='text-danger mt-2 ms-1 fs-6'>Dirección requerida.</div>,
                            pattern: {
                                value: /^[a-zA-Zá-úñÑÁ-Ú0-9, ]{1,100}$/i,
                                message: <div className='text-danger mt-2 ms-1 fs-6'>Dirección invalida.</div>
                            },
                        })}  name="address"  defaultValue="" maxLength={50}/>
                        {errors.address && errors.address.message}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="mb-4 mt-2 col-xxl-5 col-xl-5 col-lg-6 col-sm-6 col-md-6 col-6">
                        <input type="text" placeholder="Provincia" className="form-control form-control-lg" {...register("province", {
                            required: <div className='text-danger mt-2 ms-1 fs-6'>Provincia requerida.</div>,
                            pattern: {
                                value: /^[a-zA-Zá-úñÑÁ-Ú0-9, ]{1,50}$/i,
                                message: <div className='text-danger mt-2 ms-1 fs-6'>Provincia invalida.</div>
                            }
                            
                        })} name="province" defaultValue="" maxLength={50}/>
                        {errors.province && errors.province.message}
                    </div>
                    <div className="mb-4 mt-2 col-xxl-5 col-xl-5 col-lg-6 col-sm-6 col-md-6 col-6">
                        <input type="text" placeholder="Código postal" className="form-control form-control-lg" {...register("cp", {
                            required: <div className='text-danger mt-2 ms-1 fs-6'>C.P requerido.</div>,
                            pattern: {
                                value: /^[a-zA-Z0-9,. ]{1,50}$/i,
                                message: <div className='text-danger mt-2 ms-1 fs-6'>C.P invalido.</div>
                            }
                        })} name="cp"  defaultValue="" maxLength={50}/>
                        {errors.cp && errors.cp.message}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="mb-4 mt-2 col-xxl-10 col-xl-10 col-lg-12 col-sm-12 col-md-12">
                        <input type="password" placeholder="Contraseña" className="form-control form-control-lg" {...register("password", {
                            required:  <div className='text-danger mt-2 ms-1 fs-6'>Contraseña requerida.</div>,
                            pattern: {
                                value: /^([a-zA-Z0-9á-úñÑÁ-Ú*#$-_+"!%&]{4,25})$/i,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Contraseña invalida.</p>
                            },
                            minLength: {
                                value: 4,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>Debe contener más de 4 caracteres.</p>
                              },
                            maxLength: {
                                value: 25,
                                message: <p className='text-danger mt-2 ms-1 fs-6'>No puede contener más de 25 caracteres.</p>
                            },
                        })}  name="password"  defaultValue="" maxLength={50}/>
                        {errors.password && errors.password.message}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="mb-4 mt-2 col-xxl-10 col-xl-10 col-lg-12 col-sm-12 col-md-12">
                        <input type="password" placeholder="Repetir contraseña" className="form-control form-control-lg" {...register("passwordConfirmar", {
                            required:  <div className='text-danger mt-2 ms-1 fs-6'>Campo requerido.</div>,
                            validate: value => value === watch('password')	 || <div className='text-danger mt-2 ms-1 fs-6'>Las contraseñas no coinciden.</div>,
                        })}  name="passwordConfirmar"  defaultValue="" maxLength={25}/>
                        {errors.passwordConfirmar && errors.passwordConfirmar.message}
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <button type="submit" className="btn  btn-danger">REGISTRARSE</button>

                </div>
                {
                    creando ?
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

export default FormularioRegistrarUsuario