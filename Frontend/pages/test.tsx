import React from 'react';
import { faker } from '@faker-js/faker';
import { useState } from "react";
const getCoinsApi: any = async (crypto: string, setData: any) => {
    try {

        const res = await fetch(
            "https://api.coingecko.com/api/v3/coins/" + crypto + "/market_chart?vs_currency=eur&days=1",
            {
                method: 'GET'
            }
        );
        var data = await res.json();
        setData(data["prices"])

        return data["prices"];
        //console.log(data)

    } catch (err) {
        console.log(err);
    }
};
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {

        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const dataL = (dataL: any[]) => {
    return {
        labels: dataL.map(a => {
            const d = new Date(a[0])
            return d.getHours() + ":" + d.getMinutes();
        }),
        datasets: [
            {
                label: 'bitcoin',
                data: dataL.map(a => a[1]),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },

        ],
    };
}

export default function App() {
    const [data, setData] = useState([0]);


    getCoinsApi("bitcoin", setData);
    console.log(data)

    return <div width={400} height={200}><Line options={options} data={dataL(data)}  /></div>;
}
