import Link from 'next/link'

export default function LinkMio({children,...pageProps}:any) {
   return (
      <>

         <Link href={pageProps.href} className='linkTutorial'>
            <h1 style={{
               textDecoration: 'underline',
               color: '#0645AD',
               fontSize: 30
            }}>{children}</h1></Link>

      </>
   )
}