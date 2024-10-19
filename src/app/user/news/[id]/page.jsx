import React from 'react';
import cover from "@/../../public/Assets/user/news/cover.png"
import Image from 'next/image';
import { baseUrl, getAllNews } from '@/utils/Endpoint';
const getNews = async (id) => {
    try {
        const res = await fetch(`${baseUrl}${getAllNews}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await res.json()
        return data.news
    } catch (error) {
        console.log("error" + error)
    }
}
const NewsDetailed = async ({ params }) => {
    const News = await getNews(params.id)

    return (
        <div className="max-w-[1280px] mx-auto w-full p-3 flex flex-col items-center justify-center 
    my-5 mb-10 md:mb-20 gap-8">
            <h1 className=" text-[#101828] font-bold text-xl self-start ">{News.title}</h1>

            <div className='w-full flex flex-col sm:flex-row gap-8'>
                {
                    News?.thumbnail
                    ?
                    <img src={`${baseUrl}${News?.thumbnail?.location}`} alt="image"
                        className="w-full sm:w-1/2 h-[400px] object-cover rounded-lg" />
                        :
                        <Image src={cover} alt="image"
                            className="w-full sm:w-1/2 h-[400px] object-cover rounded-lg" />
                }

                <div className='w-full sm:w-1/2 flex flex-col gap-4 '>
                    <div
                        dangerouslySetInnerHTML={{ __html: News?.description }}
                    />
                </div>
            </div>

        </div>
    )
}

export default NewsDetailed