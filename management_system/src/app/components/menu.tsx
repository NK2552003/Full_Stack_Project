import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title:"MENU",
    items:[
        {
            icon:"/home.png",
            label:"Home",
            href:"/"
        },
        {
            icon:"/teacher.png",
            label:"Teachers",
            href:"/teachers"
        },
        {
            icon:"/student.png",
            label:"Students",
            href:"/students"
        },
        {
            icon:"/parent.png",
            label:"Parents",
            href:"/parent"
        },
        {
            icon:"/classes.png",
            label:"Classes",
            href:"/classes"
        },
        {
            icon:"/lessons.png",
            label:"Lessons",
            href:"/lessons"
        },
        {
            icon:"/exams.png",
            label:"Exams",
            href:"/exams"
        },
        {
            icon:"/assignment.png",
            label:"Assignments",
            href:"/assignments"
        },
        {
            icon:"/attendance.png",
            label:"Attendance",
            href:"/attendance"
        },
        {
            icon:"/event.png",
            label:"Events",
            href:"/events"
        },
        {
            icon:"/message.png",
            label:"Messages",
            href:"/messages"
        },
        {
            icon:"/announcement.png",
            label:"Announcements",
            href:"/announcements"
        },
    ],
  },
  {
    title:"OTHER",
    items:[
        {
            icon:"/user.png",
            label:"Profile",
            href:"/profile"
        },
        {
            icon:"/settings.png",
            label:"Setting",
            href:"/setting"
        },
        {
            icon:"/exit.png",
            label:"Logout",
            href:"/logout"
        },
    ],
  }
];

const Menu = () => {
    return (
        <div className="mt-1 text-sm lg:pl-4">
            {
                menuItems.map((i) =>(
                    <div className="flex flex-col gap-2" key={i.title}>
                        <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
                        {
                            i.items.map((item) => (
                                <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2">
                                    <Image src={item.icon} width={20} height={20} alt=""/>
                                    <span className="hidden lg:block">{item.label}</span>
                                </Link>
                            ))
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