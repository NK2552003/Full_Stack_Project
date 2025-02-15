import Image from 'next/image';
const navBar = () => {
     return (
<<<<<<< HEAD
        <div className="flex items-center justify-between p-4 ">
=======
        <div className="flex items-center justify-between p-4 fixed w-[84%] md:w-[92%] lg:w-[86%] z-50 bg-[#F7F8FA]">
>>>>>>> 799c836 (new change)
            {/* Search Bar  */}
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 ">
                <Image src="/search.png" alt="" width={14} height={14}/>
                <input type="text" placeholder='Search Here' className='w-[200px] p-2 bg-transparent outline-none' />
            </div>
            {/* Icons and user*/}
            <div className="flex items-center gap-3 justify-end w-full">
                <div className="bg-white rounded-full w-8 h-8 flex justify-center items-center cursor-pointer">
                    <Image src="/message.png" width={20} height={20} alt=''/>
                </div>
                <div className="bg-white rounded-full w-8 h-8 flex justify-center items-center cursor-pointer relative">
                    <Image src="/announcement.png" width={20} height={20} alt=''/>
                    <div className='absolute -top-1.5 -right-1.5 bg-purple-700 rounded-full w-4 h-4 text-white flex items-center justify-center text-xs'>1</div>
                </div>
                <div className="flex flex-col justify-center">
                    <span className='text-s leading-3 font-medium pt-1'>Nitish Kumar</span>
                    <span className='text-[12px] text-gray-500 text-right'>Student</span>
                </div>
                <Image src="/avatar.png" alt='' width={40} height={40} className='rounded-full'/>
            </div>
        </div>
     )
}
export default navBar