import React, {useState, useEffect} from "react";
import servicesData from "@constants/services";
import ServiceCard from "@custom/Cards/ServiceCard";
import Breadcrumb from "@custom/Breadcrumb/Breadcrumb";

export default function Services() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    // we are avoiding any hydration warning: https://github.com/vercel/next.js/discussions/17443#discussioncomment-637879
    mounted ? (
    <section className="bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <h1 className="text-5xl md:text-8xl font-bold text-slate-900 dark:text-white" style={{fontFamily: 'var(--font-heading)'}}>
          Services
        </h1>
      </div>

      <Breadcrumb/>

      {/* Grid starts here */}
      <div className="bg-slate-100 dark:bg-slate-900 py-16 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {React.Children.toArray(servicesData.services.filter(service => service.active === true)?.map((service, serviceId) => (
            <ServiceCard
              id={serviceId}
              category={service.category}
              name={service.name}
              slug={service.slug}
              image={service.coverImage}
              imageX={500}
              imageY={400}
              description={service.shortDescription}
              startingFromRate={service.startingFromRate}
            />
          )))}
        </div>
      </div>
    </section>
    ) : null
  );
}