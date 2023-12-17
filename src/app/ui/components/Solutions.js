"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import CarouselList from './CarouselList';

import { FaCircleCheck } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Solutions = () => {

    const borderStyle= 'border-4 border-blue-500 rounded-3xl overflow-hidden outline outline-8 transition-all duration-300'
    const borderHoverStyle = 'outline outline-[16px] outline-offset-0 outline-[#cae9ff]'

    const buttons = [0,1,2,3]

    const [selected,setSelected] = useState(0)

    const handleClick = (index) => {
        setSelected(index)
    }

    const handleMinus = () => {
        selected > 0 ? setSelected(selected - 1) : ''
    }

    const handlePlus = () => {
        selected < 3 ? setSelected(selected + 1) : ''
    }

  return (
    <section id='solutions' className='py-32 sm:px-4'>
        <div className='xl:max-w-screen-xl lg:max-w-screen-lg px-6 m-auto sm:grid-cols-1 grid br-1:grid-cols-2 gap-x-12 items-center'>
            <div className='grid grid-cols-2 gap-y-8 gap-x-8'>
                <div className={`${borderStyle} ${ selected == 0 ? borderHoverStyle : 'outline-transparent'}`}>
                    <Image className={`transition-all duration-300 ${selected == 0 ? 'scale-110' : ''}`} src="/reading-list.png" width={300} height={1} alt="image" />
                </div>
                <div className={`${borderStyle} ${ selected == 1 ? borderHoverStyle : 'outline-transparent'}`}>
                    <Image className={`transition-all duration-300 ${selected == 1 ? 'scale-110' : ''}`} src="/learning.png" width={300} height={1} alt="image" />
                </div>
                <div className={`${borderStyle} ${ selected == 2 ? borderHoverStyle : 'outline-transparent'}`}>
                    <Image className={`transition-all duration-300 ${selected == 2 ? 'scale-110' : ''}`} src="/reading.png" width={300} height={1} alt="image" />
                </div>
                <div className={`${borderStyle} ${ selected == 3 ? borderHoverStyle : 'outline-transparent'}`}>
                    <Image className={`transition-all duration-300 ${selected == 3 ? 'scale-110' : ''}`} src="/dictionary.png" width={300} height={1} alt="image" />
                </div>
            </div>
            <div className='py-10 pl-16'>
                <h3 className='font-semibold text-blue-700'>Necessary Innovation <FaCircleCheck className='inline' size={15} /></h3>
                <h1 className='mt-3 xl:text-5xl lg:text-4xl sm:text-5xl br-1:text-3xl font-bold'>No More Old Methods</h1>
                <p className='mt-3 xl:text-xl sm:text-xl sm:leading-8 md:text-lg lg:leading-8'>Vocabloom brings to newest techniques to learn languages. Your mindset is helping customers to study/learn with <span className='text-blue-600 font-bold'>100%</span> digital free assets.</p>
                <CarouselList selected={selected} />
                <div className='flex justify-evenly mt-10 items-center'>
                    <button onClick={handleMinus}><IoIosArrowBack className='fill-blue-600  transition-all duration-300 hover:scale-125' size={40} /></button>
                    <div className='flex'>
                        {buttons.map((btn, i) => (
                            <div key={i} className={`ml-2 p-2 rounded-full bg-blue-600 cursor-pointer hover:outline hover:outline-4 hover:outline-[#cae9ff] ${i === selected ? 'outline outline-4 outline-[#cae9ff]' : ''}`} onClick={() => handleClick(i)}>
                                {i === selected ? (<div className='p-2 bg-[#cae9ff] rounded-full'></div>): ''}
                            </div>
                        ))}
                    </div>
                    <button onClick={handlePlus}><IoIosArrowForward className='fill-blue-600 transition-all duration-300 hover:scale-125' size={40} /></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Solutions