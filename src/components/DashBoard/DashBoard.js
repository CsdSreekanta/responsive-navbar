import React from 'react';
import { LineChart, Line, XAxis, YAxis,Tooltip,CartesianGrid} from 'recharts';


const DashBoard = () => {
    const data = [
        {
          name: 'Counseling A',
          totalClient: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Counseling B',
          totalClient: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Counseling C',
          totalClient: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Counseling D',
          totalClient: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Counseling E',
          totalClient: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Counseling F',
          totalClient: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Counseling G',
          totalClient: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      
    return (
        <div>
            <h1>This is my dashboard</h1>
            <LineChart width={800} height={500} data={data}>
                <Line type="monotone" dataKey="totalClient"></Line>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="pv"></YAxis>
                <Tooltip />
            </LineChart>
            
        </div>
    );
};

export default DashBoard;
