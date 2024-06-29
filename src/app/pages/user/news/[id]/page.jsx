import React from 'react';
import cover from "../../../../../../public/Assets/user/news/cover.png"
import Image from 'next/image';

const NewsDetailed = () => {

    const newsdata = [
        {
            id: 1,
            para: `The Spice Industry has seen progress at a rapid pace in the past few 
            decades.Today, it is a $3.2 billion, 1 million tons industry. The increasing
             awareness among world-wide consumers on the wholesome goodness of spices, 
             development of new products, processes and applications have helped the 
             industry scale new heights.`,
            list: [],
        },
        {
            id: 2,
            para: `With the global importance of food safety laws increasing, the demand 
            for processed spices is only going to grow. However, there are certain 
            roadblocks which could hamper further growth. They are:`,
            list: [
                `Disproportionately lower production vis-à-vis increase in population leading to shortage in supply`,
                `Exploitation of soil and environment - inordinate usage of hazardous chemicals`,
                `Poor sanitation & hygiene conditions at farm level`,
                `Rigorous and exacting food safety laws`,
            ],
        },
        {
            id: 3,
            para: `It is in this backdrop that World Spice Organisation (WSO) comes into existence in Kochi, the spice capital of India.`,
            list: [],
        },
        {
            id: 4,
            para: `WSO is a not-for-profit organisation registered under the Travancore Cochin 
            Literary, Scientific And Charitable Societies Act, 1956 with the primary objective 
            of facilitating the Spice Industry in dealing with issues of “Food Safety & 
            Sustainability”. WSO seeks to achieve its objectives by involving all its 
            stakeholders—the general public, the industry, the academia and the end-users. We 
            also seek to strengthen the 'Corporate Social Responsibility' initiatives of the 
            industry.`,
            list: [],
        },
        {
            id: 5,
            para: `WSO recognises that efforts for food safety and sustainability should 
            begin at the farm level. This is because all major issues that threaten the 
            industry today—from lower productivity to the occurrence of harmful 
            agrochemicals—have their roots there.`,
            list: [],
        },
        {
            id: 6,
            para: `WSO recognises the contributions of spice associations and regulatory 
            bodies, in the development of the industry. WSO, therefore will operate 
            through, and together with, all the stakeholders of the industry and national 
            spice associations to address the various issues in the industry, for a spice 
            renaissance.`,
            list: [],
        },
    ]

    return (
        <div className="max-w-[1280px] mx-auto w-full p-3 flex flex-col items-center justify-center 
    my-5 mb-10 md:mb-20 gap-8">
            <h1 className=" text-[#101828] font-bold text-xl self-start ">News</h1>

            <div className='w-full flex flex-col sm:flex-row gap-8'>
                <Image src={cover} alt="image"
                    className="w-full sm:w-1/2 h-[400px] object-cover rounded-lg" />

                <div className='w-full sm:w-1/2 flex flex-col gap-4 '>
                    {
                        newsdata?.map((item, i) => (
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
            </div>

        </div>
    )
}

export default NewsDetailed