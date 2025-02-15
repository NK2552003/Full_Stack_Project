import Pagination from "@/app/components/pagination";
import Table from "@/app/components/Table";
import TableSearchComp from "@/app/components/tableSearch"
import Image from 'next/image';

const TeacherListPage = () => {
    return (
        <div className="mt-20 bg-white p-4 rounded-xl flex-1 m-4 border-[0.5px] border-black">
            {/* Teachers List */}
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearchComp />
                <div className="flex items-center gap-2 self-end ">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-cardBlue border-[0.5px] border-black">
                        <Image src="/filter.png" alt="" width={14} height={14}/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-cardBlue border-[0.5px] border-black">
                        <Image src="/sort.png" alt="" width={14} height={14}/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-cardBlue border-[0.5px] border-black">
                        <Image src="/plus.png" alt="" width={14} height={14}/>
                    </button>
                </div>
                </div>
            </div>
            {/* MID */}
            <Table/>
            {/* BOTTOM */}
                <Pagination />
        </div>
    )
}

export default TeacherListPage