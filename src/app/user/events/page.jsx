import EventCard from "@/components/User/events/EventCard";
import { baseUrl, getAllEvents } from "@/utils/Endpoint";

async function getData() {
  try {
    const res = await fetch(`${baseUrl}${getAllEvents}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data?.event;
  } catch (error) {
    console.log("error" + error);
  }
}

const Events = async () => {
  const data = await getData();

  return (
    <div
      className="max-w-[1280px] mx-auto w-full p-3 flex flex-col items-center justify-center 
    my-5 mb-10 md:mb-20 gap-8"
    >
      <h1 className=" text-[#101828] font-bold text-2xl self-start ">
        Events and Meetings
      </h1>

      <div className="w-full flex flex-wrap  gap-4 ">
        {data?.map((item, i) => (
          <EventCard key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Events;
