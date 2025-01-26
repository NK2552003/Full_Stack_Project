import AttendanceChart from "@/app/components/AttendanceChart";
import FinanceComponent from "@/app/components/financeComponent";
import CountChart from "@/app/components/piechart";
import UserCard from "@/app/components/usercard";

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* LEFT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {/* USERCARDS */}

                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="student"/>
                    <UserCard type="teacher"/>
                    <UserCard type="parent"/>
                    <UserCard type="staff"/>
                </div>
                {/* MIDDLE CHARTS */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* COUNT CHART */}
                    <div className="relative  w-full lg:w-1/3 h-[450px] ">
                        <CountChart/>
                    </div>
                    {/* ATTENDANCE CHART */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AttendanceChart/>
                    </div>
                </div>
                {/* BOTTOM CHARTS */}
                <div className="w-full h-[500px]">
                    <FinanceComponent/>
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-full lg:w-1/3">
                RIGHT
            </div>
        </div>
    );
}

export default AdminPage