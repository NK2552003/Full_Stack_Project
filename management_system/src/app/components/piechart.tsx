"use client"; 

import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

import Image from 'next/image';
const data = [
    {
        name: 'Total',
        count:1768,
        fill: 'white',
      },
    {
      name: 'Girls',
      count:534,
      fill: '#FAE27C',
    },
    {
        name: 'Boys',
        count:1234,
        fill: '#D9E7F4',
      },
  ];

const CountChart = () =>{
    return (
<<<<<<< HEAD
        <div className="bg-white rounded-xl w-full h-full p-4 ">
=======
        <div className="bg-white rounded-xl w-full h-full p-4 border-[0.5px] border-black">
>>>>>>> 799c836 (new change)
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Student</h1>
                <Image src="/more.png" alt="" width={20} height={20} />
            </div>
            {/* CHART */}
            <div className="w-full h-[75%]">
            <Image src="/male-female.png" alt='' width={60} height={60} className='absolute top-[200px] left-1/2 -translate-x-1/2 -translate-y-1/2'/>
            <ResponsiveContainer >
                <RadialBarChart cx="50%" cy="50%" innerRadius="45%" outerRadius="100%" barSize={32} data={data}>
                <RadialBar
                    background
                    dataKey="count"
                />
                </RadialBarChart>
            </ResponsiveContainer>

            </div>
            {/* BOTTOM */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1  ">
                    <div className="w-5 h-5 rounded-full bg-cardlightDarkPurple"/>
                    <h1 className="font-bold">1,234</h1>
                    <h2 className="text-xs text-gray-400 ">Boys(55%)</h2>
                </div>
                <div className="flex flex-col gap-1  ">
                    <div className="w-5 h-5 rounded-full bg-cardYellow"/>
                    <h1 className="font-bold">534</h1>
                    <h2 className="text-xs text-gray-400 ">Girls(34%)</h2>
                </div>
            </div>
        </div>
    );
}

export default CountChart