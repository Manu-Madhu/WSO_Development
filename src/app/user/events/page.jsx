import EventCard from '@/components/User/events/EventCard'
import { baseUrl, getAllEvents } from '@/utils/Endpoint'
import axios from 'axios'
async function getData() {
    console.log("get data")
    try {
        const res = await fetch(`${baseUrl}${getAllEvents}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json()
        console.log(data)
        return data.events
    } catch (error) {
        console.log("error" + error)
    }
}
const Events = async () => {
    const data = await getData()

    return (
        <div className="max-w-[1280px] mx-auto w-full p-3 flex flex-col items-center justify-center 
    my-5 mb-10 md:mb-20 gap-8">
        <h1 className=" text-[#101828] font-bold text-2xl self-start ">Events and Meetings</h1>

            <div className='w-full flex flex-wrap justify-around gap-4 '>
                {
                    data?.map((item, i) => (
                        <EventCard key={i} name={item.title} description={item.description} date={item.date} />
                    ))
                }
            </div>

        </div>
    )
}

export default Events