<<<<<<< HEAD
"use client"
const EventCalendar = () => {
    return (
        <div className=""></div>
=======
"use client";
import {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
    {
        id:1,
        title: "This consist of the title",
        time:"12:00 PM - 2:00 PM",
        description:"This consist of the description fo the event that will be happening on the specific date"
    },
    {
        id:2,
        title: "This consist of the title",
        time:"12:00 PM - 2:00 PM",
        description:"This consist of the description fo the event that will be happening on the specific date"
    },
    {
        id:3,
        title: "This consist of the title",
        time:"12:00 PM - 2:00 PM",
        description:"This consist of the description fo the event that will be happening on the specific date"
    },
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className="bg-white p-4 rounded-xl border-[0.5px] border-black lg:mt-16 md:mt-16 sm:mt-4">
            <Calendar onChange={onChange} value={value} />
            <div className="flex justify-between items-center py-4">
                <h1 className="text-lg font-semibold">Events</h1>
                <Image src="/more.png" alt="" width={20} height={20} />
            </div>
            <div className="flex flex-col gap-4">
                {events.map(event=>(
                    <div className="p-5 rounded-lg border-[1px] border-t-4 odd:border-t-cardlightDarkPurple even:border-t-cardYellow" key={event.id}>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">{event.title}</h1>
                            <span className="font-semibold text-xs text-gray-400">{event.time}</span>
                        </div>
                        <p className="mt-2 text-gray-500 text-sm">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
>>>>>>> 799c836 (new change)
    )
}

export default EventCalendar