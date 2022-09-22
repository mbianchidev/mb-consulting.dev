import React from "react";
import { useRouter } from 'next/router'
import servicesData from '@constants/services';
import Link from "next/link";

export default function Service() {
  const router = useRouter();
  return (
    <section className="bg-white dark:bg-gray-800">
    <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
      <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        Service
      </h1>
    </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <span
            className="leading-loose text-2xl md:text-4xl font-semibold"
            style={{ lineHeight: "3rem" }}
          >
            Work in progress! <br></br><br></br><br></br>
            {React.Children.toArray(servicesData.services.filter(service => service.slug === router.query.slug && service.active === true).map((service, serviceId) => (
              <ServiceSection
                serviceId={serviceId}
                name={service.name}
                description={service.description}
                cta={service.CTA}
                startingFromRate={0}
              />
            )))}
          </span>
        </div>
      </div>
    </section>
  );
}

const ServiceSection = ({ serviceId, name, description, cta, startingFromRate}) => {
  console.log(serviceId, name, description, cta, startingFromRate);
  return (
    <div id={serviceId}>
      <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        {name}
      </h1>
      <div>
        {description?.map((desc, serviceDescriptionId) => (
          <span key={serviceDescriptionId}>
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">{desc}</p>
          </span>
        ))}
        <br></br>
        <Link href="/contacts" passHref>
          <button className="bg-[#02044A] rounded-md w-1/2 mx-2 mt-8 py-2 text-gray-200 dark:text-gray-200 text-xl font-bold">{cta}</button>
        </Link>
      </div>
      <p>{startingFromRate != "0" ? startingFromRate : null}</p>
    </div>
  );
};