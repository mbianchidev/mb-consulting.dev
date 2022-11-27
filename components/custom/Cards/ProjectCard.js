import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard ({ title, link, imgUrl, number }) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="w-full block shadow-2xl">
      <div className="relative overflow-hidden" id={number}>
        <div className="h-72 object-cover">
          <Image src={imgUrl} alt={title} fill className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full" />
        </div>
        <h1 className="absolute bottom-10 right-10 text-gray-50 font-bold text-xl bg-mb_secondary rounded-md px-2">
          {title}
        </h1>
      </div>
    </Link>
  );
};