import React from "react";
import { assets } from "../assets/assets";

const StarRating = () => {
  return (
     <div className="flex items-center gap-1 mt-4">
        {Array(4).fill(0).map((_, index) => (
            <img key={index} src={assets.starIconFilled} alt="star-icon- filled" className='w-4.5 h-4.5'/>
        ))}
        <img src={assets.starIconOutlined} alt="star-icon- filled" className='w-4.5 h-4.5'/>
    </div>
  )
}

export default StarRating;
