import React from "react";
import Link from "next/link";

export default function NavBarLink({ link, name, router }) {

  const isActive = router.asPath.includes(link);

  return (
    <Link href={link} passHref
      aria-current={isActive ? "page" : undefined}
      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg shadow-primary-500/25' 
          : 'text-slate-200 hover:bg-slate-800 hover:text-primary-400'
      }`}
      style={{fontFamily: 'var(--font-heading)'}}
    >
      {name}
    </Link> 
  );
}