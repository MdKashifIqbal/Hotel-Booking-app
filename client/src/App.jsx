import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './components/Footer';
import AllRooms from './components/AllRooms';

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
      {!isOwnerPath && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<AllRooms/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
