import React from 'react'
import Image from 'next/image'
import { AiOutlineSafety } from "react-icons/ai";

const Hero = () => {
  return (
    <section className='py-24 sm:px-4'>
        <div className='xl:max-w-screen-xl lg:max-w-screen-lg max-w-screen-xl px-6 m-auto grid sm:grid-cols-1 br-1:grid-cols-2 gap-x-12 items-center'>
          <div className='xl:p-10 relative'>
            <div className='sm:hidden xl:block absolute top-0 left-0 border-t-4 border-l-4 border-blue-600 w-20 h-20 transition-all duration-300'></div>
            <div className='sm:hidden xl:block absolute bottom-0 right-0 border-r-4 border-b-4 border-blue-600 w-20 h-20'></div>
            <h3 className='font-semibold text-blue-700 md:text-sm lg:text-base sm:text-base'>Welcome to Vocabloom</h3>
            <h1 className='mt-3 xl:text-5xl sm:text-4xl font-bold'>It's Time To <span className='xl:text-5xl sm:text-4xl border-b-4 border-blue-500'>Learn</span></h1>
            <p className='mt-6 lg:text-xl sm:text-lg leading-8'>On the homepage, you can find daily suggestions, explore popular words, and quickly dive into the world of English-Turkish translations.</p>
            <p className='mt-6 lg:text-xl sm:text-lg leading-8'>Ana sayfada, günlük önerileri bulabilir, popüler kelimelere göz atabilir ve İngilizce-Türkçe çeviri dünyasına hızlı bir giriş yapabilirsiniz.</p>
            <div className='sm:flex br-1:flex br-1:flex-col lg:flex lg:flex-row mt-6'>
              <button className='sm:text-base md:text-sm xl:text-base bg-blue-600 text-white font-semibold px-5 py-3 rounded-3xl transition-all duration-300 hover:bg-blue-700'>Get started for free &rarr;</button>
              <button className='sm:text-base md:text-sm xl:text-base br-1:mt-2 lg:mt-0 align-middle ml-3 px-5 py-3 font-semibold border-2 border-transparent rounded-3xl transition-all duration-300 hover:border-blue-600'><AiOutlineSafety className=' fill-blue-500 inline mr-1' size={20} />Start without a credit card</button>
            </div>
          </div>
            <Image src="/teacher.png" width={1000} height={1} alt='hero-img' />
        </div>
    </section>
  )
}

export default Hero