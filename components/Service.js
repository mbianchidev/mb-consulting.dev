import React, {useEffect} from "react";
import { useRouter } from 'next/router'
import servicesData from '@constants/services';
import Link from "next/link";
import Image from "next/future/image";

export default function Service() {

  const backup = console.warn;

  console.warn = function filterWarnings(msg) {
    const supressedWarnings = ['If you use CSS to change the size of your image, also include the styles'];
  
    if (!supressedWarnings.some(entry => msg.includes(entry))) {
      backup.apply(console, arguments);
    }
  };

  const router = useRouter();
  const service = servicesData.services.filter(service => service.slug === router.query.slug && service.active === true);

  useEffect(() => {
    // if slug is not valid, explicitly redirect to 404 page
    if(!service[0]){
      router.push('/404');
    }
  }, []);

  return (
    <section className="bg-white dark:bg-gray-800">
      {React.Children.toArray(service?.map((service, serviceId) => (
        <ServiceSection
          serviceId={serviceId}
          slug={service.slug}
          category={service.category}
          name={service.name}
          description={service.description}
          cta={service.CTA}
          type={service.type}
          rate={service.rate}
          offer={service.offer}
          image={service.image}
          imageX={500}
          imageY={400}
          router={router}
        />
      )))}
    </section>
  );
}

const ServiceSection = ({ serviceId, slug, category, name, description, cta, type, rate, offer, image, imageX, imageY, router}) => {

  const altText = `${category} ${name} service`;
  const smallTextStyle = "text-sm text-gray-700 mb-4 dark:text-gray-300";
  const largeTextStyle = "text-xl text-gray-700 mb-4 dark:text-gray-300";

  return (
    <div id={serviceId}>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          {category}
        </h1>
      </div>
      
      {/* Back button */}
      <button className="bg-[#02044A] rounded-md w-1/8 mx-4 mt-8 py-4 px-4 text-gray-200 dark:text-gray-200 text-xl font-bold relative service__mobile-back-button" onClick={() => router.back()}>⬅️ back </button>
      
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <span className="leading-loose text-2xl md:text-4xl font-semibold" style={{ lineHeight: "3rem" }}>
            {name} 
          </span>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Service Image */}
          <Image src={image} alt={altText} layout="fill" width={imageX} height={imageY} priority/>
          <br></br>
          <div>
            {/* Service Description */}
            {description?.map((desc, serviceDescriptionId) => (
              <span key={serviceDescriptionId}>
                <p className={largeTextStyle}>{desc}</p>
              </span>
            ))}
            {/*Service CTA*/}
            <Link href={{ pathname: "/contacts", query: { serviceName: slug} }} passHref>
              <button className="bg-[#3B82F6] rounded-md w-1/2 mx-2 mt-8 py-2 text-gray-200 dark:text-gray-200 text-xl font-bold">{cta}</button>
            </Link>
          </div>
          <br></br>
          <br></br>
          {/* Service Rate */}
          <p className={largeTextStyle}><li>Mode and timing - {type}</li></p>
          <p className={largeTextStyle}><li>Cost range - {rate != 0 ? rate+"*" : "to be discussed"}</li></p>
          <p className={largeTextStyle}><li>Special offer - {offer != null ? offer+"**" : "None for now but we can work something out!"}</li></p>
          <br></br>
          {/* Service Disclaimers */}
          {rate != 0 && <p className={smallTextStyle}>* Cost range is only indicative based on the cost of similar services in the market, it will be tailored on every single agreement, based on complexity and budget needs.</p>}
          {offer != null && <p className={smallTextStyle}>** Offers are subject to company policies all clarified in the agreement.</p>}
          <br></br>
        </div>
      </div>
    </div>
  );
};