import React from 'react'
import CardProductoCategorias from '../../Components/CardProductoCategorias/CardProductoCategorias'
import './categoria.css'

function Categoria() {
  return (
    <>
        <div className='contenedorCategoriasFiltrarCategoria'>
          <div className='volverAtrasCategoriasCategoria'>
            <i className="bi bi-chevron-double-right"></i>
            <a href="/Categorias/Categorias" className='categoriaVolverAtrasCategoria'>INICIO</a>
            <span>/</span>
            <a href="/Categorias/Categorias" className='categoriaVolverAtrasCategoria'>CASCOS</a>
            <span>/</span>
            <a href="/Categorias/Categorias" className='categoriaVolverAtrasCategoria'>CASCOS</a>
          </div>
          <div>Ordenar por: PRECIO</div>
        </div>
        <div className='contenedorPrincipalCategorias'>
          <div className='contenedorFiltrarPorCategoria'>
            <span>Filtrar por marca</span>
            <h3><input type="checkbox" name="" id="" /> Hola</h3>
            <h3><input type="checkbox" name="" id="" /> Hola</h3>
            <h3><input type="checkbox" name="" id="" /> Hola</h3>
            <h3><input type="checkbox" name="" id="" /> Hola</h3>
            <h3><input type="checkbox" name="" id="" /> Hola</h3>
          </div>
          <div className='contenedorCardsProdcutosCategoria'>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
            <div className='contenedorCardProductoCategoria'><CardProductoCategorias/></div>
          </div>
        </div>
    </>
  )
}

export default Categoria