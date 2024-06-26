import React, { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "@custom/Breadcrumb/Breadcrumb";
import ServiceCarousel from "@custom/Carousel/ServiceCarousel";

export default function Service({ service }) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const backup = console.warn;

  console.warn = function filterWarnings(msg) {
    const supressedWarnings = ['If you use CSS to change the size of your image, also include the styles'];
  
    if (!supressedWarnings.some(entry => msg.includes(entry))) {
      backup.apply(console, arguments);
    }
  };

  const smallTextStyle = "text-sm text-gray-700 mb-4 dark:text-gray-300";
  const largeTextStyle = "text-xl text-gray-700 mb-4 dark:text-gray-300";

  return (
    // we are avoiding any hydration warning: https://github.com/vercel/next.js/discussions/17443#discussioncomment-637879
    mounted ? (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          {service.category}
        </h1>
      </div>
      
      <Breadcrumb/>
      
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <span className="leading-loose text-2xl md:text-4xl font-semibold" style={{ lineHeight: "3rem" }}>
            {service.name} 
          </span>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        {/* Grid */}
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-10 gap-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Left column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-7">
            {/* Images Carousel */}
            <ServiceCarousel images={service.images}/>
            <div>
              {/* Service Description */}
              {service.description?.map((desc, serviceDescriptionId) => (
                <span key={serviceDescriptionId}>
                  <p className={largeTextStyle}>{desc}</p>
                </span>
              ))}
            </div>
          </div>
          {/* Right Column */}
          <div className="col-span 1 md:col-span-1 lg:col-span-3">
            <p className={largeTextStyle}>{service.callout}</p>
            {/*Service CTA*/}
            <Link href={ service.link ? service.link : { pathname: "/book30", query: { serviceName: service.slug} }} passHref>
              <button className="dark:bg-mb_tertiary bg-mb_quaternary rounded-md w-1/2 mx-2 mt-8 py-2 text-gray-200 dark:text-gray-200 text-xl font-bold">{service.CTA}</button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            {/* Service Rate */}
            <p className={largeTextStyle}>
              <ul>
                <li><b>Mode and timing</b> - {service.type != null? service.type : "to be discussed"}</li>
                <li><b>Cost range</b> - {service.rate != 0 ? service.rate+"*" : "to be discussed"}</li>
              </ul>
            </p>
            <br></br>
            {/* Service Disclaimers */}
            {service.offer != null ? <p className={smallTextStyle}><b>Special offer</b> - {service.offer} All terms are clarified in the agreement.</p>: null}
            {service.rate != 0 ? <p className={smallTextStyle}>* Cost and modes are defined via a signed agreement.</p>: null}
            <br></br>
          </div>
        </div>
      </div>
    </section>
    ) : null
  );
}