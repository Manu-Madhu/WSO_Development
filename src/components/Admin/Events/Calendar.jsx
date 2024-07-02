"use client";

import {
  add,
  differenceInDays,
  endOfMinute,
  endOfMonth,
  startOfMonth,
  sub,
} from "date-fns";
import { useState } from "react";
import CalendarCell from "./CalendarCell";

const dayOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function Calendar() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const eventdata = {
    1: [
      "New Year",
      "Holiday",
      "New Year",
      "Holiday",
      "New Year",
      "Holiday",
      "New Year",
      "Holiday",
    ],
    26: ["Republic Day"],
  };
  let startDate = startOfMonth(selectedDate);
  let endDate = endOfMonth(selectedDate);
  let prefixDays = startDate.getDay();
  let nextMonthDays = 6 - endDate.getDay();
  let numDays = differenceInDays(endDate, startDate) + 1;
  let prevMonthDays =
    differenceInDays(startDate, startOfMonth(sub(startDate, { months: 1 }))) -
    1;
  const prevMonth = () => {
    setSelectedDate(sub(selectedDate, { months: 1 }));
  };
  const nextMonth = () => {
    setSelectedDate(add(selectedDate, { months: 1 }));
  };
  return (
    <div className="border rounded-xl border-gray-400 flex max-lg:flex-col justify-between">
      <div className="p-6 font-semibold felx flex-col items-center">
        <h2>
          {months[selectedDate.getMonth()] + " " + selectedDate.getFullYear()}
        </h2>
        <button
          onClick={prevMonth}
          className="bg-primary-green text-white px-4 py-1 rounded-lg mt-2"
        >
          Prev
        </button>
        <button
          className="bg-primary-green text-white px-4 py-1 rounded-lg mt-2 ml-2"
          onClick={nextMonth}
        >
          Next
        </button>
      </div>
      <div className="max-sm:p-3">
        <div className="grid grid-cols-7 m-6  max-sm:m-0  w-fit  max-sm:w-full border-r">
          {dayOfTheWeek.map((day, index) => (
            <div
              key={index}
              className="border-l border-b text-sm font-medium text-gray-500 w-[6.5rem] max-sm:w-full py-2 flex justify-center"
            >
              <h4>{day}</h4>
            </div>
          ))}
          {Array.from({ length: prefixDays }).map((_, index) =>
            index === 0 ? (
              <CalendarCell
                current={false}
                date={prevMonthDays - (prefixDays - 1 - index)}
                key={index}
                monthname={months[selectedDate.getMonth() - 1]}
              />
            ) : (
              <CalendarCell
                current={false}
                date={prevMonthDays - (prefixDays - 1 - index)}
                key={index}
              />
            )
          )}
          {Array.from({ length: numDays }).map((_, index) =>
            index === 0 ? (
              <CalendarCell
                current={true}
                isToday={
                  today.getDate() === index + 1 &&
                  today.getFullYear() === selectedDate.getFullYear() &&
                  today.getMonth() === selectedDate.getMonth()
                }
                date={index}
                events={eventdata[`${index + 1}`]}
                key={index}
                monthname={months[selectedDate.getMonth()]}
                year={selectedDate.getFullYear()}
                monthNo={selectedDate.getMonth()}
              />
            ) : (
              <CalendarCell
                isToday={
                  today.getDate() === index + 1 &&
                  today.getFullYear() === selectedDate.getFullYear() &&
                  today.getMonth() === selectedDate.getMonth()
                }
                date={index}
                events={eventdata[`${index + 1}`]}
                key={index}
                year={selectedDate.getFullYear()}
                monthNo={selectedDate.getMonth()}
              />
            )
          )}
          {Array.from({ length: nextMonthDays }).map((_, index) =>
            index === 0 ? (
              <CalendarCell
                current={false}
                date={0}
                key={index}
                monthname={months[selectedDate.getMonth() + 1]}
              />
            ) : (
              <CalendarCell current={false} date={index} key={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
