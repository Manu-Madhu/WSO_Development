'use client';
import React, { useEffect, useState } from 'react';
import { FiEdit2 } from "react-icons/fi";
import Link from 'next/link';
import DeleteButton from "@/components/Admin/News/DeleteButton";
import StatusIndicator from '@/components/Admin/Members/StatusIndicator';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { adminApplicationRoute } from '@/utils/Endpoint';
import { TbArrowsDiagonal } from "react-icons/tb";

const ApplicationTable = () => {
    const [data, setData] = useState([])

    const axiosPrivate = useAxiosPrivate()

    const getData = async()=>{
        try {
            const response = await axiosPrivate.get(adminApplicationRoute);
            console.log({response})
            if(response.status === 200){
                setData(response?.data?.application)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <>
            <table className='w-full max-md:w-fit max-md:overflow-x-scroll text-base table '>
                <thead className="bg-[#f4f6f7]">
                    <tr >

                        <th className='pl-5 text-start py-3 font-normal max-md:text-sm '>
                            Name
                        </th>
                        <th className='text-start py-3 font-normal max-md:text-sm '>
                            Phone
                        </th>
                        <th className='text-start py-3 font-normal max-md:text-sm '>
                            Membership
                        </th>
                        <th className='text-start py-3 font-normal max-md:text-sm '>
                            Status
                        </th>
                        <th className='text-start py-3 font-normal max-md:text-sm '>
                            View
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item, index) => (
                            <tr key={index} className='border-t border-gray-400 '>

                                <td >
                                    <div className='w-fit flex items-center px-3 py-3 '>
                                        <img src={item?.idProof?.location} className="h-12 w-12 bg-gray-300 object-contain rounded-full" alt='' />
                                        <div className='ml-4'>
                                            <h4 className="font-semibold max-md:text-sm text-base capitalize">
                                                {item?.applicantName ?? 'NIL'}
                                            </h4>
                                            <h5 className="text-sm max-md:text-xs ">
                                                {item?.email ?? 'NIL'}
                                            </h5>
                                        </div>
                                    </div>
                                </td>
                                <td className=''>
                                    {item?.phone ?? 'NIL'}
                                </td>
                                <td className='capitalize'>
                                    {item?.membershipType ?? 'NIL'}
                                </td>
                                <td className='capitalize'>
                                    <StatusIndicator status={item?.status} />
                                </td>

                                {/* <td >
                                    <div className='flex  max-md:gap-3 justify-around px-5 '>
                                        <DeleteButton name={"application"} id={item?._id} data={data} setData={setData} />
                                        <button>
                                            <Link href={{ pathname: `/admin/application/edit/${item?._id}` }}>
                                                <FiEdit2 size={20} />
                                            </Link>
                                        </button>
                                    </div>
                                </td> */}

                                <td > 
                                <Link href={{ pathname: `/admin/applications/view/${item?._id}` }}>
                                    <TbArrowsDiagonal size={22}  className='cursor-pointer text-blue-500 ' />
                                </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            {
                data?.length === 0
                &&
                <p className='mx-auto w-fit py-5'>No available data</p>
            }
        </>
    )
}

export default ApplicationTable