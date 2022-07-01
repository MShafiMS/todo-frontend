import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendaar.css";
import "react-calendar/dist/Calendar.css";

const Calendaar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="min-h-screen bg-base-200">
      <h1 className="text-center text-5xl pt-8 font-semibold">Calendar</h1>
      <div className="calendar-container flex justify-center my-10">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="text-center">
        <span className="font-bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
};

export default Calendaar;
