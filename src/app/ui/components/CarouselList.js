import React from 'react'
import CarouselItem from './CarouselItem'

const CarouselList = ({ selected }) => {

    const items = [
        {
            id: 0,
            title: "Dont waste time",
            text: "You can learn on Vocabloom which languages you want instead of reading old dictionaries. It is too simple to learn. Let's start."
        },
        {
            id: 1,
            title: "Always consolidate",
            text: "How much you consolidate what you have learned? Vocabloom helps persistence to your learning and makes it fun. "
        },
        {
            id: 2,
            title: "Pure focus",
            text: "Best ui/ux designs, in our application. It's made for your learning duration. You don't lose your focus by vocabloom."
        },
        {
            id: 3,
            title: "Always consolidate",
            text: "How much you consolidate what you have learned? Vocabloom helps persistence to your learning and makes it fun. "
        }
    ]

  return (
    <div>
        {
            items.map((item) => {
                if(item.id === selected) {
                    return (
                        <CarouselItem key={item.id} title={item.title} text={item.text} />
                    )
                }
            })
        }
    </div>
  )
}

export default CarouselList