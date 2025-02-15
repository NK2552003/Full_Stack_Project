<<<<<<< HEAD
import AttendanceChart from "@/app/components/AttendanceChart";
=======
import Announcements from "@/app/components/Announcements";
import AttendanceChart from "@/app/components/AttendanceChart";
import EventCalendar from "@/app/components/EventCalender";
>>>>>>> 799c836 (new change)
import FinanceComponent from "@/app/components/financeComponent";
import CountChart from "@/app/components/piechart";
import UserCard from "@/app/components/usercard";

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* LEFT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {/* USERCARDS */}

<<<<<<< HEAD
                <div className="flex gap-4 justify-between flex-wrap">
=======
                <div className="flex gap-4 justify-between flex-wrap mt-16">
>>>>>>> 799c836 (new change)
                    <UserCard type="student"/>
                    <UserCard type="teacher"/>
                    <UserCard type="parent"/>
                    <UserCard type="staff"/>
                </div>
                {/* MIDDLE CHARTS */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* COUNT CHART */}
<<<<<<< HEAD
                    <div className="relative  w-full lg:w-1/3 h-[450px] ">
                        <CountChart/>
                    </div>
                    {/* ATTENDANCE CHART */}
                    <div className="w-full lg:w-2/3 h-[450px]">
=======
                    <div className="relative  w-full lg:w-1/3 h-[450px]">
                        <CountChart/>
                    </div>
                    {/* ATTENDANCE CHART */}
                    <div className="w-full lg:w-2/3 h-[350px] lg:h-[450px]">
>>>>>>> 799c836 (new change)
                        <AttendanceChart/>
                    </div>
                </div>
                {/* BOTTOM CHARTS */}
<<<<<<< HEAD
                <div className="w-full h-[500px]">
=======
                <div className="w-full h-[350px] lg:h-[500px]">
>>>>>>> 799c836 (new change)
                    <FinanceComponent/>
                </div>
            </div>
            {/* RIGHT */}
<<<<<<< HEAD
            <div className="w-full lg:w-1/3">
                RIGHT
=======
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalendar />
                <Announcements />
>>>>>>> 799c836 (new change)
            </div>
        </div>
    );
}

export default AdminPage