import AboutPart from "@/components/User/home/about/AboutPart";
import Contact from "@/components/User/home/about/Contact";
import LatestNews from "@/components/User/home/about/LatestNews";
import LandingPage from "@/components/User/home/LandingPage";
import React from "react";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <div className="my-6 md:my-20">
        <AboutPart />
      </div>
      <div className="my-6 md:my-20">
        <LatestNews />
      </div>
      <div className="my-6 md:my-20">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
