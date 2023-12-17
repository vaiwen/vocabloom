import React from 'react'

const Features = () => {
  return (
    <section id='features' className='xl:max-w-screen-xl lg:max-w-screen-lg m-auto py-32 sm:px-6'>
      <h1 className='text-5xl mb-12 font-bold inline-block border-b-4 border-blue-600'>Features</h1>
      <div className='group grid grid-cols-2 gap-4'>
        <div className='flex flex-col justify-center hover:outline hover:outline-4 hover:outline-offset-4 hover:outline-blue-600 group-hover:block min-h-[150px] p-4 bg-blue-600 font-semibold text-white text-lg rounded-lg'>
          <h2 className='transition-all duration-300 text-4xl sm:max-lg:text-2xl text-center border-b-4 border-blue-600 group-hover:border-white group-hover:text-2xl group-hover:inline-block'>User-Friendly Interface</h2>
          <p className='px-2 mt-3 -translate-x-full hidden group-hover:block group-hover:translate-x-0 transition-all duration-300'>Modern and user-friendly interface for easy and enjoyable navigation.</p>
        </div>
        <div className='flex flex-col justify-center hover:outline hover:outline-4 hover:outline-offset-4 hover:outline-blue-600 group-hover:block min-h-[150px] p-4 bg-blue-600 font-semibold text-white text-lg rounded-lg'>
          <h2 className='transition-all duration-300 text-4xl sm:max-lg:text-2xl text-center border-b-4 border-blue-600 group-hover:border-white group-hover:text-2xl group-hover:inline-block'>Mobile Responsive Design</h2>
          <p className='px-2 mt-3 -translate-x-full hidden group-hover:block group-hover:translate-x-0 transition-all duration-300'> Our website is designed to be mobile-friendly, ensuring a seamless experience on your devices.</p>
        </div>
        <div className='flex flex-col justify-center hover:outline hover:outline-4 hover:outline-offset-4 hover:outline-blue-600 group-hover:block min-h-[150px] p-4 bg-blue-600 font-semibold text-white text-lg rounded-lg'>
          <h2 className='transition-all duration-300 text-4xl sm:max-lg:text-2xl text-center border-b-4 border-blue-600 group-hover:border-white group-hover:text-2xl group-hover:inline-block'>Security and Privacy</h2>
          <p className='px-2 mt-3 -translate-x-full hidden group-hover:block group-hover:translate-x-0 transition-all duration-300'>Advanced security protocols and privacy policies are in place to safeguard your personal information.</p>
        </div>
        <div className='flex flex-col justify-center hover:outline hover:outline-4 hover:outline-offset-4 hover:outline-blue-600 group-hover:block min-h-[150px] p-4 bg-blue-600 font-semibold text-white text-lg rounded-lg'>
          <h2 className='transition-all duration-300 text-4xl sm:max-lg:text-2xl text-center border-b-4 border-blue-600 group-hover:border-white group-hover:text-2xl group-hover:inline-block'>Fast Loading Times</h2>
          <p className='px-2 mt-3 -translate-x-full hidden group-hover:block group-hover:translate-x-0 transition-all duration-300'>Optimized for fast loading times, our website ensures quick access to content, saving you valuable time.</p>
        </div>
        <div className='flex flex-col justify-center hover:outline hover:outline-4 hover:outline-offset-4 hover:outline-blue-600 group-hover:block min-h-[150px] p-4 bg-blue-600 font-semibold text-white text-lg rounded-lg'>
          <h2 className='transition-all duration-300 text-4xl sm:max-lg:text-2xl text-center border-b-4 border-blue-600 group-hover:border-white group-hover:text-2xl group-hover:inline-block'>Up-to-Date Content</h2>
          <p className='px-2 mt-3 -translate-x-full hidden group-hover:block group-hover:translate-x-0 transition-all duration-300'>Stay informed with our regularly updated content, sharing the latest trends, news, and information.</p>
        </div>
        <div className='flex flex-col justify-center hover:outline hover:outline-4 hover:outline-offset-4 hover:outline-blue-600 group-hover:block min-h-[150px] p-4 bg-blue-600 font-semibold text-white text-lg rounded-lg'>
          <h2 className='transition-all duration-300 text-4xl sm:max-lg:text-2xl text-center border-b-4 border-blue-600 group-hover:border-white group-hover:text-2xl group-hover:inline-block'>Our Support Team</h2>
          <p className='px-2 mt-3 -translate-x-full hidden group-hover:block group-hover:translate-x-0 transition-all duration-300'>Our professional support team is here for you whenever you have questions or concerns, providing the best assistance.</p>
        </div>
      </div>
    </section>
  )
}

export default Features