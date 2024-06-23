import { News } from "@/data/about";

import Link from "next/link";
import React from "react";
import NewsComponent from "./News";

const LatestNews = () => {
  return (
    <div className="max-w-[1280px] mx-auto w-full px-3 ">
      <h1 className="my-5 md:my-8 text-3xl font-[500]">Latest Updates</h1>
      <div className="flex flex-col w-full h-fit sm:flex-row gap-5 overflow-x-scroll my-custom-scrollbar py-3">
        <NewsComponent News={News} />
      </div>
      <div className="w-full flex items-center justify-center mt-5 underline">
        <h2 className="font-semibold text-primaryColor  cursor-pointer ">
          <Link href={"/"}>Read More</Link>
        </h2>
      </div>
    </div>
  );
};

export default LatestNews;
