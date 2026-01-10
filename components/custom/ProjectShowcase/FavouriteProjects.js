import React from "react";
import projectsData from "@constants/projects";
import ProjectCard from "@custom/Cards/ProjectCard";

export default function FavouriteProjects() {
  return (
    <div className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h1 className="text-5xl lg:text-8xl font-bold text-white mb-8 md:mb-0 text-center lg:text-left" style={{fontFamily: 'var(--font-heading)'}}>
            Favourite Projects
          </h1>
        </header>
        {/* Grid starts here */}
        <div className="grid md:grid-cols-3 gap-8">
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
