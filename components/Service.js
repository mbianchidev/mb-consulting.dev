const ServiceCard = ({ title, slug, serviceImage, startingFromRate, serviceDescription}) => {
    const url = `/services/${slug}`;
    return (
      <a href={url} className="w-full block shadow-2xl">
        <div className="relative overflow-hidden">
          <div className="h-72 object-cover">
            <img
              src={serviceImage}
              alt="portfolio"
              className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
            />
          </div>
          <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
            {title}
          </h1>
          <div>{serviceDescription}</div>
          <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
            {startingFromRate != "0" ? startingFromRate : null}
          </h1>
        </div>
      </a>
    );
  };

export default function Service() {
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
            <a href="/contacts" className="hover-underline-animation" style={{color : "#0A369D"}}> Contact me </a> if you want to know more about this service. 
          </span>
        </div>
      </div>
    </section>

    //ServiceCard(props.title,props.slug,props.serviceImage,props.startingFromRate,props.serviceDescription)
  );
}