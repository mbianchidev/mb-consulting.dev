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
  const titleStyle = "text-4xl md:text-8xl font-bold dark:text-gray-200 my-2";

  const [CTA, setCTA] = useState(" ");
  const [color, setColors] = useState(" ");
  const [funnySentence, setFunnySentence] = useState(" ");

  useEffect(() => {
    const randomFunnySentence = shuffle(heroData.hero.funnySentences)[randomNum(heroData.hero.funnySentences.length)];
    const randomCTA = shuffle(heroData.hero.CTAs)[randomNum(heroData.hero.CTAs.length)];
    const randomColor = shuffle(heroData.hero.colors);
    setFunnySentence(randomFunnySentence);
    setCTA(randomCTA);
    setColors(randomColor);
  }, []);

  const catchyPhraseFontSize = "1.5em";

  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        {/* Fancy writings */}
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={color[0]}>
            <Link href={heroData.hero.firstLink} passHref>
              <h1 className={titleStyle}>
               {heroData.hero.firstPrinciple}
              </h1>
            </Link>
          </RainbowHighlight>
          <RainbowHighlight color={color[1]}>
            <Link href={heroData.hero.secondLink} passHref>
              <h1 className={titleStyle}>
                {heroData.hero.secondPrinciple}
              </h1>
            </Link>
          </RainbowHighlight>
          <RainbowHighlight color={color[2]}>
            <Link href={heroData.hero.thirdLink} passHref>
              <h1 className={titleStyle}>
                {heroData.hero.thirdPrinciple}
              </h1>
            </Link>
          </RainbowHighlight>
          <RainbowHighlight color={color[3]}>
            <Link href={heroData.hero.fourthLink} passHref>
              <h1 className={titleStyle}>
                {heroData.hero.fourthPrinciple}
              </h1>
            </Link>
          </RainbowHighlight>
        </RoughNotationGroup>

        {/* Responsive Mobile image */}   

          <Link href="/about" passHref>
            <div className="relative w-full h-56 md:h-[500px] hero__mobile-image" style={{position: "relative" }}>
              <Image src={userData.mobileAvatarUrl} sizes="100vw" alt="propic" height={828} width={760}/>
            </div>
          </Link>
  
        {/*CTA - Call to action*/}
        <br></br>
        <p className="font-mono dark:text-gray-100" style={{fontSize: catchyPhraseFontSize}}>{heroData.hero.catchyPhrase}</p>
        <Link href="/contacts" passHref>
          <button className="dark:bg-[#00B2CA] bg-[#33A1FD] rounded-md w-1/2 mx-2 mt-8 py-2 text-gray-200 dark:text-gray-200 text-xl font-bold">{CTA}</button>
        </Link>
        
      </div>

      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">

          {/* Desktop Image + Link */}
          <Link href="/about" passHref>
            <Image src={userData.avatarUrl} alt="propic" width={954} height={1430} className="shadow hero__desktop-image" priority />
          </Link>

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
