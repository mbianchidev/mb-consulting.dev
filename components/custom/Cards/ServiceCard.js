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
      <Link href={url} passHref className="w-full block shadow-2xl">
          <span className={visible? "font-light fadeIn":"font-light fadeOut"}>
            {description}
          </span>
          <div id={serviceId} className="relative overflow-hidden" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="h-72 object-cover">
              <Image src={image} alt={altText} width={imageX} height={imageY} className="fill transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full" />
            </div>
            <h1 className="absolute bottom-10 left-5 text-gray-50 font-bold text-xl dark:bg-blue-500 bg-mb_secondary rounded-md px-2">
              {category} - {name}
            </h1>
            <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl">
                {startingFromRate != "0" ? startingFromRate : null}
            </h1>
          </div>
      </Link>
    );
}