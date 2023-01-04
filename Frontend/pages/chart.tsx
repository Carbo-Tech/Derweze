
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const dataL = (dataL: any[], crypto: string) => {
    return {
        labels: dataL.map(a => {
            const d = new Date(a[0])
            return d.getHours() + ":" + d.getMinutes();
        }),
        datasets: [
            {
                label: crypto,
                data: dataL.map(a => a[1]),
                borderColor: 'rgb(0, 114, 245)',
                backgroundColor: 'rgb(0, 114, 245, 0.5)',
            },

        ],
    };
}

export const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {

        title: {
            display: true,
        },
    },
};

export default function Chart({ data, crypto }: any) {
    return (
    <div style={{ height: "100%", position: "relative", marginBottom: "1%", padding: "1%" }}>
        <Line options={options} data={dataL(data, crypto)} />
    </div>)

}