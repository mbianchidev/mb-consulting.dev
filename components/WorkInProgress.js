import React from "react";
import Image from 'next/image';

export default function WorkInProgress() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 min-h-screen">
    <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 bg-slate-50 dark:bg-slate-950">
      <h1 className="text-5xl md:text-8xl font-bold text-slate-900 dark:text-white text-center md:text-left" style={{fontFamily: 'var(--font-heading)'}}>
        Work In Progress
      </h1>
    </div>
      <div className="bg-slate-100 dark:bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 leading-relaxed mb-12">
            If you ended up here you found some secret stuff I'm working on (or there's a wrong redirect somewhere lol) 
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl inline-block">
            <Image src="/images/gifs/hypno-toad.gif" alt="The hypnotoad from Futurama, a cartoon series by Matt Groening (The Simpson creator)" width="480" height="480" /> 
          </div>
          <p className="text-2xl font-bold text-slate-800 dark:text-white mt-8">
            ALL GLORY TO THE HYPNOTOAD!
          </p>
        </div>
      </div>
    </section>
  );
}
