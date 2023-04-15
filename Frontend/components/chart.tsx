import "chart.js/auto";
import { Line, Bar, Doughnut } from 'react-chartjs-2';

export default function Chart({ thicknessP, radius, data, text }:any) {
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
            ctx.fillText(`€${data.datasets[0].data.reduce((acc: number, curr: number) => acc + curr, 0)}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    }
    return (
        <div style={{ width: '400px', height: '400px' }}>
            <Doughnut  data={data} options={doughnutOptions} plugins={[thickness, textCenter]} />
        </div>
    )
}

