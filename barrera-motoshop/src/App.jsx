import react from 'react'
import { Route, Routes } from "react-router-dom";
import './sass/main.scss'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Header from './Pages/Header';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Header" element={<Header/>} />
    </Routes>
    </>
  )
}

export default App
