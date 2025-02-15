import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import Menu from "../components/menu";
import NavBar from "../components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] overflow-y-scroll border-r-[0.5px] border-black">
        <Link href="/ " className="flex items-center justify-center gap-2 lg:justify-start p-4">
          <Image src="/logo.png" alt="" width={32} height={32}/>
          <span className="hidden lg:block font-bold"> TulaConnect</span>
        </Link>
        <Menu/>
      </div>
      {/* RIGHT */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-scroll">
=======
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-scroll ">
>>>>>>> 799c836 (new change)
=======
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-scroll flex flex-col">
>>>>>>> c2b8db5 (New Updates)
        <NavBar/>
        {children}
      </div>
    </div>
  );
}
