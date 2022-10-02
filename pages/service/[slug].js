import React from "react";
import ContainerBlock from "@components/ContainerBlock";
import Service from "@components/Service";
import servicesData from "@constants/services";

export async function getStaticPaths() {
  const servicePaths = servicesData.services.filter(service => service.active === true).map((service) => ({
    params: { slug: service.slug },
  }));
  return {
    paths: servicePaths,
    fallback: false, // 404 if not found
  }
}

export async function getStaticProps(context) {
  const service = servicesData.services.filter(service => service.slug === context.params?.slug && service.active === true);
  return {
    // Passed to the page component as props
    props: { service },
  }
}

export default function service({service}) {
  return (
    <ContainerBlock>
      <Service service={service}/>
    </ContainerBlock>
  );
}

