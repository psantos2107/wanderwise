"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function DateRangePicker({ range, setRange }) {
  const handleSelect = (range) => {
    setRange(range);
  };

  return (
    <DayPicker
      className="pt-2"
      mode="range" //type of input
      min={2} //earliest date can be selected
      max={730} //latest date that can be selected (number = num days)
      fromMonth={new Date()} //starting which month
      fromDate={new Date()} //starting which day
      toYear={new Date().getFullYear() + 2} //how many years you can choose from
      captionLayout="dropdown" //what kind of menu
      numberOfMonths={1} //how many month calendars to display
      onSelect={handleSelect}
      selected={range}
    />
  );
}

export default DateRangePicker;
