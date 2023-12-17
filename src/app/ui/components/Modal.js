import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '../home.module.css'
import Image from 'next/image'
import modalImage from '../../../../public/translate.png'
import { CgCloseO } from "react-icons/cg";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialGoogle } from "react-icons/sl";

import { useAddUserMutation, useFetchUsersQuery } from '@/app/store';

const Modal = ({ modal, setModal, verify}) => {

    const router = useRouter()

    const {data, error, isLoading} = useFetchUsersQuery()
    const [addUser, results] = useAddUserMutation()

    const [visitor, setVisitor] = useState(verify)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])

    const handleModal = () => {
        setModal(!modal)
    }

    const handleVisitor = () => {
        setVisitor(!visitor)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(visitor) {
            addUser({email, password})
        }
        else {
            let x = 0
            data.map((user) => {
                if(email === user.email && password === user.password) {
                    x++
                    router.push(`/dashboard/${user.id.slice(0, 4)}`)
                }
            })
            x > 0 ? console.log('Giris başarılı') : console.log('email veya şifre hatalı')
        }
    }

  return (
    <div>
        <div className='absolute inset-0 bg-gray-200 opacity-80'></div>
        <div className='absolute inset-x-96 inset-y-32 bg-white border-2 border-blue-600 rounded-2xl grid grid-cols-2 overflow-hidden'>
            <div className={`${styles.modal} p-8`}>
                <Image src={modalImage} alt='3d modal image' className='rounded-lg' />
                <h1 className='mt-8 text-3xl text-center font-bold tracking-wide'>Welcome to Vocabloom</h1>
                <p className='mt-4 text-center text-[#666666] text-sm leading-6'>Hello there! <span className='text-blue-600 font-semibold'>Ready</span> to get to know us? Welcome to our application. We're here to provide you with the best experience. Simply log in to explore the exclusive world our app has to offer.</p>
                <p className='mt-4 text-center text-[#666666] text-sm leading-6'>For more information about our app or to discover new <span className='text-blue-600 font-semibold'>features</span>, please log in. If you're new, you can <span className='text-blue-600 font-semibold'>create</span> an account right away by choosing the sign-up option.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <button className='mt-3 mr-3 self-end justify-self-start text-blue-600 transition-all duration-300 hover:rotate-90 hover:scale-110' onClick={handleModal}><CgCloseO size={30} /></button>
                <div className={`${styles.login} w-[70%] mt-10 p-8 rounded-2xl flex flex-col m-auto`}>
                    <button className='mt-3 py-2  border-none block text-sm font-medium rounded-lg transition-all duration-300 bg-[#CAE9FF] hover:bg-[#dff2ff]'><SlSocialGoogle className='fill-blue-600 inline mr-3' size={30} /> Continue with Google</button>
                    <button className='mt-3 mb-6 py-2  border-none block text-sm font-medium rounded-lg transition-all duration-300 bg-[#CAE9FF] hover:bg-[#dff2ff]'><TiSocialTwitter className='fill-blue-600 inline mr-3' size={30} /> Continue with Twitter</button>
                    <div className='flex justify-between items-center'>
                        <div className='w-full border-b-2 border-[#eee]'></div>
                        <span className='text-[#ddd] p-2'>Or</span>
                        <div className='w-full border-b-2 border-[#eee]'></div>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        <input onChange={handleEmail} value={email} className='mt-6 py-2 pl-2 pr-6 border-2 rounded-lg focus:outline-none focus:border-blue-600 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' type="email" placeholder='you@gmail.com' />
                        <input onChange={handlePassword} value={password} className='mt-3 py-2 pl-2 pr-6 border-2 rounded-lg focus:outline-none focus:border-blue-600' type="password" placeholder='******' />
                        {visitor ? (<input onChange={handleConfirmPassword} value={confirmPassword} className='mt-3 py-2 pl-2 pr-6 border-2 rounded-lg focus:outline-none focus:border-blue-600' type="password" placeholder='******' />) : ''}
                        <button className='mt-3 py-2 bg-blue-600 text-[#fff] font-semibold rounded-lg transition-all duration-300 hover:bg-blue-700'>{!visitor ? 'Login' : 'Sign Up'}</button>
                    </form>
                    <p className='mt-6 text-center text-sm'>{!visitor ? "Don't have account?" : "You already have account?"} <span onClick={handleVisitor} className='text-blue-600 font-semibold hover:border-b border-blue-600 cursor-pointer'>{!visitor ? 'Sign Up' : 'Login'}</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal