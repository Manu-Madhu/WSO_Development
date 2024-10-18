import Image from "next/image";
import React from "react";
import LandingImage from "@/../../public/Assets/user/home/landingBg.png";

const LandingPage = () => {
  return (
    <div className={`relative w-full h-[50vh] md:h-screen overflow-hidden bg-cover bg-center bg-[url('/Assets/banner.jpg')]`}>
      <div className="max-w-[1280px] w-full h-full text-white flex flex-col items-start sm:justify-center mx-auto p-3 z-10 mt-12 sm:mt-0">
        <h1 className="text-3xl md:text-7xl">Welcome to the World</h1>
        <h1 className="text-3xl md:text-7xl">
          <span className="italic  font-bold">Spice</span> Organisation
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
