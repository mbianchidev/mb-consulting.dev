import React from "react";
import userData from "@constants/data";
import heroData from "@constants/pages/hero";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "@custom/Highlight/RainbowHighlight";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { shuffle, randomNum } from "@lib/utils";
import Link from "next/link";

export default function Hero() {
  const titleStyle = "text-4xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white my-2 leading-tight";

  const [CTA, setCTA] = useState(" ");
  const [color, setColors] = useState(" ");
  const [funnySentence, setFunnySentence] = useState(" ");
  const [showAnnotations, setShowAnnotations] = useState(false);

  useEffect(() => {
    const updateRandomFunnySentence = () => {
      const randomFunnySentence =
        shuffle(heroData.hero.funnySentences)[
          randomNum(heroData.hero.funnySentences.length)
        ];
      setFunnySentence(randomFunnySentence);
    };
    const randomCTA = shuffle(heroData.hero.CTAs)[randomNum(heroData.hero.CTAs.length)];
    const randomColor = shuffle(heroData.hero.colors);
    const intervalId = setInterval(updateRandomFunnySentence, 5000);
    updateRandomFunnySentence();
    setCTA(randomCTA);
    setColors(randomColor);
    
    // Delay showing annotations to prevent CLS
    const timer = setTimeout(() => {
      setShowAnnotations(true);
    }, 100);
    
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
      clearTimeout(timer);
    };
  }, [heroData]);

  const catchyPhraseFontSize = "1.5em";

  return (
    <div className="flex flex-row justify-center items-start overflow-hidden gradient-mesh relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none"></div>
      
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:px-20 lg:py-24 px-6 py-16 relative z-10">
        {/* Fancy writings */}
        <RoughNotationGroup show={showAnnotations}>
          <RainbowHighlight color={color[0]}>
            <Link href={heroData.hero.firstLink} passHref className="inline-block min-h-[44px]">
              <h1 className={titleStyle}>
               {heroData.hero.firstPrinciple}
              </h1>
            </Link>
          </RainbowHighlight>
          <RainbowHighlight color={color[1]}>
            <Link href={heroData.hero.secondLink} passHref className="inline-block min-h-[44px]">
              <h1 className={titleStyle}>
                {heroData.hero.secondPrinciple}
              </h1>
            </Link>
          </RainbowHighlight>
          <RainbowHighlight color={color[2]}>
            <Link href={heroData.hero.thirdLink} passHref className="inline-block min-h-[44px]">
              <h1 className={titleStyle}>
                {heroData.hero.thirdPrinciple}
              </h1>
            </Link>
          </RainbowHighlight>
          <RainbowHighlight color={color[3]}>
            <Link href={heroData.hero.fourthLink} passHref className="inline-block min-h-[44px]">
              <h1 className={titleStyle}>
                {heroData.hero.fourthPrinciple}
              </h1>
            </Link>
          </RainbowHighlight>
        </RoughNotationGroup>

        {/* Responsive Mobile image */}   
        <div className="relative w-full aspect-square max-w-md mx-auto hero__mobile-image mt-8 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-primary-500/20" style={{position: "relative" }}>
          <Image 
            src={userData.mobileAvatarUrl} 
            sizes="(max-width: 768px) 100vw, 50vw" 
            alt="mobile-propic" 
            fill
            style={{objectFit: 'cover'}}
            priority
          />
        </div>
  
        {/*CTA - Call to action*/}
        <div className="mt-12 space-y-6">
          <p className="font-medium text-slate-700 dark:text-slate-300 text-xl md:text-2xl leading-relaxed" style={{fontFamily: 'var(--font-mono)'}}>{heroData.hero.catchyPhrase}</p>
          <Link href="/book30" passHref>
            <button className="group relative bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 rounded-xl w-full sm:w-auto min-w-[240px] mx-auto md:mx-0 mt-8 px-8 py-4 text-white text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 touch-target overflow-hidden">
              <span className="relative z-10">{CTA}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 relative" style={{aspectRatio: '954/1430'}}>

          {/* Desktop Image + Link */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-primary-500/20 hover:ring-primary-500/40 transition-all duration-300">
            <Image 
              src={userData.avatarUrl} 
              alt="propic" 
              width={954} 
              height={1430}
              sizes="(max-width: 1024px) 0vw, 50vw"
              className="hero__desktop-image" 
              priority
              fetchPriority="high"
              style={{width: '100%', height: 'auto'}}
            />
          </div>

          {/* Funny sentence */}
          <div className="flex flex-row justify-between mt-6 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg">
            <div className="flex flex-row space-x-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-90deg-up text-secondary-500"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-medium text-slate-700 dark:text-slate-300" style={{fontFamily: 'var(--font-mono)'}}>{funnySentence}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
