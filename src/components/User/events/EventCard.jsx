import Image from 'next/image'
import React from 'react'
import cardpic from '../../../../public/Assets/user/events/cardpic.png';
import { HiOutlineDownload } from "react-icons/hi";

const EventCard = () => {
  return (
    <div className='w-full sm:w-[300px] h-[260px] flex flex-col rounded-lg overflow-hidden relative'>
        <Image src={cardpic} alt=''
        className='w-full h-[180px] object-cover'
        />

        <div className='w-full h-[80px] bg-primaryColor text-white flex flex-col justify-center px-3 gap-2' >
            <div className='w-full flex justify-between items-center'>
                <span className='truncate'>Event name </span>
                <span className='text-sm font-light'>10/12/2024</span>
            </div>

            <p className='text-sm font-light truncate'>
                Event description
            </p>

        </div>

        <span className='absolute top-4 right-4 cursor-pointer'>
            <HiOutlineDownload size={32} color='#777' />
        </span>
    </div>
  )
}

export default EventCard