import React from "react";
import Link from "next/link";

export default function NavBarLink({ link, name, router }) {

  const navbarFontSize = '18px';
  const selectedTextStyle = "text-slate-900 dark:text-white font-semibold relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-primary-600 after:to-secondary-600 after:rounded-full";
  const unselectedTextStyle = "text-slate-700 dark:text-slate-300 font-medium hover:text-primary-600 dark:hover:text-primary-400 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-primary-600 after:to-secondary-600 after:rounded-full after:transition-all after:duration-300 hover:after:w-full";

  return (
    <Link href={link} passHref
      className={`text-base transition-all duration-300 ${
      router.asPath.includes(link) ? selectedTextStyle : unselectedTextStyle }`}
      style={{fontSize: navbarFontSize, fontFamily: 'var(--font-heading)'}}
    >
      {name}{" "}
      {(router.asPath.includes(link)) ? ( 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-down inline-block h-3 w-3 animate-bounce"
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