import NewsContent from "@/components/User/News/NewsContent";
import React from "react";

const NewsPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto w-full p-3 flex flex-col items-center justify-center my-5 mb-10 md:mb-20">
      <h1 className="text-[#101828] font-bold text-xl">News</h1>
      <div className="my-10">
        <NewsContent />
      </div>
      <div className="text-center w-full md:w-2/3 my-10 text-xs md:text-sm">
        <p>
          WSO owes its genesis to the realisation that there was a need for an
          organised movement of partners from across the globe to build a
          healthy and responsible future for the spice industry. To celebrate
          its success and face the challenges. And to smoothen out the rough
          patches Together.
        </p>
        <p className="mt-5">
          WSO seeks to identify areas of potential growth, ensure proper
          allocation of resources, interact with the academia, engage with the
          governments on legislations and stand by and help the farmer to
          increase production and productivity through eco-friendly methods.
        </p>
      </div>
    </div>
  );
};

export default NewsPage;
