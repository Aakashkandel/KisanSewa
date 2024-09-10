import React from 'react';
import {  Tooltip, PieChart,Pie  } from 'recharts';

const data = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ];
const PieChartt=()=>{
    return(
        <PieChart width={700} height={700}>
        <Tooltip />
        <Pie
            data={data}
            dataKey="students"
            outerRadius={250}
            innerRadius={150}
            fill="green"
            label={({ name, students }) =>
                `${name}: ${students}`
            }
        />
    </PieChart>
    )
}

export default PieChartt;