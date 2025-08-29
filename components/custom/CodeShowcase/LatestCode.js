import React, { useEffect, useState } from "react";
import userData from "@constants/data";
import Link from "next/link";

export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setRepos(repositories);
  }, [repos]);

  return (
    <section className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-600 my-20 md:my-0 dark:text-gray-300 text-center lg:text-left">
            Latest Code
          </h1>

          <Link
            href={`https://github.com/${userData.githubUsername}`}
            target="_blank" rel="noopener noreferrer"
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p className="dark:text-black">View my GitHub</p>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20">
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

  let h1Class = "font-semibold text-xl dark:text-gray-50 text-gray-700";//"font-semibold text-xl dark:text-gray-300 text-gray-700"
  if (num==0) {
    h1Class = "font-semibold text-xl dark:text-gray-50 bg-red-500 rounded-md px-2 text-gray-50";
  }
  return (
    <div className="github-repo">
      <h1 className={h1Class}>
        {latestRepo.repo}
      </h1>
      <p className="text-base font-normal my-4 text-gray-500">
        {latestRepo.description}
      </p>
      <Link
        href={latestRepo.link}
        target="_blank" rel="noopener noreferrer"
        className="font-semibold group flex flex-row space-x-2 w-full items-center"
      >
        <p>View Repository </p>
        <div className="transform group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </Link>
    </div>
  );
};
