import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import cardpic from '../../../../../public/Assets/user/events/cardpic.png';

const NewsComponent = ({ News }) => {

  return (
    <>
      {News?.map((item) => {
        const date = new Date(item?.createdAt);
        let formattedDate = null;
        if (!isNaN(date)) {
          const day = String(date.getUTCDate()).padStart(2, '0');
          const month = String(date.getUTCMonth() + 1).padStart(2, '0');
          const year = date.getUTCFullYear();
          formattedDate = `${day}/${month}/${year}`;
        }
        return (
          <div
            key={item?._id}
            className="w-full sm:min-w-[300px] min-h-[280px] border-rounded-xl relative "
          >
            <div className="bg-primaryColor rounded-xl w-full h-full">
              <Link href={`/user/news/${item?._id}`}>
                <GoArrowUpRight
                  size={16}
                  className="absolute top-2 right-2 text-white"
                />
              </Link>{" "}
              {
                item?.thumbnail
                ?
                <img src={item?.thumbnail?.location} alt="cards" className="rounded-t-xl w-full h-[70%] object-cover" />
                :
                <Image src={cardpic} alt="cards" className="rounded-t-xl w-full h-[70%] object-cover" />
              }
              <div className=" p-3 text-white">
                <div className="flex items-center justify-between">
                  <h1 className="text-nowrap text-sm">{item?.title}</h1>
                  <h1 className="text-xs font-[200]">{formattedDate}</h1>
                </div>
                <div dangerouslySetInnerHTML={{ __html: item?.description }} className="text-xs font-[200] mt-2" />
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default NewsComponent;
