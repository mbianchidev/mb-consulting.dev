import Script from 'next/script'
import React from "react";

export default function GoogleScript() {
  const processEnvGA = "G-B11MCGL84K";
  const processEnvGASource = "https://www.googletagmanager.com/gtag/js?id="+processEnvGA;
  
  return (
    <Script
      strategy="afterInteractive"
      src={`${processEnvGASource}`}
    />
  );
}