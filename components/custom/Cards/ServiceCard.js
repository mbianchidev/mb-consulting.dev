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
          <div className="mb-3 px-4">
            <span className={`text-sm text-slate-400 transition-all duration-300 ${visible ? "opacity-100" : "opacity-0"}`}>
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
              {/* Gradient overlay - more subtle */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            </div>
            
            {/* Price badge */}
            {startingFromRate != "0" && (
              <div className="absolute top-5 right-5 bg-slate-900/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                <p className="text-sm font-bold text-primary-400" style={{fontFamily: 'var(--font-mono)'}}>
                  {startingFromRate}
                </p>
              </div>
            )}
            
            {/* Service name - smaller and more subtle */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h1 className="text-white font-bold text-base md:text-lg bg-gradient-to-r from-primary-600/90 to-secondary-600/90 backdrop-blur-sm px-4 py-2 rounded-lg inline-block shadow-lg" style={{fontFamily: 'var(--font-heading)'}}>
                {name}
              </h1>
            </div>
          </div>
      </Link>
    );
}