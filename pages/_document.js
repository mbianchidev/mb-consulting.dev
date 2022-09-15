import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import * as ga from "@lib/ga";

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP':
      // handle FCP results
      break
    case 'LCP':
      // handle LCP results
      break
    case 'CLS':
      // handle CLS results
      break
    case 'FID':
      // handle FID results
      break
    case 'TTFB':
      // handle TTFB results
      break
    case 'INP':
      // handle INP results (note: INP is still an experimental metric)
      break
    case 'Next.js-hydration':
      // handle hydration results
      break
    case 'Next.js-route-change-to-render':
      // handle route-change to render results
      break
    case 'Next.js-render':
      // handle render results
      break
    default:
      console.log(metric); //TODO: remove this
      ga.reportWebVitalsToGoogle(metric.id, metric.name, metric.label, metric.value); // send to Google Analytics
      break
  }
}

export default class MyDocument extends Document {
  render() {
    const processEnvGA = process.env.GA_TRACKING_ID;
    const processEnvGASource = "https://www.googletagmanager.com/gtag/js?id="+processEnvGA;
    return (
      <Html>
        <Head />
        <Script
          strategy="afterInteractive"
          src={processEnvGASource} 
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${processEnvGA}', {
              page_path: window.location.pathname,
            });
          `
          }} 
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}