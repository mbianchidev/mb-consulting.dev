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

  const linkTextStyle = "text-secondary-400 font-bold hover-underline-animation";
  const standardAboutText = "text-lg text-slate-300 mb-4 leading-relaxed";

  return (
    <section className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <h1 className="text-5xl md:text-8xl font-bold text-white" style={{fontFamily: 'var(--font-heading)'}}>
          My journey
        </h1>
      </div>
      
      <Breadcrumb/>

      <div className="bg-slate-900 py-16">
        <div className="text-container max-w-7xl mx-auto px-6">
          <span
            className="leading-loose text-2xl md:text-4xl font-semibold text-slate-200"
            style={{ lineHeight: "3rem", fontFamily: 'var(--font-heading)' }}
          >
            {aboutData.about.title}. 
          </span>
        </div>
      </div>
      <div className="bg-slate-900 px-6 pb-20">
        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-y-12 gap-x-12">

          {/* Social Buttons */}
          <div className="inline-flex flex-col space-y-8">
            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">
              <h1 className="text-sm font-bold text-white mb-4" style={{fontFamily: 'var(--font-heading)'}}>
                Contacts
              </h1>
              <span className="text-sm text-slate-300">
                Interested in a collaboration? Got any question? Book {" "}
                <Link href="/book30" className={linkTextStyle}> a meeting </Link>{" "} today!
              </span>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">
              <h1 className="text-sm font-bold text-white mb-4" style={{fontFamily: 'var(--font-heading)'}}>
                Experience
              </h1>
              <span className="text-xs text-slate-300">
                <p>
                  Have a look at my {" "} <Link href="/clients" rel="noopener noreferrer" className={linkTextStyle}> clients </Link>{" "} and {" "}
                  <Link href="/experience" passHref rel="noopener noreferrer" className={linkTextStyle}> 
                      experience
                  </Link>{" "} for more details (I don't have a CV it's boring).
                </p>
              </span>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">
              <h1 className="text-sm font-bold text-white mb-4" style={{fontFamily: 'var(--font-heading)'}}>
                Links
              </h1>
              <LinkList linktree="true"/>
            </div>
          </div>

          {/* Text area */}
          <div className="col-span-1 md:col-span-2">

            <h1 className="text-xl font-semibold text-slate-300 mb-8">
              {aboutData.about.clickText}
            </h1>

            {/* Story */}
            <div className="mb-6">
              <button 
                onClick={toggleStory}
                className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-2xl md:text-3xl rounded-2xl px-6 py-3 font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{fontFamily: 'var(--font-heading)'}}
              >
                {aboutData.about.story.shortTitle}
                <svg className={`inline-block ml-2 w-6 h-6 transition-transform duration-300 ${showStory ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className={`transition-all duration-500 overflow-hidden ${showStory ? "max-h-[2000px] opacity-100 mb-8" : "max-h-0 opacity-0"}`}>
              <div className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700">
                {aboutData.about.story.description?.map((desc, aboutMeId) => (
                  <span key={aboutMeId}>
                    <p className={standardAboutText}>{desc}</p>
                  </span>
                ))}
              </div>
            </div>

            {/* Goals and values */}
            <div className="mb-6">
              <button 
                onClick={toggleGoals}
                className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-2xl md:text-3xl rounded-2xl px-6 py-3 font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{fontFamily: 'var(--font-heading)'}}
              >
                {aboutData.about.goals.shortTitle}
                <svg className={`inline-block ml-2 w-6 h-6 transition-transform duration-300 ${showGoals ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className={`transition-all duration-500 overflow-hidden ${showGoals ? "max-h-[2000px] opacity-100 mb-8" : "max-h-0 opacity-0"}`}>
              <div className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700">
                {aboutData.about.goals.description?.map((desc, aboutMeId) => (
                  <span key={aboutMeId}>
                    <p className={standardAboutText}>{desc}</p>
                  </span>
                ))}
              </div>
            </div>

            {/* Techs */}
            <div className="mb-6">
              <button 
                onClick={toggleTechs}
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-2xl md:text-3xl rounded-2xl px-6 py-3 font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{fontFamily: 'var(--font-heading)'}}
              >
                {aboutData.about.techs.shortTitle}
                <svg className={`inline-block ml-2 w-6 h-6 transition-transform duration-300 ${showTechs ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className={`transition-all duration-500 overflow-hidden ${showTechs ? "max-h-[4000px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700">
                {aboutData.about.techs.description?.map((desc, aboutMeId) => (
                  <span key={aboutMeId}>
                    <p className={standardAboutText}>{desc}</p>
                  </span>
                ))}
                {/*Tech stack images*/}
                <div className="flex flex-row flex-wrap mt-8 gap-4">
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
                <span className="text-sm font-normal text-slate-400 block mt-6">
                  {aboutData.about.techs.warning}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


