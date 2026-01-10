import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard ({ title, link, imgUrl, number }) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="w-full block group">
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" id={number}>
        <div className="h-72 object-cover relative">
          <Image 
            src={imgUrl} 
            alt={title} 
            fill 
            className="transform group-hover:scale-110 transition duration-700 ease-out object-cover h-full w-full" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h1 className="text-white font-bold text-xl md:text-2xl mb-2 transform group-hover:translate-x-2 transition-transform duration-300" style={{fontFamily: 'var(--font-heading)'}}>
            {title}
          </h1>
          <div className="flex items-center text-secondary-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span className="text-sm font-medium mr-2">View Project</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};