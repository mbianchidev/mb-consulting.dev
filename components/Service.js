import React, { useEffect, useState } from "react";
import BackButton from "./custom/BackButton/BackButton";
import Link from "next/link";
import Image from "next/future/image";

export default function Service({ service }) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentService = service[0];

  const backup = console.warn;

  console.warn = function filterWarnings(msg) {
    const supressedWarnings = ['If you use CSS to change the size of your image, also include the styles'];
  
    if (!supressedWarnings.some(entry => msg.includes(entry))) {
      backup.apply(console, arguments);
    }
  };

  const imageX=500;
  const imageY=400;
  const altText = `${currentService.category} ${currentService.name} service`;
  const smallTextStyle = "text-sm text-gray-700 mb-4 dark:text-gray-300";
  const largeTextStyle = "text-xl text-gray-700 mb-4 dark:text-gray-300";

  return (
    // we are avoiding any hydration warning: https://github.com/vercel/next.js/discussions/17443#discussioncomment-637879
    mounted && <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          {currentService.category}
        </h1>
      </div>
      
      {/* Back button */}
      <BackButton href="/services" name="services"/>
      
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <span className="leading-loose text-2xl md:text-4xl font-semibold" style={{ lineHeight: "3rem" }}>
            {currentService.name} 
          </span>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Service Image */}
          <Image src={currentService.image} alt={altText} layout="fill" width={imageX} height={imageY} priority/>
          <br></br>
          <div>
            {/* Service Description */}
            {currentService.description?.map((desc, serviceDescriptionId) => (
              <span key={serviceDescriptionId}>
                <p className={largeTextStyle}>{desc}</p>
              </span>
            ))}
            {/*Service CTA*/}
            <Link href={{ pathname: "/contacts", query: { serviceName: currentService.slug} }} passHref>
              <button className="bg-[#3B82F6] rounded-md w-1/2 mx-2 mt-8 py-2 text-gray-200 dark:text-gray-200 text-xl font-bold">{currentService.CTA}</button>
            </Link>
          </div>
          <br></br>
          <br></br>
          {/* Service Rate */}
          <p className={largeTextStyle}><li>Mode and timing - {currentService.type}</li></p>
          <p className={largeTextStyle}><li>Cost range - {currentService.rate != 0 ? currentService.rate+"*" : "to be discussed"}</li></p>
          <p className={largeTextStyle}><li>Special offer - {currentService.offer != null ? currentService.offer+"**" : "None for now but we can work something out!"}</li></p>
          <br></br>
          {/* Service Disclaimers */}
          {currentService.rate != 0 && <p className={smallTextStyle}>* Cost range is only indicative based on the cost of similar services in the market, it will be tailored on every single agreement, based on complexity and budget needs.</p>}
          {currentService.offer != null && <p className={smallTextStyle}>** Offers are subject to company policies all clarified in the agreement.</p>}
          <br></br>
        </div>
      </div>
    </section>
  );
}