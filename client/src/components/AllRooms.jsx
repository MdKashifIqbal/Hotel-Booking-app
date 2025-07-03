import React, { useState } from 'react'
import Title from './Title'
import {assets, facilityIcons, roomsDummyData} from "../assets/assets"
import {useNavigate} from "react-router-dom"
import StarRating from './StarRating'


const AllRooms = () => {
  const Navigate = useNavigate()  
  const [openFilter,setOpenFilter] = useState(false)
  return (
    <div className='flex  flex-col-reverse px-10 lg:flex-row items-start justify-between pt-28 md:px-16px lg:px-24 xl:px-32'>

      <div>
        <Title title="All Rooms" subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories." align="left"/>

        {roomsDummyData.map((room)=>(
            <div key={room._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
                <img onClick={()=>{Navigate(`/rooms/${room._id}`); scrollTo(0,0)}}
                src={room.images[0]} alt="room-image" className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>
                <div className='md:w-1/2 flex flex-col gap-2'>
                    <p className='text-gray-500'>{room.hotel.city}</p>

                    <p onClick={()=>{Navigate(`/rooms/${room._id}`); scrollTo(0,0)}}
                     className='text-3xl text-gray-800 font-Play-fair cursor-pointer'>{room.hotel.name}</p>

                    <div className='flex items-center'>
                        <StarRating/>
                        <p className='ml-2 mt-4'>200+ reviews</p>
                    </div>
                    <div className='flex items-center gap-1 mt-2 text-gray-500 text-sm'>
                        <img src={assets.locationIcon} alt="location-Icon" />
                        <span>{room.hotel.address}</span>
                    </div>

                    {/* Room Amenities */}
                    <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                        {
                            room.amenities.map((item, index)=>(
                                <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
                                    <img src={facilityIcons[item]} alt="Amenity-icon" className='w-4 h-4'/>
                                    <p className='text-xs'>{item}</p>
                                </div>
                            ))
                        }
                    </div>
                    {/* Room's Price */}
                    <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} /night</p>
                </div>
            </div>
        ))}
      </div>

      {/* Filter */}
     <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mb-16'>
        <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilter && "border-b"}`}>
            <p className='text-base font-medium text-gray-800'>FILTERS</p>
            <div className='text-xs cursor-pointer'>
                <span onClick={()=>{setOpenFilter(!openFilter)}} className='lg:hidden'>{openFilter?"HIDE":"SHOW"}</span>
                <span className='hidden lg:block'>CLEAR</span>
            </div>
        </div>

       
     </div>

    </div>
  )
}

export default AllRooms
