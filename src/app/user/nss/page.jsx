import React from 'react';
import Image from 'next/image';
import mill from '@/../../public/Assets/user/nss/mill.png';
import { nssdata } from '@/data/initiatives';

const NSS = () => {
    return (
        <div className='max-w-[1280px] mx-auto w-full flex flex-col py-5 xl:py-10 px-4 xl:px-0
    gap-12 '>

            <h1 className='text-xl sm:text-3xl text-black font-semibold'>NSS(National Sustainability Summit)</h1>

            <div className='w-full h-full flex flex-col-reverse lg:flex-row gap-5'>

                <div className='w-full lg:w-3/5 flex flex-col justify-between gap-8'>
                    <div className='w-full flex flex-col gap-4 '>
                        {
                            nssdata?.map((item, i) => (
                                <div key={i} className='text-sm'>
                                    <p >{item?.para}</p>
                                    {
                                        item?.list?.length > 0
                                        &&
                                        <ul className='pl-4' >
                                            {item?.list?.map((litem, li) => (
                                                <li key={li}
                                                    className='list-disc'
                                                >
                                                    {litem}
                                                </li>
                                            ))
                                            }
                                        </ul>
                                    }

                                </div>
                            ))
                        }
                    </div>

                    <button className=' w-full lg:w-fit bg-primaryColor text-white px-3 py-2 rounded-md'>
                        Visit NSS
                    </button>
                </div>

                <Image
                    src={mill}
                    className='w-full lg:w-2/5 h-50 object-cover'
                />

            </div>
        </div>
    )
}

export default NSS