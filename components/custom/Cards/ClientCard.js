import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ClientCard ({ code, companyName, companyType, companySector, companyLogo, companyLogoX, companyLogoY, companyUrl, role, story, year }) {
  return (
    <div id={code} className="relative client-card border border-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl bg-slate-800 z-10 mx-4 transition-all duration-300 hover:-translate-y-1 group">
      <Link href={companyUrl} target="_blank" rel="noopener noreferrer" className="block mb-4 transform transition-transform group-hover:scale-105">
        <Image 
          src={companyLogo} 
          alt={companyName} 
          width={companyLogoX} 
          height={companyLogoY}
          loading="lazy"
          className="max-h-16 w-auto object-contain"
        />
      </Link>
      <div className="absolute -top-6 md:-left-6 md:-top-8 bg-gradient-to-br from-secondary-600 to-primary-600 text-white px-6 py-3 rounded-2xl shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold" style={{fontFamily: 'var(--font-heading)'}}>
          {year}
        </h1>
      </div>
      <h2 className="font-bold text-xl md:text-2xl text-white mb-2" style={{fontFamily: 'var(--font-heading)'}}>
        {role}
      </h2>
      <span className="text-slate-400 text-sm font-medium">
        {companyName} · {companySector} ({companyType})
      </span>
      <p className="text-slate-300 my-3 leading-relaxed">
        {story}
      </p>
      <div className="mt-4 pt-4 border-t border-slate-700 flex items-center text-primary-400 group-hover:text-secondary-400 transition-colors">
        <span className="text-sm font-medium">View client</span>
        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};