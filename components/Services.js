import React from "react";

import getAllServices from "@lib/graphql/queries/getAllServices";


export async function getStaticProps() {
  const  services = await getAllServices();
  return {
    props: { 
      services 
    },
  };
}

export default function Services() {
  console.log(props.services);
  return (
    <section className="bg-white dark:bg-gray-800">
    <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
      <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        Available Services
      </h1>
    </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <span
            className="leading-loose text-2xl md:text-4xl font-semibold"
            style={{ lineHeight: "3rem" }}
          >
            Work in progress! <br></br><br></br><br></br>
            <a href="/contacts"> <u>Contact me</u></a> if you want to know more about my available services. 
          </span>
        </div>
      </div>
    </section>
  );
}
