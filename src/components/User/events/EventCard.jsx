import Image from 'next/image'
import React from 'react'
import cardpic from '../../../../public/Assets/user/events/cardpic.png';
import { HiOutlineDownload } from "react-icons/hi";
import Link from 'next/link';

const EventCard = ({ data }) => {

    return (
        <div className='w-full sm:w-[300px] h-[260px] flex flex-col rounded-lg overflow-hidden relative'>


            {
                data?.thumbnail
                    ?
                    <img src={data?.thumbnail?.location} alt=''
                        className='w-full h-[180px] object-cover'
                    />
                    :
                    <Image src={cardpic} alt="cards" className="rounded-t-xl w-full h-[70%] object-cover" />
            }

            <div className='w-full h-[80px] bg-primaryColor text-white flex flex-col justify-center px-3 gap-2' >
                <div className='w-full flex justify-between items-center'>
                    <span className='truncate'>{data?.title}</span>
                    <span className='text-sm font-light'>{data?.date}</span>
                </div>

                <p className='text-sm font-light truncate'>
                    {data?.description}
                </p>

            </div>

            <Link href={data?.document.location ?? ''} className='absolute top-4 right-4 cursor-pointer'>
                <HiOutlineDownload size={32} color='#777' />
            </Link>
        </div>
    )
}

export default EventCard