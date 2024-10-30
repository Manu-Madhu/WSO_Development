'use client'
import { Logos } from "@/data/about";
import Image from "next/image";
import React from "react";
import Marquee from "react-marquee-slider";

const ScrollLogo = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start overflow-hidden mt-10">
      <h1 className="mb-5 lg:mb-10  text-2xl font-[400]">Our Members</h1>
      <Marquee velocity={20} resetAfterTries={100} direction="left">
        {/* Wrap logos in a container for spacing */}
        {Logos.map((items) => (
          <div key={items.id} className="flex items-center justify-center mx-5 lg:mx-12 mb-5 lg:mb-0 "> {/* Add margin for spacing */}
            <Image
              src={items.logo}
              alt="logo"
              width={80}
              height={80}
              className="object-contain w-24"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollLogo;
