import Image from "next/image";

const UserCard = ({type}:{type:string}) =>{
    return (
<<<<<<< HEAD
        <div className="rounded-2xl odd:bg-cardlightDarkPurple even:bg-cardBlue p-4 flex-1 min-w-[130px]">
            <div className="flex justify-between item-center">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-gray-700">2024/25</span>
=======
        <div className="rounded-2xl odd:bg-cardlightDarkPurple even:bg-cardBlue p-4 flex-1 min-w-[130px] border-[0.5px] border-black">
            <div className="flex justify-between item-center">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-gray-700 border-[0.5px] border-black">2024/25</span>
>>>>>>> 799c836 (new change)
                <Image src="/more.png" width={20} height={20} alt=""/> 
            </div>
            <h1 className="text-2xl font-semibold my-4 ">1,234</h1>
            <h2 className="text-sm capitalize font-medium text-gray-500">{type}s</h2>
        </div>
    );
}

export default UserCard