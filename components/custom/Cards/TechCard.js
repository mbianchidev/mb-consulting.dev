import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechCard ({techId, techName, techDescription, techLogo, techLogoX, techLogoY, techUrl }) {
  
  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover(!hover);
  }

  return (
    <div id={techId} className="h-20 w-20 mx-4 my-4 relative group">
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
          className="tooltip-div rounded-xl bg-slate-800 dark:bg-slate-700 w-48 p-3 shadow-xl border border-slate-700"
          style={{display: hover ? "block" : "none"}}
        >
          <h1 className="text-sm text-white font-bold mb-1">{techName}</h1>
          <div className="w-full h-px bg-slate-600 mb-2"></div>
          <p className="text-xs text-slate-300 leading-relaxed">{techDescription}</p>
        </div>
      </Link>
    </div>
  );
};