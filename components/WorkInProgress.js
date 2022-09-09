import React from "react";
import Image from 'next/image';

export default function WorkInProgress() {
  return (
    <section className="bg-white dark:bg-gray-800">
    <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
      <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        Work In Progress
      </h1>
    </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <span
            className="leading-loose text-2xl md:text-4xl font-semibold"
            style={{ lineHeight: "3rem" }}
          >
            If you ended up here you found some secret stuff I'm working on (or there's a wrong redirect somewhere lol) <br></br><br></br>
            <Image src="/images/gifs/hypno-toad.gif" alt="The hypnotoad from Futurama, a cartoon series by Matt Groening (The Simpson creator)" width="480" height="480" /> <br></br>
            ALL GLORY TO THE HYPNOTOAD!
          </span>
        </div>
      </div>
    </section>
  );
}
