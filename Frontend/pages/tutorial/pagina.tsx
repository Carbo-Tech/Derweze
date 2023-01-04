import Head from 'next/head'
import Image from 'next/image'
import LinkMio from './linkMio'

export default function Pagina() {
   return (
      <>
         <Head>
            <title>pagina con immagine</title>
         </Head>
         <div>Questa e una bella pagina con unimmagine</div>
         <br />
         <Image src="/rick.png" alt="never gonna give you up" width={500} height={572}></Image>
         <br />
         <LinkMio href="/tutorial/">Torna alla Home</LinkMio>
      </>
   )
}