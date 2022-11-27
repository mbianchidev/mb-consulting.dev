import React from "react";
import getConfig from 'next/config';
import SocialElement from "@custom/Social/SocialElement";
import Link from "next/link";

export default function Footer() {
  
  const { publicRuntimeConfig } = getConfig();
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <p>&copy; 2021-{new Date().getFullYear()} Matteo Bianchi - All Rights Reserved. </p>
            <p className="text-sm">site version - {publicRuntimeConfig?.version}</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <Link href="/privacy-policy">Privacy Policy </Link>
          </div>
          <div className="flex flex-col md:flex-row">
          <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
          {/*Social Element*/}
          <SocialElement github="true" linkedin="true" />
        </div>
      </div>
    </div>
  );
}
