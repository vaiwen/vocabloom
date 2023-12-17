"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useFetchUsersQuery } from '@/app/store'

import styles from '../../ui/home.module.css'
import dashboardBanner from '../../../../public/mental.png'
import dashboard from '../../../../public/hello.png'

import { BsSun } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import WordsList from '@/app/lib/WordsList'
import AddWord from '@/app/lib/AddWord'
import SearchWord from '@/app/lib/SearchWord'
import Tooltip from '@/app/lib/Tooltip'

const page = () => {

    const router = useRouter()
    let pathname = usePathname().split('/')

    const [searchTerm, setSearchTerm] = useState('')
    const [total, setTotal] = useState(0)
    const [visible, setVisible] = useState(false)

    const handleSearch = (e) => {
      setSearchTerm(e.target.value)
    }

    let user
    let username

    const {data, error, isLoading} = useFetchUsersQuery()

    if(isLoading) {
        // returns Skeleton element
    }
    else if (error) {
        console.log('Some error!')
    }
    else {
        user = data.filter((item) => item.id.slice(0, 4) === pathname[2])
        username = user[0].email
    }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className={`${styles.dashboard} max-w-6xl bg-white rounded-2xl grid grid-cols-[2fr_5fr_2fr]`}>
        <div className='p-5 flex flex-col justify-between'>
          <h1 className='text-3xl font-bold text-center'>Vocabloom</h1>
          <div></div>
          <div>
            <button className='w-full font-semibold text-xl align-middle block transition-all duration-300 hover:scale-110 hover:translate-x-2'>Theme<BsSun className='inline ml-2' size={25} /></button>
            <button onClick={() => router.push('/')} className='w-full mt-2 font-semibold text-xl align-middle transition-all duration-300 hover:scale-110 hover:translate-x-2'>Logout<CiLogout className='inline ml-2' size={25} /></button>
          </div>
        </div>

        <div className='p-5 border-r-2 border-l-2'>
          <div className='flex justify-between items-center'>
            <div>
              <h2 className='text-xl font-semibold'>{`Hi, ${username}`}</h2>
              <p className='text-sm mt-1 text-[#bbb]'>Welcome to your Dashboard</p>
            </div>
            <div className='flex items-center border-2 border-blue-600 rounded-xl p-2'>
              <CiSearch size={30} className='fill-[#ccc] mr-2' />
              <input onChange={handleSearch} value={searchTerm} type="search" placeholder='Search word' name='serach-input' className='outline-none' />
            </div>
          </div>
          <div className='bg-blue-700 rounded-2xl mt-10 grid grid-cols-2 gap-x-3 items-center text-center'>
            <div className='p-2'>
              <h1 className='text-4xl font-bold text-white'>Try Playground!</h1>
              <p className='mt-4 text-white text-sm'>Visit Playground section and start to learn with fun.</p>
            </div>
            <Image alt='dashboard image' src={dashboardBanner} priority className='rounded-xl w-full' />
          </div>
          <div className='mt-10 grid grid-cols-2 gap-x-10'>
            <AddWord data={data} />
            <SearchWord searchTerm={searchTerm} />
          </div>
          <h1 className='text-center mt-10 rounded-lg text-white font-semibold text-3xl p-4 bg-blue-600'>You have <span className='border-b-4 border-white'>{total}</span> card in total.</h1>
        </div>

        <div className='p-5 relative'>
          {visible && <Tooltip />}
          <div className='flex items-center'>
            <h2 className='text-2xl font-semibold'>Selected card</h2>
            <div onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}><AiOutlineQuestionCircle size={20} className='ml-4 opacity-70 cursor-pointer' /></div>
          </div>
          <div className='p-2 mt-4 mb-4 border-2 border-blue-600 rounded-lg'>
              {<WordsList last={true} setTotal={setTotal} />}
          </div>
          <h2 className='text-2xl font-semibold mb-4'>All Cards</h2>
          <div className='h-[400px] overflow-y-scroll'>
            {<WordsList setTotal={setTotal} last={false} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page