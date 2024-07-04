'use client'
import EventCard from '@/components/User/events/EventCard'
import React, { useState } from 'react'

const Events = () => {
    const [data, setData] = useState([1,1,1,1,1,1,1,1,1,1,1])
  return (
    <div className="max-w-[1280px] mx-auto w-full p-3 flex flex-col items-center justify-center 
    my-5 mb-10 md:mb-20 gap-8">
        <h1 className=" text-[#101828] font-bold text-2xl self-start ">Events and Meetings</h1>

        <div className='w-full flex flex-wrap justify-around gap-4 '>
            {
                data?.map((item,i)=>(
                    <EventCard key={i} />
                ))
            }
        </div>

    </div>
  )
}

export default Events