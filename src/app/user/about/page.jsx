'use client';
import { useState } from 'react'
import AboutBanner from '@/../public/Assets/user/about_us/about_us.png'
import MembersBanner from '@/../public/Assets/user/about_us/manage_members.png'
import Image from 'next/image'
import AboutContent from '@/components/User/about/AboutContent'

function Page() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const banners = [AboutBanner, AboutBanner, AboutBanner, AboutBanner, MembersBanner]
    return (
        <div className='max-w-screen-xl max-lg:w-10/12 max-sm:w-full  mx-auto relative flex flex-col'>
            <h1 className='text-title font-semibold my-3 max-sm:w-10/12 max-sm:mx-auto'>About Us</h1>
            <Image className='w-full' src={banners[currentIndex]} />
            <AboutContent
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </div>
    )
}

export default Page
