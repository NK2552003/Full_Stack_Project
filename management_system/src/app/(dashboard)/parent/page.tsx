import Announcements from "@/app/components/Announcements";
import BigCalendar from "@/app/components/calender";
// import EventCalendar from "@/app/components/EventCalender";

const ParentPage = () => {
    return (
        <div className="flex-1 p-4 flex gap-4 flex-col md:flex-row">
        {/* LEFT */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8 mt-16">
            <div className="h-full bg-white p-4 rounded-xl border-[0.5px] border-black">
                <h1 className="text-xl font-semibold">Schedule (Nitish Kumar) </h1>
                <BigCalendar/>
            </div>
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
            {/* <EventCalendar /> */}
            <Announcements />
        </div>
    </div>
    );
}

export default ParentPage