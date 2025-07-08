import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
  const {id} = useParams()
  const [room,setRoom] = useState(null)
  const [mainImage,setMainImage] = useState(null)

  useEffect(()=>{
    const roomDetail = roomsDummyData.find(room=>room._id==id)
    roomDetail && setRoom(roomDetail)
    roomDetail && setMainImage(roomDetail.images[0])
  },[])
  return (
    room 
    &&
    <div className='py-28 md-py-35 px-5 md:px-16 lg:px-24 xl:px-32'>
      {/* room details */}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className='text-xl md:text-4xl font-Play-fair'>{room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span></h1>
            <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
        </div>
        {/* Room rating */}
        <div className='flex items-center gap-1.5 mt-2'>
            <StarRating/>
            <p className='mt-3 ml-2'>200+ reviews</p>
        </div>
        {/* Room Address */}
        <div className='flex items-center gap-1 text-gray-400 mt-2'>
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Room images */}
        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
          <div className='lg:w-1/2 w-full'>
            <img src={mainImage} alt="room-image" className='w-full rounded-xl shadow-lg object-cover'/>
          </div>
          <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-ful'>
            {room?.images.length > 1 && room.images.map((image, index)=>(
              <img onClick={()=>setMainImage(image)} key={index} src={image} alt="Room image" className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage==image && 'outline-3 outline-orange-500'}`}/>
            ))}
          </div>
        </div>

        {/* Room highlights */}
        <div className='flex flex-col md:flex-row md:justify-between mt-10'>
          <div className='flex flex-col'>
            <h1 className='text-xl md:text-4xl font-Play-fair'>Expreince Luxury Like Never Before</h1>
            <div className='flex gap-4 items-center flex-wrap m-3 mb-6'>
              {room.amenities.map((item,index)=>(
                <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                  <img src={facilityIcons[item]} alt={item} className='w-5 h-5'/>
                  <p className='text-xs'>{item}</p>
                </div>
              ))}
            </div>
          </div>
            {/* Room price */}
            <p className='text-xl font-medium'>${room.pricePerNight}/night</p>
        </div>
        {/* Check-in Check-out form */}
        <form>
          <div>

          </div>
          <button>
            Check Availability
          </button>
        </form>
    </div>
  )
}

export default RoomDetails
