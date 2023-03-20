import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head  >
        <style>
          @import url(&apos;https://fonts.googleapis.com/css2?family=Inter&display=swap&apos;);
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
