import React from "react";
import Image from "next/image";
import Link from "next/link";
import servicesData from "@constants/services";

export default function ServiceCard ({ id, category, name, slug, image, imageX, imageY, description, startingFromRate }) {

    const url = `${servicesData.basePath}/${slug}`;
    const altText = `${category} ${name} service`;
    // Only show the rate when it is a meaningful, non-zero value.
    const showRate = startingFromRate !== undefined
      && startingFromRate !== null
      && startingFromRate !== 0
      && startingFromRate !== "0";
    return (
      <Link href={url} passHref className="w-full block group">
          <article
            id={id !== undefined ? `service-${id}` : undefined}
            className="flex flex-col h-full overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="relative h-56 overflow-hidden">
              <Image 
                src={image} 
                alt={altText} 
                width={imageX} 
                height={imageY} 
                className="transform group-hover:scale-110 transition duration-700 ease-out object-cover h-full w-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                loading="lazy"
              />
              {/* Gradient overlay for legible text */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

              {/* Category + Service name */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="block text-xs font-medium uppercase tracking-wide text-secondary-300" style={{fontFamily: 'var(--font-mono)'}}>
                  {category}
                </span>
                <h3 className="text-lg font-bold text-white leading-tight" style={{fontFamily: 'var(--font-heading)'}}>
                  {name}
                </h3>
              </div>
            </div>

            {/* Card body */}
            <div className="flex flex-col flex-1 p-4">
              <p className="text-sm text-slate-600 dark:text-slate-300" style={{fontFamily: 'var(--font-family)'}}>
                {description}
              </p>
              {showRate && (
                <p className="mt-3 text-xs font-medium text-slate-500 dark:text-slate-400" style={{fontFamily: 'var(--font-mono)'}}>
                  {startingFromRate}
                </p>
              )}
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 dark:text-primary-400 transition-transform duration-300 group-hover:gap-2">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </article>
      </Link>
    );
}