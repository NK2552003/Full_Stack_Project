import Link from "next/link";
import Image from "next/image";
import { role } from "../lib/data";

const menuItems = [
  {
    title:"MENU",
    items:[
        {
            icon:"/home.png",
            label:"Home",
            href:"/",
            visible: ["admin","teacher","parent","student"]
        },
        {
            icon:"/teacher.png",
            label:"Teachers",
            href:"/list/teachers",
            visible: ["admin"]
        },
        {
            icon:"/student.png",
            label:"Students",
            href:"/students",
            visible: ["admin","teacher"]
        },
        {
            icon:"/parent.png",
            label:"Parents",
            href:"/parent",
            visible: ["admin","teacher"]
        },
        {
            icon:"/classes.png",
            label:"Classes",
            href:"/classes",
            visible: ["admin","teacher","student","parent"]
        },
        {
            icon:"/lessons.png",
            label:"Lessons",
            href:"/lessons",
            visible: ["admin","teacher","student"]
        },
        {
            icon:"/exams.png",
            label:"Exams",
            href:"/exams",
            visible: ["admin","teacher","student","parent"]
        },
        {
            icon:"/assignment.png",
            label:"Assignments",
            href:"/assignments",
            visible: ["admin", "teacher","student"]
        },
        {
            icon:"/attendance.png",
            label:"Attendance",
            href:"/attendance",
            visible: ["admin","teacher","student","parent"]
        },
        {
            icon:"/event.png",
            label:"Events",
            href:"/events",
            visible: ["admin","teacher","student","parent"]
        },
        {
            icon:"/message.png",
            label:"Messages",
            href:"/messages",
            visible: ["admin","teacher","student","parent"]
        },
        {
            icon:"/announcement.png",
            label:"Announcements",
            href:"/announcements",
            visible: ["admin","teacher","student","parent"]
        },
    ],
  },
  {
    title:"OTHER",
    items:[
        {
            icon:"/user.png",
            label:"Profile",
            href:"/profile",
            visible: ["admin","teacher","student","parent"]
        },
        {
            icon:"/settings.png",
            label:"Setting",
            href:"/setting",
            visible: ["admin","teacher","student","parent"]
        },
        {
            icon:"/exit.png",
            label:"Logout",
            href:"/logout",
            visible: ["admin","teacher","student","parent"]
        },
    ],
  }
];

const Menu = () => {
    return (
        <div className="mt-1 text-sm lg:pl-4 ">
            {
                menuItems.map((i) =>(
                    <div className="flex flex-col gap-2" key={i.title}>
                        <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
                        {
                            i.items.map((item) => {
                                if(item.visible.includes(role)){
                                    return (
                                        <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 px-2 rounded-md hover:bg-cardBlue lg:mr-4 ">
                                            <Image src=
                                            {item.icon} width={20} height={20} alt=""/>
                                            <span className="hidden lg:block">{item.label}</span>
                                        </Link>
                                    )
                                }
                            })
                        }
                    </div>
                ))
            }
            <footer className="pt-10 pb-5 pr-5 hidden lg:block">
                <hr />
            </footer>
        </div>
    )
}

export default Menu