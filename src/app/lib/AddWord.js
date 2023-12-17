import React, { useState } from 'react'
import { useAddWordMutation } from '../store'
import { usePathname } from 'next/navigation'

const AddWord = ({ data }) => {

    let pathname = usePathname().split('/')
    let userId

    const [english, setEnglish] = useState('')
    const [turkish, setTurkish] = useState('')

    const userV = data?.filter((user) => user.id.slice(0, 4) === pathname[2])
    userV?.map((user) => userId = user.id)

    const handleEnglish = (e) => {
        setEnglish(e.target.value)
    }

    const handleTurkish = (e) => {
        setTurkish(e.target.value)
    }

    const [addWord, results] = useAddWordMutation()

    const handleSubmit = (e) => {
        e.preventDefault()
        // english === '' || turkish === '' ? console.log('kutucukları doldurun!') : addWord({userId, english, turkish})
        if(english === '' || turkish === '' ) {
            console.log('kutucukları doldurun!')
        }
        else {
            addWord({userId, english, turkish})
            setEnglish('')
            setTurkish('')
            console.log('Word added succesfully!')
        }
    }

  return (
    <div className=''>
        <form onSubmit={handleSubmit} className='border-2 border-blue-600 rounded-xl p-4 flex flex-col'>
            <div>
                <label className='font-semibold' htmlFor='word-english'>English:</label>
                <input onChange={handleEnglish} value={english} type="text" id='word-english' className='mt-2 w-2/3 ml-2 border rounded-lg px-2 py-1 focus:outline-none focus:border-blue-600' />
            </div>
            <div>
                <label className='font-semibold' htmlFor='word-turkish'>Turkish:</label>
                <input onChange={handleTurkish} value={turkish} type="text" id='word-turkish' className='mt-2 w-2/3 ml-2 border rounded-lg px-2 py-1 focus:outline-none focus:border-blue-600' />
            </div>
            <button className='ml-auto mr-auto mt-4 py-2 px-4 rounded-2xl bg-blue-600 text-white font-semibold transition-all duration-300 hover:bg-blue-700'>Create a Card</button>
        </form>
    </div>
  )
}

export default AddWord