'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NewsComponent from "./News";
import { baseUrl, getAllNews } from "@/utils/Endpoint";

const LatestNews = () => {
  const [News, setNews] = useState([]); 

  const getData = async () => { 
    try {
      const res = await fetch(`${baseUrl}${getAllNews}`, { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const data = await res.json(); 
      setNews(data.news); 
      console.log(data);
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto w-full px-3 ">
      <h1 className="my-5 md:my-8 text-3xl font-[500]">Latest Updates</h1>
      <div className="flex flex-col w-full h-fit sm:flex-row gap-5 overflow-x-scroll my-custom-scrollbar py-3 ">
        <NewsComponent News={News} /> {/* Ensure News is passed correctly */}
      </div>
      <div className="w-full flex items-center justify-center mt-5 underline">
        <h2 className="font-semibold text-primaryColor cursor-pointer">
          <Link href={"/user/news/all"}>Read More</Link>
        </h2>
      </div>
    </div>
  );
};

export default LatestNews;
