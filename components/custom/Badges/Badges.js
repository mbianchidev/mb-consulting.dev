import React from "react";
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';

export default function Badges() {

  return (
    <section className="bg-slate-100 dark:bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <h1 className="text-5xl lg:text-8xl font-bold text-slate-800 dark:text-white text-center lg:text-left" style={{fontFamily: 'var(--font-heading)'}}>
            Badges
          </h1>

          <div className="transform hover:scale-105 transition-transform duration-300">
            <WebsiteCarbonBadge dark={true} co2="0.12" percentage="89" />
          </div>

        </div>
      </div>
    </section>
  );
}