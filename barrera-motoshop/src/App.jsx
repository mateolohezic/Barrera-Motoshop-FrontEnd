import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {

  return (
    <>
    {/* <Header/> */}
    <Routes>
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/Iniciar-sesion" element={<Login/>} />
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
