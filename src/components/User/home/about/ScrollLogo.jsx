import { Logos } from "@/data/about";
import Image from "next/image";
import React from "react";

const ScrollLogo = () => {
  return (
    <div className="w-full h-[110px] flex flex-col items-start justify-start overflow-hidden mt-10">
      <h1 className="mb-5 text-2xl font-[400]">Our Members</h1>
      <div className="flex gap-5 overflow-x-scroll my-custom-scrollbar">
        {Logos.map((items) => (
          <Image
            key={items?.id}
            src={items?.logo}
            alt="logo"
            className="w-20  object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollLogo;
