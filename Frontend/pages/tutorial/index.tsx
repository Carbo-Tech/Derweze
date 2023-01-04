import Head from 'next/head'
import { Inter } from '@next/font/google'
import LinkMio from './linkMio'
const inter = Inter({ subsets: ['latin'] })

export default function Tutorial() {
    return (
        <>
            <Head>
                <title>Benvenuto su Next.js!</title>
            </Head>
            <main>
                <div className={inter.className}>Benvenuto su Next.js!</div>
 
            <LinkMio href="/tutorial/pagina/">Torna alla Home</LinkMio>

            </main>
        </>
    )
}