import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechCard ({techId, techName, techDescription, techLogo, techLogoX, techLogoY, techUrl }) {
  
  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover(!hover);
  }

  return (
    <div id={techId} className="h-14 w-14 mx-1 my-1 relative group">
      <Link href={techUrl} target="_blank" rel="noopener noreferrer" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <div className="transform hover:scale-110 transition-all duration-300">
          <Image 
            src={techLogo} 
            alt={techName} 
            className="fill opacity-80 hover:opacity-100 transition-opacity" 
            width={techLogoX} 
            height={techLogoY}
            loading="lazy"
          />
        </div>
        <div 
          className="tooltip-div rounded-md bg-slate-800 w-28 p-1.5 shadow-lg border border-slate-700"
          style={{display: hover ? "block" : "none"}}
        >
          <h1 className="text-[10px] text-white font-medium mb-0.5">{techName}</h1>
          <div className="w-full h-px bg-slate-600 mb-0.5"></div>
          <p className="text-[8px] text-slate-300 leading-snug">{techDescription}</p>
        </div>
      </Link>
    </div>
  );
};