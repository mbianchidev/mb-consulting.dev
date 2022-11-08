import React from "react";
import projectsData from "@constants/projects";
import ProjectCard from "@custom/Cards/ProjectCard";

export default function FavouriteProjects() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center">
            Favourite Projects
          </h1>
          <p className="text-base font-normal text-gray-700 mb-4 dark:text-gray-300">
            {projectsData.warning}
          </p>
        </header>
        {/* Grid starts here */}
        <div className="grid md:grid-cols-3 gap-8 lg:-mt-8 pb-40">
          {React.Children.toArray(projectsData.projects?.map((proj, projId) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${projId + 1}`}
            />
          )))}
        </div>
      </div>
    </div>
  );
}
