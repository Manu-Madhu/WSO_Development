'use client';

import { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import Link from 'next/link';
import DeleteButton from "@/components/Admin/News/DeleteButton";
import StatusIndicator from '@/components/Admin/Members/StatusIndicator';
import ApplicationTable from '@/components/Admin/Application/ApplicationTable';

function Page() {
    
    const newsCount = 15;

    
    return (
        <div className='flex flex-col bg-white min-h-screen w-full px-10 max-md:px-6 pt-12 max-md:pt-16 mb-20 text-black'>
            <h1 className="font-semibold text-title">
                Manage applications
            </h1>
            <div className='w-full border border-gray-400 rounded-xl overflow-clip mt-5'>
                <div className='flex p-5 items-center justify-between'>
                    <div className="flex items-center gap-2">
                        <h2 className="font-semibold text-xl">
                            Application requests
                        </h2>
                        <div className="px-2 py-1 rounded-full bg-[#F5FFFA]">
                            <h5 className="text-sm text-[#266941]">
                                7 requests
                            </h5>
                        </div>
                    </div>
                </div>
                <div className='w-full max-md:overflow-x-scroll'>
                    <ApplicationTable/>
                </div>
            </div>
        </div>
    );
}

export default Page;
