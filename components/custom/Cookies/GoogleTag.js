import Script from 'next/script'
import React from "react";

export default function GoogleTag() {
  const processEnvGA = "G-B11MCGL84K";
  return (
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
  );
}