import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preload critical fonts */}
          <link
            rel="preload"
            href="/fonts/Inter-roman-latin.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Inter-italic-latin.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
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