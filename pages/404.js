import React from "react";
import Image from 'next/image';

export default function Custom404() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Error 404
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <span
            className="leading-loose text-2xl md:text-4xl font-semibold"
            style={{ lineHeight: "3rem" }}
          >
            If you ended up here you are looking for a non-existent page, sorry! Click on the logo to return to the homepage.<br></br><br></br><br></br>
            <Image src="/images/gifs/hello-it.gif" alt="'Hello IT, have you tried turning in on and off again?' GIF from the IT Crowd series" width="480" height="270" />
          </span>
        </div>
      </div>
    </section>
  );
}