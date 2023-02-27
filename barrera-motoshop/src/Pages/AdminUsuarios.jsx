import React from 'react'

function AdminUsuarios() {
  return (
    <>
        <div className="text-center mx-auto fs-1 border-bottom border-1 pb-4 w-75 mb-3 mt-5">Administración</div>
        <div className="caja__admin mx-auto row">
            <div className='col-4 p-0'>
                <div className='d-flex flex-column'>
                    <a href='/Admin' className='text-decoration-none text-white'><div className='titulo__seccion__admin'>Perfil</div></a>
                    <a href='/Admin/Productos' className='text-decoration-none text-white'><div className='titulo__seccion__admin'>Productos</div></a>
                    <a href='/Admin/Categorias' className='text-decoration-none text-white'><div className='titulo__seccion__admin'>Categorías</div></a>
                    <a href='/Admin/Usuarios' className='text-decoration-none text-white active'><div className='titulo__seccion__admin'>Usuarios</div></a>
                    <a href='/Admin/Compras' className='text-decoration-none text-white'><div className='titulo__seccion__admin'>Compras</div></a>
                </div>
            </div>
            <div className='col-8 detalles__seccion'>
                
            </div>
        </div>
    </>
  )
}

export default AdminUsuarios