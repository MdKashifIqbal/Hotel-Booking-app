import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './components/Footer';
import AllRooms from './components/AllRooms';
import RoomDetails from './Pages/RoomDetails';
import MyBooking from './Pages/MyBooking';
import HotelReg from './components/HotelReg';
import Layout from './Pages/hotelOwner/Layout';
import Dashboard from './Pages/hotelOwner/Dashboard';
import AddRoom from './Pages/hotelOwner/AddRoom';
import ListRoom from './Pages/hotelOwner/ListRoom';

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
     {!isOwnerPath && <Navbar/>}
     {false && <HotelReg/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<AllRooms/>}/>
        <Route path='/rooms/:id' element={<RoomDetails/>}/>
        <Route path='/my-booking' element={<MyBooking/>}/>
        <Route path='/owner' element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='add-room' element={<AddRoom/>}/>
            <Route path='list-room' element={<ListRoom/>}/>
        </Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
