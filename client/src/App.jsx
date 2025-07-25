import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './components/Footer';
import AllRooms from './components/AllRooms';
import RoomDetails from './Pages/RoomDetails';
import MyBooking from './Pages/MyBooking';

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
      {!isOwnerPath && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<AllRooms/>}/>
        <Route path='/rooms/:id' element={<RoomDetails/>}/>
        <Route path='/my-booking' element={<MyBooking/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
