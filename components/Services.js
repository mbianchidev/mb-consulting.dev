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

export default function Services(props) {

  console.log(props); //TODO remove this
  
  return (
  <section className="bg-white dark:bg-gray-800">
    <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
      <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        Service
      </h1>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div className="col-span-1 md:col-span-2">
      <span>
        <p className="text-xl text-gray-700 mb-4 dark:text-gray-300" style={{textAlign : "center"}}>
          Work in progress... <a href="/contacts"> <u>Contact me</u></a> if you want to know more about my services.
        </p>
      </span>
    </div>
  </section>
  );
}
