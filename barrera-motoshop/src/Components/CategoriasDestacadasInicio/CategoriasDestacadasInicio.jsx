import React from 'react'
import './categoriasDestacadasInicio.css'

function CategoriasDestacadasInicio() {
    return (
        <>
            <div className='contenedorCategoriasDestacadasInicio'>        
                <div className='tituloCategoriasDestacadasInicio'><h1>CATEGORIAS DESTACADAS</h1></div>
                <div className='contenedorCategoriasDestacadas'>
                    <div className='itemCategoriasDestacadas1 itemCategoriasDestacadas'>
                        <a href="/Categorias/Categoria">
                            <div className='gradienteCategorias'></div>
                            <div className='textosCategoria'>
                                <div className='tituloCategoriasDestacadas'>ESCAPES</div>
                            </div>
                        </a>
                    </div>
                    <div className='itemCategoriasDestacadas2 itemCategoriasDestacadas'>
                        <a href="/Categorias/Categoria">
                            <div className='gradienteCategorias'></div>
                            <div className='textosCategoria'>
                                <div className='tituloCategoriasDestacadas'>REPUESTOS</div>
                            </div> 
                        </a>
                    </div>
                    <div className='itemCategoriasDestacadas3 itemCategoriasDestacadas'>
                        <a href="/Categorias/Categoria">
                            <div className='gradienteCategorias'></div>
                            <div className='textosCategoria'>
                                <div className='tituloCategoriasDestacadas'>MOTOS</div>
                            </div>
                        </a>
                    </div>
                    <div className='itemCategoriasDestacadas4 itemCategoriasDestacadas'>
                        <a href="/Categorias/Categoria">
                            <div className='gradienteCategorias'></div>
                            <div className='textosCategoria'>
                                <div className='tituloCategoriasDestacadas'>ROPA</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoriasDestacadasInicio