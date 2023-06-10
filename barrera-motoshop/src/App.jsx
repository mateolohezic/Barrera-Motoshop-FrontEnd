import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Login from './Pages/Login/Login';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Iniciar-sesion" element={<Login/>} />
      <Route path="/Productos/Producto" element={<ProductDetails/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
