import "chart.js/auto";
import { Line, Bar, Doughnut } from 'react-chartjs-2';

export default function UsageChart({ data, options }: any) {

    options = ({...{
        scales: {
            x: {
                ticks: {
                    display: false
                }
            }
        }

    },...options})

    return (
        <div style={{
            top: "50%", bottom: "50%"
        }}>
            <Line data={data} options={options} style={{ top: "50%", bottom: "50%" }} />
        </div>
    )
}

