import React from "react";
import projectsData from "@constants/projects";
import ProjectCard from "@custom/Cards/ProjectCard";

export default function Projects() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 bg-slate-50 dark:bg-slate-950">
        <h1 className="text-5xl md:text-8xl font-bold text-slate-900 dark:text-white text-center md:text-left" style={{fontFamily: 'var(--font-heading)'}}>
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-slate-100 dark:bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.projects?.map((proj, projId) => (
            <ProjectCard
              key={projId}
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${projId + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
