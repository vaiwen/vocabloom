import React from 'react'
import { HiTranslate } from "react-icons/hi";
import { useRemoveWordMutation } from '../store';

const WordListItem = ({ word, style, handleTop }) => {

    const [removeWord, results] = useRemoveWordMutation()

    const handleRemove = () => {
        removeWord(word)
    }

  return (
    <>
    <div onClick={() => handleTop(word)} className={`${style? '' : 'border-2 border-[#eee] p-2' } mb-2 rounded-lg flex justify-between items-center cursor-pointer transition-all duration-300 hover:border-blue-600`}>
        <span className='text-center text-sm px-4 py-2 font-semibold bg-blue-600 text-white rounded-xl flex-1'>{word?.english}</span>
        <HiTranslate size={25} className='fill-blue-600 m-2' />
        <span className='text-center text-sm px-4 py-2 mr-2 font-semibold text-blue-600 border border-blue-600 rounded-xl flex-1'>{word?.turkish}</span>
    </div>
    {
      style && <button onClick={handleRemove} className='w-full p-1 text-white bg-red-500 font-semibold text-sm rounded-md transition-all duration-300 hover:bg-red-600'>Delete</button>
    }
    </>
  )
}

export default WordListItem