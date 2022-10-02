import React from "react";
import userData from "@constants/data";
import SocialElement from "./custom/SocialElement/SocialElement";

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <p>&copy; 2021-{new Date().getFullYear()} Matteo Bianchi. All Rights Reserved. </p>
            <p>VAT number: {userData.vat}{" | "}SDI: {userData.sdi}</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <a href="/privacy-policy">Privacy Policy </a>
          </div>
          <div className="flex flex-col md:flex-row">
          <a href="/cookie-policy">Cookie Policy</a>
          </div>
          {/*Social Element*/}
          <SocialElement twitter="true" linkedin="true" />
        </div>
      </div>
    </div>
  );
}
