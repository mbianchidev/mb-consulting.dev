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
  const titleStyle = "text-4xl md:text-8xl font-bold text-gray-900 dark:text-gray-100 my-2";

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
    <div className="flex flex-row justify-center items-start overflow-hidden bg-white dark:bg-gray-800">

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        {/* Fancy writings */}
        <RoughNotationGroup show={showAnnotations}>
          <RainbowHighlight color={color[0]}>
            <Link href={heroData.hero.firstLink} passHref className="inline-block min-h-[44px]">
              <h1 className={titleStyle}>
               {heroData.hero.firstPrinciple}
              </h1>
            </Link>
          </RainbowHighlight>
          <br />
          <RainbowHighlight color={color[1]}>
            <Link href={heroData.hero.secondLink} passHref className="inline-block min-h-[44px]">
              <h1 className={titleStyle}>
                {heroData.hero.secondPrinciple}
              </h1>
            </Link>
          </RainbowHighlight>
          <br />
          <RainbowHighlight color={color[2]}>
            <Link href={heroData.hero.thirdLink} passHref className="inline-block min-h-[44px]">
              <h1 className={titleStyle}>
                {heroData.hero.thirdPrinciple}
              </h1>
            </Link>
          </RainbowHighlight>
          <br />
          <RainbowHighlight color={color[3]}>
            <Link href={heroData.hero.fourthLink} passHref className="inline-block min-h-[44px]">
              <h1 className={titleStyle}>
                {heroData.hero.fourthPrinciple}
              </h1>
            </Link>
          </RainbowHighlight>
        </RoughNotationGroup>

        {/* Responsive Mobile image */}   
        <div className="relative w-full aspect-square max-w-md mx-auto hero__mobile-image" style={{position: "relative" }}>
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
        <br></br>
        <p className="font-mono text-gray-900 dark:text-gray-50" style={{fontSize: catchyPhraseFontSize}}>{heroData.hero.catchyPhrase}</p>
        <Link href="/book30" passHref>
          <button className="bg-mb-quaternary dark:bg-mb-tertiary rounded-md w-full sm:w-auto min-w-[200px] mx-2 mt-8 px-6 py-4 text-white dark:text-white text-xl font-bold hover:opacity-90 transition-opacity touch-target">{CTA}</button>
        </Link>
        
      </div>

      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 relative" style={{aspectRatio: '954/1430'}}>

          {/* Desktop Image + Link */}
          <Image 
            src={userData.avatarUrl} 
            alt="propic" 
            width={954} 
            height={1430}
            sizes="(max-width: 1024px) 0vw, 50vw"
            className="shadow hero__desktop-image" 
            priority
            fetchPriority="high"
            style={{width: '100%', height: 'auto'}}
          />

          {/* Funny sentence */}
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">{funnySentence}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
