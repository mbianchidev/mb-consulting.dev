import React, { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "@custom/Breadcrumb/Breadcrumb";
import ServiceCarousel from "@custom/Carousel/ServiceCarousel";

export default function Service({ service }) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const smallTextStyle = "text-xs text-slate-400 mb-4";
  const largeTextStyle = "text-base text-slate-300 mb-4 leading-relaxed";

  return (
    // we are avoiding any hydration warning: https://github.com/vercel/next.js/discussions/17443#discussioncomment-637879
    mounted ? (
    <section className="bg-slate-950 min-h-screen" style={{fontFamily: 'var(--font-body)'}}>
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 bg-slate-950">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center md:text-left" style={{fontFamily: 'var(--font-heading)'}}>
          {service.category}
        </h1>
      </div>
      
      <Breadcrumb/>
      
      <div className="bg-slate-900">
        <div className="text-container max-w-7xl mx-auto px-6 pt-16">
          <span className="text-xl md:text-2xl font-semibold text-slate-200 leading-relaxed" style={{fontFamily: 'var(--font-heading)'}}>
            {service.name} 
          </span>
        </div>
      </div>
      <div className="bg-slate-900 px-6 pb-20">
        {/* Grid */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-10 gap-8 max-w-7xl mx-auto">
          {/* Left column */}
          <div className="col-span-1 lg:col-span-7">
            {/* Images Carousel */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
              <ServiceCarousel images={service.images}/>
            </div>
            <div className="space-y-4">
              {/* Service Description */}
              {service.description?.map((desc, serviceDescriptionId) => (
                <p key={serviceDescriptionId} className={largeTextStyle}>{desc}</p>
              ))}
            </div>
          </div>
          {/* Right Column */}
          <div className="col-span-1 lg:col-span-3">
            <div className="bg-slate-800 rounded-2xl p-6 shadow-lg sticky top-24">
              <p className={`${largeTextStyle} font-medium`}>{service.callout}</p>
              {/*Service CTA*/}
              <Link href={ service.link ? service.link : { pathname: "/book30", query: { serviceName: service.slug} }} passHref>
                <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 rounded-xl mt-6 py-3 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">{service.CTA}</button>
              </Link>
              
              {/* Service Rate */}
              <div className="mt-8 space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-sm font-semibold text-slate-300">Mode & timing</span>
                  <span className="text-sm text-slate-400">{service.type != null? service.type : "TBD"}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-sm font-semibold text-slate-300">Cost range</span>
                  <span className="text-sm text-slate-400">{service.rate != 0 ? service.rate+"*" : "TBD"}</span>
                </div>
              </div>
              
              {/* Service Disclaimers */}
              <div className="mt-6 space-y-2">
                {service.offer != null ? <p className={smallTextStyle}><span className="font-semibold text-accent-500">Special offer</span> - {service.offer}</p>: null}
                {service.rate != 0 ? <p className={smallTextStyle}>* Cost and modes defined via signed agreement.</p>: null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    ) : null
  );
}