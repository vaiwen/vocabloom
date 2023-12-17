import React from 'react'
import { BiWorld } from "react-icons/bi";

const About = () => {
  return (
    <section id='about' className='py-24 sm:px-4'>
        <div className='xl:max-w-screen-xl px-6 lg:max-w-screen-lg m-auto grid sm:grid-cols-1 sm:gap-y-10 br-1:grid-cols-2 gap-x-12 items-center'>
            <div>
                <div className='flex items-center'>
                    <h3 className='font-semibold text-blue-700 md:text-sm lg:text-base'>World Connect</h3>
                    <BiWorld className='ml-1 fill-blue-700' size={20} />
                </div>
                <h1 className='mt-3 text-5xl lg:text-4xl font-bold'>About Us</h1>
                <p className='mt-3 xl:text-xl lg:text-lg sm:text-xl sm:leading-8'>Hello! We're a dynamic community spanning <span className='text-blue-600 font-bold'>12</span> countries with over <span className='text-blue-600 font-bold'>110,000</span> members, forming a global network. 
                Surpassing <span className='text-blue-600 font-bold'>36</span> million words, our journey has created meaning in multiple languages.</p>
                <p className='mt-3 xl:text-xl lg:text-lg sm:text-xl sm:leading-8'>The 4 awards we've earned symbolize our success through determination and passion. Yet, true triumph lies in 
                the daily contributions of each member, fueling our growing global impact.</p>
                <button className='mt-6 bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-3xl transition-all duration-300 hover:bg-blue-700'>Discovery &rarr;</button>
            </div>
            <div className='grid grid-cols-2 gap-8 p-8 -rotate-12 group hover:rotate-12 transition-all duration-300'>
                <div className='bg-blue-600 rounded-2xl xl:p-10 lg:px-2 lg:py-6 sm:py-10 sm:px-6 rotate-12 transition-all duration-300 group-hover:-rotate-12'>
                    <p className='text-white font-semibold xl:text-7xl sm:text-6xl text-center'>12</p>
                    <p className='text-white font-semibold text-xl text-center mt-2'>Countries</p>
                </div>
                <div className='bg-blue-600 rounded-2xl xl:p-10 lg:px-2 lg:py-6 sm:py-10 sm:px-6 rotate-12 transition-all duration-300 group-hover:-rotate-12'>
                    <p className='text-white font-semibold xl:text-7xl sm:text-6xl text-center'>110K</p>
                    <p className='text-white font-semibold text-xl text-center mt-2'>Members</p>
                </div>
                <div className='bg-blue-600 rounded-2xl xl:p-10 lg:px-2 lg:py-6 sm:py-10 sm:px-6 rotate-12 transition-all duration-300 group-hover:-rotate-12'>
                    <p className='text-white font-semibold xl:text-7xl sm:text-6xl text-center'>36M</p>
                    <p className='text-white font-semibold text-xl text-center mt-2'>Words</p>
                </div>
                <div className='bg-blue-600 rounded-2xl xl:p-10 lg:px-2 lg:py-6 sm:py-10 sm:px-6 rotate-12 transition-all duration-300 group-hover:-rotate-12'>
                    <p className='text-white font-semibold xl:text-7xl sm:text-6xl text-center'>4</p>
                    <p className='text-white font-semibold text-xl text-center mt-2'>Awards</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About