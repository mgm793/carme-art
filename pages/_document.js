import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
	      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.png" />
	      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.png" />
	      <link rel="manifest" href="/favicon/site.webmanifest" />
        <title>Carme Mullon</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
