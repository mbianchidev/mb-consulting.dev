import React from "react";
import userData from "@constants/data";
import heroData from "@constants/pages/hero";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { shuffle, randomNum } from "@lib/utils";
import Link from "next/link";

export default function Hero() {
  const [CTA, setCTA] = useState("Book a Call");
  const [funnySentence, setFunnySentence] = useState(" ");

  useEffect(() => {
    const updateRandomFunnySentence = () => {
      const randomFunnySentence =
        shuffle(heroData.hero.funnySentences)[
          randomNum(heroData.hero.funnySentences.length)
        ];
      setFunnySentence(randomFunnySentence);
    };
    const randomCTA = shuffle(heroData.hero.CTAs)[randomNum(heroData.hero.CTAs.length)];
    const intervalId = setInterval(updateRandomFunnySentence, 5000);
    updateRandomFunnySentence();
    setCTA(randomCTA);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [heroData]);

  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary-400/20 to-accent-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-900/40 border border-primary-800">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-primary-300">Available for consulting</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                <span className="text-white">I help companies </span>
                <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  ship better software
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                DevOps &amp; SRE consulting to help you build, deploy, and scale with confidence.
              </p>
            </div>

            {/* Service pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                { name: heroData.hero.firstPrinciple, link: heroData.hero.firstLink, color: 'from-orange-500 to-red-500' },
                { name: heroData.hero.secondPrinciple, link: heroData.hero.secondLink, color: 'from-cyan-500 to-blue-500' },
                { name: heroData.hero.thirdPrinciple, link: heroData.hero.thirdLink, color: 'from-green-500 to-emerald-500' },
                { name: heroData.hero.fourthPrinciple, link: heroData.hero.fourthLink, color: 'from-purple-500 to-pink-500' },
              ].map((service, index) => (
                <Link key={index} href={service.link} className="group">
                  <span className={`inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r ${service.color} text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5`}>
                    {service.name}
                    <svg className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link href="/book30" className="group">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold rounded-2xl shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                  <span>{CTA}</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
              <Link href="/about" className="group">
                <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-bold rounded-2xl border-2 border-slate-700 hover:border-primary-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Right content - Profile */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-[2rem] blur-xl opacity-30 animate-pulse"></div>
              
              {/* Profile image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-slate-800/50">
                <Image 
                  src={userData.avatarUrl} 
                  alt="Profile picture" 
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating quote card - BIGGER */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-slate-800 rounded-2xl p-5 shadow-xl border border-slate-700/50 w-[280px] sm:w-[320px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-300 leading-relaxed" style={{fontFamily: 'var(--font-mono)'}}>
                      {funnySentence}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats badge */}
              <div className="absolute -top-4 -right-4 sm:-right-8 bg-slate-800 rounded-xl px-4 py-2 shadow-xl border border-slate-700/50">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-xs text-slate-400">Experience</p>
                    <p className="text-sm font-bold text-white">10+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
