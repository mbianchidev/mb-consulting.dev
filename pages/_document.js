import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* DNS Prefetch for external resources */}
          <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
          <link rel="dns-prefetch" href="https://api.github.com" />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}