import react from 'react'
import { Route, Routes } from "react-router-dom";
import './sass/main.scss'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
