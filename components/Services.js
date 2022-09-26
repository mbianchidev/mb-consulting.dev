import React from "react";
import servicesData from "@constants/services";
import Image from "next/future/image";
import Link from "next/link";

export default function Services() {

  const backup = console.warn;

  console.warn = function filterWarnings(msg) {
    const supressedWarnings = ['If you use CSS to change the size of your image, also include the styles'];
  
    if (!supressedWarnings.some(entry => msg.includes(entry))) {
      backup.apply(console, arguments);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Services
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
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

const ServiceCard = ({ serviceId, category, name, slug, image, imageX, imageY, description, startingFromRate}) => {
  const url = `${servicesData.basePath}/${slug}`;
  const altText = `${category} ${name} service`;
  return (
    <Link href={url} passHref>
      <a className="w-full block shadow-2xl">
        <div id={serviceId} className="relative overflow-hidden">
          <div className="h-72 object-cover">
            <Image src={image} alt={altText} layout="fill" width={imageX} height={imageY} className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full" />
          </div>
          <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
            {category} - {name}
          </h1>
          <div>
            {description}
          </div>
          <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
              {startingFromRate != "0" ? startingFromRate : null}
          </h1>
        </div>
      </a>
    </Link>
  );
};