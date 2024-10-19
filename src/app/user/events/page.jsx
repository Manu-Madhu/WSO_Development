'use client'
import EventCard from "@/components/User/events/EventCard";
import { baseUrl, getAllEvents } from "@/utils/Endpoint";
import { useEffect, useState } from "react";

const Events = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(`${baseUrl}${getAllEvents}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await res.json();
      setData(jsonData?.event || []);
    } catch (error) {
      console.log("error: " + error);
    }
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div
      className="max-w-[1280px] mx-auto w-full p-3 flex flex-col items-center justify-center 
    my-5 mb-10 md:mb-20 gap-8"
    >
      <h1 className="text-[#101828] font-bold text-2xl self-start">
        Events and Meetings
      </h1>

      <div className="w-full flex flex-wrap gap-4">
        {data.length > 0 ? (
          data.map((item, i) => (
            <EventCard key={i} data={item} />
          ))
        ) : (
          <p>No events available</p>
        )}
      </div>
    </div>
  );
};

export default Events;
