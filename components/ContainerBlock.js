import React from "react";
import userData from "@constants/data";
import { useRouter } from "next/router";
import Head  from "next/head";
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
      ga.reportWebVitalsToGoogle(metric.id, metric.name, metric.label, metric.value); // send to Google Analytics
      break
  }
}

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const processEnvGA = "G-B11MCGL84K";
  const processEnvGASource = "https://www.googletagmanager.com/gtag/js?id="+processEnvGA;

  const meta = {
    title: "Matteo Bianchi - DevOps | SRE | Coach | Developer",
    description: `Learn more about me and my services.`,
    image: "/images/propic.webp",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="keywords" content="DevOps, SRE, CTO, Software Engineer, Coach, Courses" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://${userData.domain}/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://${userData.domain}/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Matteo Bianchi" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mbianchidev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date ? (
          <meta property="article:published_time" content={meta.date} />
        ): null}
      </Head>
      <Script
          strategy="afterInteractive"
          src={`${processEnvGASource}`}
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
        <div>{children}</div>
    </div>
  );
}
