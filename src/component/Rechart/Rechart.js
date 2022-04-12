import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Rechart = () => {
    const data = [
        {
            name: 'page a',
            price: 1000,
            shiping: 50,
            tex: 10.
        },
        {
            name: 'page b',
            price: 2000,
            shiping: 70,
            tex: 20.
        },
        {
            name: 'page c',
            price: 12000,
            shiping: 150,
            tex: 50.
        },
        {
            name: 'page b',
            price: 16000,
            shiping: 50,
            tex: 30.
        }
    ]
    return (
        <div>
            <h2>Rechart</h2>
            <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <Line dataKey={'price'}></Line>
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    );
};

export default Rechart;