import "@styles/globals.css";
import { ThemeProvider } from "next-themes";
import Script from 'next/script'
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import MBCookies from "@components/MBCookies";
import CustomError from '@components/CustomError'
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

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`} 
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }} 
      />
      <ThemeProvider defaultTheme="dark" attribute="class">
        <main className="dark:bg-gray-800 w-full">
          <Navbar />
          <CustomError>
            <Component {...pageProps} />
          </CustomError>
          <MBCookies />
          <Footer />
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
