import React from "react";
import userData from "@constants/data";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();
  const colors = ["#FF7F3F", "#10B981", "#3B82F6","#851DE0"];
  return (

    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Fancy writings */}
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Craft.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Automate.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Secure.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Innovate.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
        {/*contact me button*/}
        <br></br>
        <p className="font-mono">Want to learn more about what I can do for your business? Wanna collaborate? Looking for a coach?</p>
        <a href="/contacts">
          <button className="bg-[#02044A] rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-200 dark:text-gray-200 text-xl font-bold">Contact me!</button>
        </a>
      </div>

      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
          <img src={userData.avatarUrl} alt="avatar" className=" shadow" />
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
              <p className="font-mono">Yup, this is me!</p>
            </div>
          </div>
        </div>
      </div>
      {/* TODO call to action "Become a client today"->Contact "Learn more"->Servizi offerti */}
    </div>
  );
}
