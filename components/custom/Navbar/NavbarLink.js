import React from "react";
import Link from "next/link";

export default function NavBarLink({ link, name, router }) {

  const navbarFontSize = '20px';
  const selectedTextStyle = "text-black font-bold dark:text-white";
  const unselectedTextStyle = "text-black font-normal dark:text-white";

  return (
    <Link href={link} passHref
      className={`text-base ${
      router.asPath.includes(link) ? selectedTextStyle : unselectedTextStyle }`}
      style={{fontSize: navbarFontSize}}
    >
      {name}{" "}
      {(router.asPath.includes(link)) ? ( 
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
  );
}