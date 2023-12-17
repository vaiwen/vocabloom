import React from 'react'

import { MdOutlineSecurity } from "react-icons/md";
import { GiFlatPlatform } from "react-icons/gi";
import { SiCodeigniter } from "react-icons/si";
import { MdDarkMode } from "react-icons/md";

const SectionOne = () => {
  return (
    <section className='py-24 sm:px-4'>
        <div className='xl:max-w-screen-xl lg:max-w-screen-lg lg:grid-cols-4 sm:grid-cols-2 sm:gap-y-4 p-6 m-auto grid  gap-x-12'>
            <div>
                <MdOutlineSecurity className='fill-blue-600' size={50} />
                <h2 className='mt-3 font-semibold xl:text-2xl lg:text-xl'>Safety</h2>
                <p className='mt-3 leading-7'>Our first goal is safety. You can use vocabloom with no concern. The app protect by multi cryptographic</p>
            </div>
            <div>
                <GiFlatPlatform className='fill-blue-600' size={50} />
                <h2 className='mt-3 font-semibold xl:text-2xl lg:text-xl'>Cross Platform</h2>
                <p className='mt-3 leading-7'>Create stunning, flexible UIs for all major app platforms from a single shared codebase.</p>
            </div>
            <div>
                <SiCodeigniter className='fill-blue-600' size={50} />
                <h2 className='mt-3 font-semibold xl:text-2xl lg:text-xl'>Performance</h2>
                <p className='mt-3 leading-7'>Built to be fast by default—with hardware accelerated transitions, and touch-optimized gestures.</p>
            </div>
            <div>
                <MdDarkMode className='fill-blue-600' size={50} />
                <h2 className='mt-3 font-semibold xl:text-2xl lg:text-xl'>Light & Dark mode</h2>
                <p className='mt-3 leading-7'>Give your users light and dark theme choices so they can choose what’s most eye-friendly.</p>
            </div>
        </div>
    </section>
  )
}

export default SectionOne