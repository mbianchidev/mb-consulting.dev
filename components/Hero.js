import React from "react";
import userData from "@constants/data";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { shuffle } from "@lib/utils";

export default function Hero() {
  const titleStyle = "text-4xl md:text-8xl font-bold dark:text-gray-200 my-2";
  const callToActionsArray = ["Let's talk!","Work with me!","Free call!", "Go cloud!", "Don't click here!"];
  const colorsArray = ["#FF7F3F", "#10B981", "#02058F","#851DE0"];// #02058F #276CC6 #02044A

  const [CTA, setCTA] = useState(" ");
  const [color, setColors] = useState(" ");

  useEffect(() => {
    const randomCTA = shuffle(callToActionsArray)[0];
    const randomColor = shuffle(colorsArray);
    setCTA(randomCTA);
    setColors(randomColor);
  }, []);

  const catchyPhraseFontSize = "1.5em";

  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">

      {/* Fancy writings */}
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={color[0]}>
            <h1 className={titleStyle}>
             {userData.hero.firstPrinciple}
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={color[1]}>
            <h1 className={titleStyle}>
              {userData.hero.secondPrinciple}
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={color[2]}>
            <h1 className={titleStyle}>
              {userData.hero.thirdPrinciple}
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={color[3]}>
            <h1 className={titleStyle}>
              {userData.hero.fourthPrinciple}
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>

        {/* Responsive Mobile image */}   
        <div className="relative w-full h-56 md:h-[500px] hero__mobile-image">
          <Image src={userData.mobileAvatarUrl} sizes="100vw" alt="propic" layout="fill" objectFit="cover" objectPosition="center" priority />
        </div>

        {/*CTA - Call to action*/}
        <br></br>
        <p className="font-mono dark:text-gray-100" style={{fontSize: catchyPhraseFontSize}}>{userData.hero.catchyPhrase}</p>
        <a href="/contacts">
          <button className="bg-[#02044A] rounded-md w-1/2 mx-2 mt-8 py-2 text-gray-200 dark:text-gray-200 text-xl font-bold">{CTA}</button>
        </a>
        
      </div>

      {/* Desktop Image */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
          <Image src={userData.avatarUrl} alt="propic" width={954} height={1430} className="shadow hero__desktop-image" priority />
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
              <p className="font-mono">{userData.hero.funnySentence}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
