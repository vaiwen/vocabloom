import React, { useEffect, useState } from 'react'
import { useFetchWordsQuery } from '@/app/store'
import { usePathname } from 'next/navigation'
import WordListItem from './WordListItem'

const WordsList = ({ last, setTotal }) => {

    let pathname = usePathname().split('/')
    let words
    let lastWord

    const results = useFetchWordsQuery()

    const handleTop = (id) => {
        lastWord = words.filter((word) => word.id === id)
        // setSelected(lastWord[0])
        // lastWord = selected
        // console.log(selected)
    }

    if(results.isLoading) {
        // returns Skeleton element
    }
    else if (results.isError) {
        console.log('Some error!')
    }
    else {
        words = results.data.filter((word) => word.userId.slice(0, 4) === pathname[2])
        lastWord = words[words.length -1]
    }

    useEffect(() => {
        setTotal(words?.length)
    }, [words])

  return (
    <div>
        {last ? <WordListItem word={lastWord} style={true} /> : words?.map((word) => <WordListItem key={word.id} word={word} handleTop={handleTop} /> )}
    </div>
  )
}

export default WordsList