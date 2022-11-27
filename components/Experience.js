import React from "react";
import experiencesData from "@constants/experiences";
import ExperienceCard from "@custom/Cards/ExperienceCard";
import Breadcrumb from "@custom/Breadcrumb/Breadcrumb";

export default function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div>

      <Breadcrumb/>

      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/*Fixes warning each child in a list should have a unique "key" prop. */}
          {React.Children.toArray(experiencesData.experiences.filter(employer => employer.show === true)?.map((employer, employerId) => (
            <>
            <ExperienceCard
              code={employer.code}
              companyName={employer.companyName}
              companyType={employer.companyType}
              companySector={employer.companySector}
              companyLogo={employer.companyLogo}
              companyLogoX={employer.companyLogoX}
              companyLogoY={employer.companyLogoY}
              companyUrl={employer.companyUrl}
              role={employer.role}
              story={employer.story}
              year={employer.year}
              show={employer.show}
            />
            {employerId === experiencesData.experiences.length - 1 || employer.show === false ? null : (
              <div className="divider-container flex flex-col items-center -mt-2">
                <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                </div>
                <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
              </div>
            )}
            </>
          )))}
        </div>
      </div>
    </section>
  );
}
