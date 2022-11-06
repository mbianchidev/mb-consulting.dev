import React from "react";
import userData from "@constants/data";
import Link from "next/link";
import Image from 'next/image';
import logo from "@images/logo.webp"
import { useRouter } from "next/router";
import SocialElement from "@components/custom/Social/SocialElement";
import Dropdown from "@custom/DropdownMenu/DropdownMenu";

export default function Navbar() {
  const router = useRouter();

  // URL constants
  const servicesPath="/services";
  const servicePath="/service";
  const clientsPath="/clients";
  const aboutPath="/about";

  // Style constants
  const navbarFontSize = '30px';
  const selectedTextStyle = "text-gray-800 font-bold dark:text-gray-400 dark:hover-underline-animation";
  const unselectedTextStyle = "text-gray-600 font-normal dark:text-gray-300 dark:hover-underline-animation";
  const mobileTextStyle = "text-gray-600 font-normal dark:text-gray-300 text-base";

  return (
    <div className="max-w-8xl mx-2 px-4 py-10 md:py-20">

      <div className="flex md:flex-row justify-between items-center navbar-mb">

        {/* Logo + Name */}
        <Link href="/" passHref>
          <div className="flex flex-col md:flex-row items-center">
            <Image src={logo} alt="mb-consulting logo an infinite symbol turned into a cloud" width={156} height={104} priority quality="100" />
            <div className="flex flex-col navbar__logo-name-role">
              <h1 className="font-semibold text-x1 dark:text-gray-100" style={{fontSize: '50px'}}>
                {userData.name}
              </h1>
              <p className="text-base font-light text-gray-500 dark:text-gray-300" style={{fontSize: '20px'}}>
                {userData.role}
              </p>
            </div>
          </div>
        </Link>

        {/* Navbar sections */}
        <div className="space-x-8 hidden md:block -mr-50 mt-30">

          {/*About*/}
          <Link href={aboutPath} passHref
          className={`text-base ${
            router.asPath === aboutPath ? selectedTextStyle : unselectedTextStyle
          }`}
          style={{fontSize: navbarFontSize}}
          >
            About{" "}
            {router.asPath === aboutPath ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            ): null}
          </Link>

          {/*Services*/}
          <Link href={servicesPath} passHref
            className={`text-base ${
            router.asPath.includes(servicesPath) || router.asPath.includes(servicePath) ? selectedTextStyle : unselectedTextStyle }`}
            style={{fontSize: navbarFontSize}}
          >
            Services{" "} 
            {(router.asPath.includes(servicesPath) || router.asPath.includes(servicePath)) ? ( 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            ): null}
          </Link>

          {/* Projects section was here */}
          
          {/*Clients*/}
          <Link href={clientsPath} passHref
            className={`text-base ${
            router.asPath === clientsPath ? selectedTextStyle : unselectedTextStyle }`}
            style={{fontSize: navbarFontSize}}
          >
            Clients{" "}
            {router.asPath === clientsPath ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            ): null}
          </Link>   
        </div>

          {/*Social Links*/}
          <SocialElement twitter="true" linkedin="true" hideIfMobile="true" hasDarkMode="true"/>   

      </div>


      {/*Mobile Navbar */}
      <div className="space-x-8 block md:hidden mt-4">
        <Link href={aboutPath} className={mobileTextStyle}>
          About
        </Link>
        <Link href={servicesPath} className={mobileTextStyle}>
          Services
        </Link>
        <Link href={clientsPath} className={mobileTextStyle}>
          Clients
        </Link> 
      </div>
    </div>
  );
}
