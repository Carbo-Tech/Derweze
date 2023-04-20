import "chart.js/auto";
import { Line, Bar, Doughnut } from 'react-chartjs-2';

export default function Chart({ thicknessP, radius, data, text, unit, total }: any) {
    const thickness = {
        id: "thickness",
        beforeDraw: function (chart, options) {
            let thickness = chart.options.plugins.thickness.thickness;
            let radius = chart.options.plugins.thickness.radius;
            chart.getDatasetMeta(0).data.forEach((item, index) => {
                item.outerRadius = radius + thickness;
                item.innerRadius = radius;
            });
        }
    };


    const doughnutOptions = {
        responsive: true,

        plugins: {

            title: {
                display: true,
                text: text,
                font: {
                    size: 24, // set font size
                },
                color: '#FFFFFF'
            },
            legend: {
                display: false,

            },

            thickness: {
                thickness: thicknessP,
                radius: radius,
            }
        }

    }
    const textCenter = {
        id: "textCenter",
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data } = chart;
            ctx.save();
            ctx.fillStyle = "white"
            ctx.font = "bold 19px sans-serif";
            ctx.textAlign = "center"
            ctx.textBaseAlign = "middle"
            const x = chart.getDatasetMeta(0).data[0].x;
            const y1 = chart.getDatasetMeta(0).data[0].y;
            const y2 = y1 + 25; // add some vertical spacing
            ctx.fillText(`€${data.datasets[0].data.reduce((acc: number, curr: number) => acc + curr, 0)}`, x, y1)
        }
    }
    console.log("datapassedtochart",data)
    return (
        <div style={{ width: '400px', height: '400px' }}>
            <Doughnut data={data} options={doughnutOptions} plugins={[thickness, textCenter]} />
            <div style={{ textAlign: "center" }}>
                <p style={{ textAlign: "center" }}>{total}{unit}</p>
            </div>
        </div>
    )
}

