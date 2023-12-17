import React from 'react'

const CarouselItem = ({ title, text }) => {
  return (
    <div className='mt-5'>
        <span className='mt-3 xl:text-2xl md:text-xl sm:text-2xl font-semibold border-b-4 border-blue-600'>{title}</span>
        <p className='mt-3 xl:text-xl sm:text-xl md:text-lg sm:leading-8 lg:leading-8'>{text}</p>
    </div>
  )
}

export default CarouselItem