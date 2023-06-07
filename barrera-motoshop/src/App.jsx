import React from 'react'
import { Route, Routes } from "react-router-dom";
import Inicio from './Pages/Inicio/Inicio';
import Login from './Pages/Login/Login';
import './App.css'
import Header from './Components/Header/Header';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/Iniciar-sesion" element={<Login/>} />
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
