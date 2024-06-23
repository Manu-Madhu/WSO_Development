import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const NewsComponent = ({ News }) => {
  return (
    <>
      {News.map((item) => (
        <div
          key={item?.id}
          className="w-full sm:min-w-[300px] min-h-[280px] border-rounded-xl relative "
        >
          <div className="bg-primaryColor rounded-xl w-full h-full">
            <Link href={item?.link}>
              <GoArrowUpRight
                size={16}
                className="absolute top-2 right-2 text-white"
              />
            </Link>{" "}
            <Image src={item?.img} alt="cards" className="rounded-t-xl" />
            <div className=" p-3 text-white">
              <div className="flex items-center justify-between">
                <h1 className="text-nowrap text-sm">{item?.title}</h1>
                <h1 className="text-xs font-[200]">{item?.date}</h1>
              </div>
              <p className="text-xs font-[200] mt-2">{item?.subTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsComponent;
