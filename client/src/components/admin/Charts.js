import React from 'react';
import { BarChart,Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart,Pie  } from 'recharts';


const data = [
  { name: "Geeksforgeeks", students: 400 },
  { name: "Technical scripter", students: 700 },
  { name: "Geek-i-knack", students: 200 },
  { name: "Geek-o-mania", students: 1000 },
];

export default function Chart() {
    return (
      <>
       <BarChart width={900} height={400} data={data}>
            <Bar dataKey="students" fill="green" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </BarChart>
       
      </>
    );
  
}