import Image from "next/image";
import React from "react";
import LandingImage from "@/../../public/Assets/user/home/landingBg.png";

const LandingPage = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute right-0 bottom-0 -z-10 w-full flex items-end justify-end">
        <Image
          src={LandingImage}
          alt=""
          className=" object-contain md:w-1/2 h-full "
        />
      </div>
      <div className="max-w-[1280px] w-full h-full flex flex-col items-start sm:justify-center mx-auto p-3 z-10 mt-12 sm:mt-0">
        <h1 className="text-3xl md:text-7xl">Welcome to the World</h1>
        <h1 className="text-3xl md:text-7xl">
          <span className="italic  text-primaryColor">Spice</span> Organisation
        </h1>
        <p className="mt-5 sm:w-1/2 text-wrap text-xs sm:text-sm">
          The World Spice Organisation is a collaborative platform that unites
          all stakeholders in the spice industry—farmers, processors, academics,
          and end-users. Its mission is to work collectively towards sustainable
          development.
        </p>
        <p className="mt-5 sm:w-1/2 text-wrap text-xs sm:text-sm">
          improving agricultural practices, processing methods, research,
          education, and product quality across the entire spice supply chain.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
