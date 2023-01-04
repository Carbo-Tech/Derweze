import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
const inter = Inter({ subsets: ['latin'] })
const getCoinsApi = async (crypto: string) => {
    try {

        const res = await fetch(
            "https://api.coingecko.com/api/v3/coins/" + crypto + "/market_chart?vs_currency=eur&days=1",
            {
                method: 'GET'
            }
        );
        var data = await res.json();
        data=data["prices"].map(a => a[1]);
        console.log(data)
        return data
    } catch (err) {
        console.log(err);
    }
};
export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
export default function Api() {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
    );
    const data = {
        labes: ["s","a","3","4","5"],
        datasets: [{
            label: 'Dataset 1',
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [1,2,3,4,5]//getCoinsApi("bitcoin")
        }]
    }
    return (
        <>
            <Head>
                <title>Tutorial Next App API</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>


                <div className={styles.center}>
                    <Line
                        options={options}
                        data={data}
                        width={400}
                        height={200}

                    />
                </div>

                <div className={styles.grid}>
                    <a
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2 className={inter.className}>
                            Docs <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Find in-depth information about Next.js features and&nbsp;API.
                        </p>
                    </a>

                    <a
                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Learn <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Learn about Next.js in an interactive course with&nbsp;quizzes!
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Templates <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Discover and deploy boilerplate example Next.js&nbsp;projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Deploy <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Instantly deploy your Next.js site to a shareable URL
                            with&nbsp;Vercel.
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}
