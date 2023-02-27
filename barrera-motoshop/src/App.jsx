import React from 'react'
import { Route, Routes } from "react-router-dom";
import './sass/main.scss'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Header from './Components/Header';
import Admin from './Pages/Admin';
import AdminProductos from './Pages/AdminProductos';
import AdminCategorias from './Pages/AdminCategorias';
import AdminUsuarios from './Pages/AdminUsuarios';
import AdminCompras from './Pages/AdminCompras';
import Footer from './Components/Footer';


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/Admin/Productos" element={<AdminProductos/>} />
      <Route path="/Admin/Categorias" element={<AdminCategorias/>} />
      <Route path="/Admin/Usuarios" element={<AdminUsuarios/>} />
      <Route path="/Admin/Compras" element={<AdminCompras/>} />
    </Routes>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
