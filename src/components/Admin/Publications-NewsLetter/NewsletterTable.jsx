"use client";
import React, { useEffect, useState } from 'react';
import { FiEdit2 } from "react-icons/fi";
import Link from "next/link";
import DeleteButton from "@/components/Admin/News/DeleteButton";
import axios from '@/axios-folder/axios';
import {  getAllNewsletterRoute } from '@/utils/Endpoint';
import { CiImageOn } from "react-icons/ci";

const NewsletterTable = ({name}) => {

    const [data, setData] = useState([]);

    const getNewsletters = async()=>{
        try {
            const response = await axios.get(getAllNewsletterRoute);
            console.log({response})
            if(response.status === 200){
                setData(response?.data?.Newsletter)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getNewsletters()
    }, [])


    return (
        <>
            <table className='w-full text-base table'>
                <thead className="text-sm" >
                    <tr>
                        <th className='px-6 py-3 font-normal text-start text-nowrap'>
                            File name
                        </th>
                        <th className='px-6 py-3 font-normal clamp text-nowrap'>
                            File size
                        </th>
                        <th className='px-8 py-3 font-normal'>
                            Date uploaded
                        </th>
                        <th className='px-8 py-3 font-normal'>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item, index) => (
                            <tr className="border-t border-gray-400" key={index} style={{ backgroundColor: (index + 1) % 2 === 0 ? '#f4f6f7' : 'transparent' }}>
                                <td>
                                    <div className='px-6 py-4 max-w-[90%]  max-md:max-w-52 flex items-center max-md:overflow-clip'>
                                        <div className="bg-[#F4EBFF] p-3 rounded-full">
                                            <CiImageOn size={22} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-base ml-4 text-nowrap line-clamp-1 max-w-[30rem] max-lg:max-w-72 max-md:max-w-56">
                                                {item?.title}
                                            </h4>
                                            <h5 className="text-sm ml-4">
                                                16 MB
                                            </h5>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-6 py-4 text-center'>
                                    1.2 MB
                                </td>
                                <td className='px-8 py-4 text-center'>
                                    {item?.createdAt}
                                </td>
                                <td>
                                    <div className='flex w-full justify-evenly max-md:gap-3 px-8 py-6'>
                                        <DeleteButton name={name} />
                                        <button >
                                            <Link href={{ pathname: `/pages/admin/${name}/add${name}` }}>
                                                <FiEdit2 size={20} />
                                            </Link>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default NewsletterTable