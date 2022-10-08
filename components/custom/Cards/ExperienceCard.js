import React from "react";
import Image from "next/image";

export default function ExperienceCard({ code, companyName, companyType, companySector, companyLogo, companyLogoX, companyLogoY, companyUrl, role, story, year }) {
  return (
    <div id={code} className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <a href={companyUrl} target="_blank" rel="noopener noreferrer">
        <Image src={companyLogo} alt={companyName} width={companyLogoX} height={companyLogoY} />
      </a>
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-500 font-bold dark:text-gray-500">
      {year}
      </h1>
      <h1 className="font-semibold text-xl">{role}</h1>
      <span className="text-gray-500">{companyName} - {companySector} ({companyType})</span>
      <p className="text-gray-600 dark:text-gray-400 my-2">{story}</p>
    </div>
  );
}
