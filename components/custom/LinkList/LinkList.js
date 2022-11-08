import userData from "@constants/data";
import Link from "next/link";

export default function LinkList({ github, linkedin, linktree }) {
  const socialTextStyle = "text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300 hover_underline-animation";
  return (
    <div className="mt-4 ml-4">
      {github ?
      <div className="flex flex-row justify-start items-center">
        <Link href={userData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center space-x-4 group" >
          <div className="my-4">&rarr;</div>
          <span className={socialTextStyle}>
            GitHub
          </span>
        </Link>
      </div>
      : null}
      {linkedin ?
      <div className="flex flex-row justify-start items-center">
        <Link href={userData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center space-x-4 group" >
          <div className="my-4">&rarr;</div>
          <span className={socialTextStyle}>
            LinkedIn
          </span>
        </Link>
      </div>
      : null}
      {linktree ? 
      <div className="flex flex-row justify-start items-center">
        <Link href={userData.socialLinks.linktree} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center space-x-4 group" >
          <div className="my-4">&rarr;</div>
          <span className={socialTextStyle}>
            Linktr.ee
          </span>
        </Link>
      </div>
      : null}
    </div>
  );
}