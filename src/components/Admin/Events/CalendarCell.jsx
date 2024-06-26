import React from 'react'

function CalendarCell({ date, events = [], current = true, montname, isToday=false }) {
    return (
        <div key={date} className="border-l border-b text-sm h-[6.5rem] relative flex flex-col items-end p-2">
            {
                montname && <h4 className={`absolute left-2 text-xs ${current ? 'text-black' : 'text-gray-400'}`}>{montname}</h4>
            }
            <h4 className={`${current ? '' : 'text-gray-400'}`}>{date + 1}</h4>
            <div className="h-fit overflow-hidden">
                {
                    events.map((event, index) => (
                        <p key={index} className="line-clamp-1 w-[5.5rem]">{event}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default CalendarCell
