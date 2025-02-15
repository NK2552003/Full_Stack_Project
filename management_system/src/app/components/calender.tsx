"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: string) => {
    setView(selectedView as View);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={[Views.WORK_WEEK, Views.DAY]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2026,1,0,9,30,0)}
      max={new Date(2026,1,0,17,30,0)}
    />
  );
};

export default BigCalendar;
