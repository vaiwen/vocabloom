import React, { useState } from 'react'
import { useFetchWordsQuery } from '@/app/store'
import { usePathname } from 'next/navigation';

const SearchWord = ({ searchTerm }) => {

    let pathname = usePathname().split('/')

    let words

    const {data, error, isLoading} = useFetchWordsQuery()

    if(isLoading) {
        // returns Skeleton element
    }
    else if (error) {
        console.log('Some error!')
    }
    else {
        words = data.filter((item) => item.userId.slice(0, 4) === pathname[2] && item.english.includes(searchTerm))
    }

  return (
    <div className={`${searchTerm.length > 0 ? 'overflow-x-scroll' : 'flex justify-center items-center'} h-44 border-2 border-blue-600 rounded-xl p-4 grid grid-cols-2 items-center gap-1`}>
        {
            searchTerm === '' ? <h2 className='font-semibold text-3xl text-blue-600'>Try searching word!</h2> : words?.map((word) => <p className='text-center p-4 bg-blue-600 text-white font-semibold rounded-xl cursor-pointer hover:bg-blue-700 transition-all duration-300' key={word.id}>{word.english}</p>)
        }
    </div>
  )
}

export default SearchWord