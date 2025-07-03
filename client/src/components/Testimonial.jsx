import React from 'react'
import Title from './Title'
import { assets, testimonials } from '../assets/assets';
const Testimonial = () => {

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-25 bg-slate-50 pt-20 pb-30'>
      <Title title="What Our Guest Say?" subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodation around the world"/>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow max-w-xs">
                    <div className="flex items-center gap-3">
                        <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                        <div>
                            <p className="font-playfair text-xl">{testimonial.name}</p>
                            <p className="text-gray-500">{testimonial.address}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 mt-4">
                        {Array(4).fill(0).map((_, index) => (
                            <img key={index} src={assets.starIconFilled} alt="star-icon- filled" className='w-4.5 h-4.5'/>
                        ))}
                        <img src={assets.starIconOutlined} alt="star-icon- filled" className='w-4.5 h-4.5'/>
                    </div>
                    <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonial