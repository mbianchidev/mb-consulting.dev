import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechCard ({techId, techName, techDescription, techLogo, techLogoX, techLogoY, techUrl }) {
  
  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover(!hover);
  }

  // const onHover = () => {
  //   setHover(true);
  // };
  // 
  // const onLeave = () => {
  //   setHover(false);
  // };

  return (
    <div id={techId} className="h-20 w-20 mx-4 my-4">
      <Link href={techUrl} target="_blank" rel="noopener noreferrer" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <Image 
          src={techLogo} 
          alt={techName} 
          className="fill" 
          width={techLogoX} 
          height={techLogoY}
          loading="lazy"
        />
          <div 
            className={"tooltip-div rounded bg-gray-800 w-40" }
            style={{display: hover ? "block" : "none"}}
          >
            <h1 className="tooltiptitle m-1 text-sm text-gray-300 font-bold">{techName}</h1>
            <hr/>
            <p className="tooltiptext m-1 text-sm text-gray-300 font-normal">{techDescription}</p>
          </div>
      </Link>
    </div>
  );
};