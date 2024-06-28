'use client';

import { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import Link from 'next/link';
import DeleteButton from "@/components/Admin/News/DeleteButton";
import StatusIndicator from '@/components/Admin/Members/StatusIndicator';

function Page() {
    const [selectedNews, setSelectedNews] = useState([]);
    const [isSelectAll, setIsSelectAll] = useState(false);
    const newsCount = 15;

    const handleSelectAll = () => {
        if (isSelectAll) {
            setSelectedNews([]);
        } else {
            setSelectedNews(Array.from({ length: newsCount }, (_, i) => i));
        }
        setIsSelectAll(!isSelectAll);
    };

    const handleSelect = (index) => {
        if (selectedNews.includes(index)) {
            setSelectedNews(selectedNews.filter(item => item !== index));
        } else {
            setSelectedNews([...selectedNews, index]);
        }
    };

    return (
        <div className='flex flex-col bg-white min-h-screen w-full px-10 max-md:px-6 pt-12 max-md:pt-16 mb-20 text-black'>
            <h1 className="font-semibold text-title">
                Manage Members
            </h1>
            <div className='w-full border border-gray-400 rounded-xl overflow-clip mt-5'>
                <div className='flex p-5 items-center justify-between'>
                    <div className="flex items-center gap-2">
                        <h2 className="font-semibold text-xl">
                            Member requests
                        </h2>
                        <div className="px-2 py-1 rounded-full bg-[#F5FFFA]">
                            <h5 className="text-sm text-[#266941]">
                                7 requests
                            </h5>
                        </div>
                    </div>
                </div>
                <div className='w-full max-md:overflow-x-scroll'>
                    <table className='w-full max-md:w-fit max-md:overflow-x-scroll text-base table'>
                        <thead className="bg-[#f4f6f7]">
                            <tr>
                                <th className='py-3 max-md:px-3 font-normal w-[5%]'>
                                    <input
                                        type="checkbox"
                                        className="scale-150 max-md:scale-100 accent-[#266941]"
                                        checked={isSelectAll}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className=' py-3 font-normal text-start max-md:text-sm w-[70%]'>
                                    Name
                                </th>
                                <th className='text-start py-3 font-normal max-md:text-sm w-[15%]'>
                                    Status
                                </th>
                                <th className=' py-3 font-normal max-md:text-sm w-[10%]'>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: newsCount }).map((_, index) => (
                                <tr key={index} className='border-t border-gray-400 '>
                                    <td>
                                        <div className='flex justify-center'>
                                            <input
                                                type="checkbox"
                                                className="scale-150 max-md:scale-100 accent-[#266941]"
                                                checked={selectedNews.includes(index)}
                                                onChange={() => handleSelect(index)}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <Link href="/pages/admin/members/addmember">
                                            <div className=' flex items-center py-5 pr-10'>
                                                <img src='' className="h-12 w-12 bg-gray-300 p-3 rounded-full" alt='' />
                                                <div>
                                                    <h4 className="font-semibold max-md:text-sm text-base ml-4">
                                                        Member name
                                                    </h4>
                                                    <h5 className="text-sm max-md:text-xs ml-4">
                                                        member@gmail.com
                                                    </h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </td>
                                    <td>
                                        <StatusIndicator status="Approved" />
                                    </td>
                                    <td >
                                        <div className='flex w-full max-md:gap-3 justify-around px-5 '>
                                            <DeleteButton name={"member"} />
                                            <button>
                                                <Link href={{ pathname: '/pages/admin/news/addnews' }}>
                                                    <FiEdit2 size={20} />
                                                </Link>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Page;
