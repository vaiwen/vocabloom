import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className='py-24 sm:px-4'>
        <div className='xl:max-w-screen-xl lg:max-w-screen-lg px-6 m-auto grid sm:grid-cols-3 br-1:grid-cols-5 gap-x-4'>
            <div>
                <h2 className='font-semibold xl:text-3xl lg:text-2xl sm:text-xl'>VOCABLOOM</h2>
                <div className='flex items-center mt-5'>
                    <a href='https://www.facebook.com' target='_blank' className='hover:scale-110 transition-all duration-300'><FaFacebook size={30} className='fill-blue-600 mr-4' /></a>
                    <a href='https://www.instagram.com' target='_blank' className='hover:scale-110 transition-all duration-300'><FaInstagram size={30} className='fill-blue-600 mr-4' /></a>
                    <a href='https://twitter.com' target='_blank' className='hover:scale-110 transition-all duration-300'><TiSocialTwitter size={30} className='fill-blue-600 mr-4' /></a>
                </div>
                <p className='mt-5 text-sm'>Copyright © 2023 by Vocabloom</p>
                <p className='text-sm'>Inc. All rights reserved</p>
            </div>
            <div className='text-sm'>
                <h2 className='font-semibold text-xl'>Contact us</h2>
                <address>
                    <p className='mt-3'>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
                    <a className='mt-3 block' href='tel:415-201-6370'>415-201-6370</a>
                    <a className='mt-3 inline-block border-b border-blue-600' href='mailto:barisglsln@gmail.com'>barisglsln@gmail.com</a>
                </address>
            </div>
            <div>
                <h2 className='font-semibold text-xl'>Account</h2>
                <ul>
                    <li className='mt-3'><a href='#'>Create Account</a></li>
                    <li className='mt-3'><a href='#'>Sign in</a></li>
                    <li className='mt-3'><a href='#'>İOS app</a></li>
                    <li className='mt-3'><a href='#'>Android app</a></li>
                </ul>
            </div>
            <div className='sm:mt-4 md:mt-0'>
                <h2 className='font-semibold text-xl'>Company</h2>
                <ul>
                    <li className='mt-3'><a href='#'>About Vocabloom</a></li>
                    <li className='mt-3'><a href='#'>For Business</a></li>
                    <li className='mt-3'><a href='#'>Partners</a></li>
                    <li className='mt-3'><a href='#'>Careers</a></li>
                </ul>
            </div>
            <div className='sm:mt-4 md:mt-0'>
                <h2 className='font-semibold text-xl'>Resources</h2>
                <ul>
                    <li className='mt-3'><a href='#'>Directory</a></li>
                    <li className='mt-3'><a href='#'>Help center</a></li>
                    <li className='mt-3'><a href='#'>Privacy & termss</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer