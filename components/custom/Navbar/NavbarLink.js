import React from "react";
import Link from "next/link";

export default function NavBarLink({ link, name, router }) {

  const isActive = router.asPath.includes(link);

  return (
    <Link href={link} passHref
      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg shadow-primary-500/25' 
          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400'
      }`}
      style={{fontFamily: 'var(--font-heading)'}}
    >
      {name}
      {isActive && ( 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-down inline-block h-3 w-3 ml-1"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </svg>
      )}
    </Link> 
  );
}