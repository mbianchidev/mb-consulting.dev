import React, {useState} from "react";
import techsData from "@constants/techs";
import aboutData from "@constants/pages/about";
import Link from "next/link";
import LinkList from "@custom/LinkList/LinkList";
import Breadcrumb from "@custom/Breadcrumb/Breadcrumb";
import TechCard from "@custom/Cards/TechCard";

export default function About() {

  const [showStory, setShowStory] = useState(false);
  const [showGoals, setShowGoals] = useState(false);
  const [showTechs, setShowTechs] = useState(false);

  function toggleStory(){      
    setShowStory(!showStory);
    setShowGoals(false);
    setShowTechs(false);
  }
  function toggleGoals(){      
    setShowGoals(!showGoals);
    setShowTechs(false);
    setShowStory(false);
  }
  function toggleTechs(){      
    setShowTechs(!showTechs);
    setShowStory(false);
    setShowGoals(false);
  }

  const linkTextStyle = "text-[#3B82F6] font-bold hover-underline-animation";
  const standardAboutText = "text-xl text-gray-700 mb-4 dark:text-gray-300";

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          My journey
        </h1>
      </div>
      
      <Breadcrumb/>

      <div className="bg-white -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <span
            className="leading-loose text-2xl md:text-4xl font-semibold"
            style={{ lineHeight: "3rem" }}
          >
            {aboutData.about.title}. 
          </span>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">

          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contacts
              </h1>
              <br></br>
              <span className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                Interested in a collaboration? Got any question? Book {" "}
                <Link href="/book30" className={linkTextStyle}> a meeting </Link>{" "} today!
              </span>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Experience
              </h1>
              <br></br>
              <span className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                <p>
                  Have a look at my {" "} <Link href="/clients" rel="noopener noreferrer" className={linkTextStyle}> clients </Link>{" "} and {" "}
                  <Link href="/experience" passHref rel="noopener noreferrer" className={linkTextStyle}> 
                      experience
                  </Link>{" "} for more details (I don't have a CV it's boring).
                </p>
              </span>
            </div>

            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Links
            </h1>
            <LinkList linktree="true"/>
          </div>

          {/* Text area */}
          <div className="col-span-1 md:col-span-2">

            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              {aboutData.about.clickText}
            </h1>
            <br></br>
            <br></br>

            {/* Story */}
            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              <a onClick={toggleStory}>
                {aboutData.about.story.shortTitle}
              </a>
            </h1>
            <br></br>
            <br></br>
            <div style={{display: showStory ? "block" : "none"}}>
              {aboutData.about.story.description?.map((desc, aboutMeId) => (
                <span key={aboutMeId}>
                  <p className={standardAboutText}>{desc}</p>
                </span>
              ))}
            </div>

            {/* Goals and values */}
            <h1 className="bg-blue-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              <a onClick={toggleGoals}>
                {aboutData.about.goals.shortTitle}
              </a>
            </h1>
            <br></br>
            <br></br>
            <div style={{display: showGoals ? "block" : "none"}}>
              {aboutData.about.goals.description?.map((desc, aboutMeId) => (
                <span key={aboutMeId}>
                  <p className={standardAboutText}>{desc}</p>
                </span>
              ))}
            </div>

            {/* Techs */}
            <h1 className="bg-green-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              <a onClick={toggleTechs}>
                {aboutData.about.techs.shortTitle}
              </a>
            </h1>
            <br></br>
            <br></br>
            <div style={{display: showTechs ? "block" : "none"}}>
              {aboutData.about.techs.description?.map((desc, aboutMeId) => (
                <span key={aboutMeId}>
                  <p className={standardAboutText}>{desc}</p>
                </span>
              ))}
              {/*Tech stack images*/}
              <div className="bg-white flex flex-row flex-wrap mt-8">
                {React.Children.toArray(techsData.techs.filter(tech => tech.show === true)?.map((tech, techId) => (
                  <TechCard
                    techId={techId}
                    techName={tech.name}
                    techDescription={tech.description}
                    techLogo={tech.image}
                    techLogoX={tech.x}
                    techLogoY={tech.y}
                    techUrl={tech.url}
                  />
                )))}
              </div>
              <br></br>
              <span className="text-base font-normal text-gray-700 mb-4 dark:text-gray-300">
                {aboutData.about.techs.warning}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


