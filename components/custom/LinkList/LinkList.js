import userData from "@constants/data";

export default function LinkList({ github, linkedin, linktree }) {
  const socialTextStyle = "text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300 hover_underline-animation";
  return (
    <div className="mt-4 ml-4">
      {github &&
      <div className="flex flex-row justify-start items-center">
        <a href={userData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center space-x-4 group" >
          <div className="my-4">&rarr;</div>
          <span className={socialTextStyle}>
            GitHub
          </span>
        </a>
      </div>}
      {linkedin &&
      <div className="flex flex-row justify-start items-center">
        <a href={userData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center space-x-4 group" >
          <div className="my-4">&rarr;</div>
          <span className={socialTextStyle}>
            LinkedIn
          </span>
        </a>
      </div>}
      {linktree && 
      <div className="flex flex-row justify-start items-center">
        <a href={userData.socialLinks.linktree} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center space-x-4 group" >
          <div className="my-4">&rarr;</div>
          <span className={socialTextStyle}>
            Linktr.ee
          </span>
        </a>
      </div>}
    </div>
  );
}