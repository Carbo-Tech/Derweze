import "chart.js/auto";
import { Line, Bar, Doughnut } from 'react-chartjs-2';

export default function UsageChart({ data }: any) {
    return (
        <div style={{
             top: "50%",bottom: "50%"
        }}>
            <Line data={data} style={{ top: "50%",bottom: "50%"}} />
        </div>
    )
}

