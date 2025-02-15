const announcements = [
    {
        id:1,
        title: "This consist title",
        date:"2025-01-01",
        description:"This consist of the description fo the event that will be happening on the specific date"
    },
    {
        id:2,
        title: "This consist title",
        date:"2025-01-01",
        description:"This consist of the description fo the event that will be happening on the specific date"
    },
    {
        id:3,
        title: "This consist title",
        date:"2025-01-01",
        description:"This consist of the description fo the event that will be happening on the specific date"
    },
];
const Announcements = () =>{
    return (
        <div className="bg-white rounded-xl p-4 h-full border-[0.5px] border-black">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Announcements</h1>
                <span className="text-sm font-thin text-gray-400 cursor-pointer ">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-4">
                {announcements.map(announcement=>(
                    <div className="p-5 rounded-lg border-[1px] odd:bg-slate-100 even:bg-cardBlue" key={announcement.id}>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">{announcement.title}</h1>
                            <span className="font-semibold text-xs text-gray-400 bg-white px-2 py-1 rounded-md border-[0.5px] border-black">{announcement.date}</span>
                        </div>
                        <p className="mt-2 text-gray-500 text-sm">{announcement.description}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default Announcements