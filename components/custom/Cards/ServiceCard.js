import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import servicesData from "@constants/services";

export default function ServiceCard ({ serviceId, category, name, slug, image, imageX, imageY, description, startingFromRate }) {

    const [visible, setVisible] = useState(false);
  
    const handleMouseOver = () => {
      setVisible(true);
    };
    const handleMouseOut = () => {
      setVisible(false);
    };
  
    const url = `${servicesData.basePath}/${slug}`;
    const altText = `${category} ${name} service`;
    return (
      <Link href={url} passHref className="w-full block group">
          <div className="mb-2 px-4">
            <span className={`text-xs text-slate-400 transition-all duration-300 ${visible ? "opacity-100" : "opacity-0"}`} style={{fontFamily: 'var(--font-family)'}}>
              {description}
            </span>
          </div>
          <div id={serviceId} className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="h-72 object-cover relative">
              <Image 
                src={image} 
                alt={altText} 
                width={imageX} 
                height={imageY} 
                className="fill transform group-hover:scale-110 transition duration-700 ease-out object-cover h-full w-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                loading="lazy"
              />
              {/* Gradient overlay - very subtle */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
            
            {/* Price badge */}
            {startingFromRate != "0" && (
              <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-md">
                <p className="text-[10px] font-medium text-primary-400" style={{fontFamily: 'var(--font-mono)'}}>
                  {startingFromRate}
                </p>
              </div>
            )}
            
            {/* Service name - much smaller, bottom-left corner only */}
            <div className="absolute bottom-3 left-3">
              <span className="text-white font-medium text-[10px] bg-slate-900/70 backdrop-blur-sm px-2 py-1 rounded" style={{fontFamily: 'var(--font-heading)'}}>
                {name}
              </span>
            </div>
          </div>
      </Link>
    );
}