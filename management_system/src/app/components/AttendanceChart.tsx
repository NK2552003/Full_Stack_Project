"use client";
import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
const data = [
    {
      name: 'Mon',
      present: 600,
      absent: 700,
    },
    {
      name: 'Tue',
      present: 300,
      absent: 898,
    },
    {
      name: 'Wed',
      present: 200,
      absent: 980,
    },
    {
      name: 'Thur',
      present: 780,
      absent: 908,

    },
    {
      name: 'Fri',
      present: 890,
      absent: 400,
    },
    {
      name: 'Sat',
      present: 390,
      absent: 800,
    }
  ];
  

const AttendanceChart = () => {
    return(
<<<<<<< HEAD
        <div className="bg-white rounded-lg p-4 h-full">
=======
        <div className="bg-white rounded-xl p-4 h-full border-[0.5px] border-black ">
>>>>>>> 799c836 (new change)
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Attendance</h1>
                <Image src="/more.png" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                width={500}
                height={300}
                data={data}
                barSize={20}
                >
                <CartesianGrid strokeDasharray="3 3" vertical={false} color='#ddd' />
                <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
                <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgrey"}} />
                <Legend align="left" verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}/>
<<<<<<< HEAD
                <Bar dataKey="present" fill="#FAE27C" activeBar={<Rectangle fill="pink" stroke="blue" />} legendType='circle' radius={[10,10,0,0]}/>
                <Bar dataKey="absent" fill="#D9E7F4" activeBar={<Rectangle fill="gold" stroke="purple" />} legendType='circle' radius={[10,10,0,0]}/>
=======
                <Bar dataKey="present" fill="#FAE27C"  legendType='circle' radius={[10,10,0,0]}/>
                <Bar dataKey="absent" fill="#D9E7F4"  legendType='circle' radius={[10,10,0,0]}/>
>>>>>>> 799c836 (new change)
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AttendanceChart