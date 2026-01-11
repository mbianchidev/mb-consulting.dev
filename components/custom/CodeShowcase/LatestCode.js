import React, { useEffect, useState } from "react";
import userData from "@constants/data";
import Link from "next/link";

export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setRepos(repositories);
  }, [repos]);

  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h1 className="text-5xl lg:text-8xl font-bold text-slate-800 dark:text-white mb-8 md:mb-0 text-center lg:text-left" style={{fontFamily: 'var(--font-heading)'}}>
            Latest Code
          </h1>

          <Link
            href={`https://github.com/${userData.githubUsername}`}
            target="_blank" rel="noopener noreferrer"
            className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 shadow-lg hover:shadow-xl text-lg font-bold flex flex-row space-x-3 items-center text-white transition-all duration-300 hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-up-right-square transform group-hover:scale-110 transition-transform"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View my GitHub</p>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {/* Single github Repo */}

        {repos ? (
          React.Children.toArray(repos?.map((latestRepo, repoId) => (
            <GithubRepoCard latestRepo={latestRepo} num={repoId} />
          )))): null}
      </div>
    </section>
  );
}

const GithubRepoCard = ({ latestRepo, num }) => {

  let cardClass = "bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 group";
  let h1Class = "font-bold text-xl text-slate-900 dark:text-white mb-3";
  
  if (num==0) {
    cardClass = "bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden";
    h1Class = "font-bold text-xl text-white mb-3 relative z-10";
  }
  
  return (
    <div className={cardClass}>
      {num === 0 && (
        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs font-bold text-white">Latest</span>
        </div>
      )}
      <h1 className={h1Class} style={{fontFamily: 'var(--font-heading)'}}>
        {latestRepo.repo}
      </h1>
      <p className={`text-base font-normal my-4 leading-relaxed ${num === 0 ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'}`}>
        {latestRepo.description}
      </p>
      <Link
        href={latestRepo.link}
        target="_blank" rel="noopener noreferrer"
        className={`font-semibold group/link flex flex-row space-x-2 w-full items-center ${num === 0 ? 'text-white' : 'text-primary-600 dark:text-primary-400'}`}
      >
        <p>View Repository</p>
        <div className="transform group-hover/link:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </Link>
    </div>
  );
};
