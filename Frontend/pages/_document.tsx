import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head  >
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
          zIndex: 0;
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
