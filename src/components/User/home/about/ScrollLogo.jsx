import { Logos } from "@/data/about";
import Image from "next/image";
import React from "react";

const ScrollLogo = () => {
  return (
    <div className="w-full h-[110px] flex items-center justify-start overflow-hidden">
      <div className="flex gap-5 overflow-x-scroll my-custom-scrollbar">
        {Logos.map((items) => (
          <Image
            key={items?.id}
            src={items?.logo}
            alt="logo"
            className="w-20 object-container"
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollLogo;
