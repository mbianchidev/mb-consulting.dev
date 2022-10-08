import React, {useState, useEffect} from "react";
import servicesData from "@constants/services";
import ServiceCard from "@custom/Cards/ServiceCard";
import Breadcrumb from "@custom/Breadcrumb/Breadcrumb";

export default function Services() {

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

  return (
    // we are avoiding any hydration warning: https://github.com/vercel/next.js/discussions/17443#discussioncomment-637879
    mounted && 
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Services
        </h1>
      </div>

      <Breadcrumb/>

      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {React.Children.toArray(servicesData.services.filter(service => service.active === true)?.map((service, serviceId) => (
            <ServiceCard
              id={serviceId}
              category={service.category}
              name={service.name}
              slug={service.slug}
              image={service.image}
              imageX={500}
              imageY={400}
              description={service.shortDescription}
              startingFromRate={service.startingFromRate}
            />
          )))}
        </div>
      </div>
    </section>
  );
}