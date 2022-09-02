import React from "react";
import userData from "@constants/data";
import Image from 'next/image';
import stackshareLogo from "../public/images/stackshare.webp";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          My journey
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <span
            className="leading-loose text-2xl md:text-4xl font-semibold"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. 
          </span>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contacts
              </h1>
              <span className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort of question fill {" "}
                <a
                  href="/contacts"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  this form
                </a>{" "}
                and I'll get back as soon as I can.
              </span>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                My work experience
              </h1>
              <span className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                You can check my CV{" "}
                <a
                  href={userData.resumeUrl}
                  target="_blank" rel="noopener noreferrer"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  here
                </a>.
                <p>
                  Have a look at my {" "}
                  <a
                    href="/clients" rel="noopener noreferrer"
                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  > clients </a>{" "} and {" "}
                  <a
                    href="/experience" rel="noopener noreferrer"
                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  > past experiences </a>{" "}
                  as employee for more details about my journey.
                </p>
              </span>
            </div>

            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
            <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  target="_blank" rel="noopener noreferrer"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <span className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300" suppressHydrationWarning={true}></div>
                    GitHub
                  </span>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.medium}
                  target="_blank" rel="noopener noreferrer"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <span className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300" suppressHydrationWarning={true}></div>
                    Medium
                  </span>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  target="_blank" rel="noopener noreferrer"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <span className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300" suppressHydrationWarning={true}></div>
                    Twitter
                  </span>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  target="_blank" rel="noopener noreferrer"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <span className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300" suppressHydrationWarning={true}></div>
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, aboutMeId) => (
              <span
                key={aboutMeId}
              >
                <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">{desc}</p>
              </span>
            ))}
            
            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack & Tools
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <div>
                <span className="text-xl text-gray-700 mb-4 dark:text-gray-300">
                Click the 
                <a 
                  href="https://stackshare.io/" 
                  target="_blank" rel="noopener noreferrer" 
                  style={{color:"#0645AD"}}> stackshare.io </a> logo below to see the full list of technologies I use and/or know about.
                </span>
              </div>
              <a id="link-stackshare" href={userData.techStack} target="_blank" rel="noopener noreferrer">
                <Image src={stackshareLogo} alt="stackshare logo" className="h-20 w-20 mx-4 my-4" width={80} height={80} priority />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
