import React from "react";
import TopBanner from "./TopBanner";
import ScrollLogo from "./ScrollLogo";

const AboutPart = () => {
  return (
    <div className="max-w-[1280px] mx-auto w-full px-3">
      <div className="w-full rounded-xl">
        <TopBanner />
      </div>
      <div className="flex flex-col ">
        <h1 className="my-5 md:my-8 text-3xl font-[500]">About WSO</h1>
        <div className="flex flex-col md:flex-row">
          {/* left side text + Scroll option */}
          <div className="w-full ">
            <p className="text-xs md:text-sm text-wrap  md:w-[90%] text-black/80">
              WSO owes its genesis to the realisation that there was a need for
              an organised movement of partners from across the globe to build a
              healthy and responsible future for the spice industry. To
              celebrate its success and face the challenges. And to smoothen out
              the rough patches Together.
            </p>

            <p className="text-xs md:text-sm text-wrap md:w-[90%] mt-3 text-black/80">
              WSO seeks to identify areas of potential growth, ensure proper
              allocation of resources, interact with the academia, engage with
              the governments on legislations and stand by and help the farmer
              to increase production and productivity through eco-friendly
              methods.
            </p>

            <div className="my-3 w-full">
              <ScrollLogo />
            </div>
          </div>

          {/* Right side Green part */}
          <div className="w-full md:w-2/5">
            <div className=" bg-primaryColor p-7 rounded-lg">
              <h1 className="text-white font-semibold text-[27px] ">
                Want to be a member?
              </h1>
              <p className="my-5 text-white text-xs font-[200]">
                WSO owes its genesis to the realization that there was a need
                for an organized movement of partners from across the globe to
                build a healthy (content for this)
              </p>
              <button className="p-2 px-5 text-primaryColor rounded-lg font-[600] bg-white text-xs">
                Register as a Member
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-primaryColor text-white text-xs md:text-sm p-3 px-5 rounded-lg mt-5 ">
        Learn More
      </button>
    </div>
  );
};

export default AboutPart;
