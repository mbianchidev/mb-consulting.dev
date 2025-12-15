import React from "react";
import clientsData from "@constants/clients";
import ClientCard from "@custom/Cards/ClientCard";
import Breadcrumb from "@custom/Breadcrumb/Breadcrumb";

export default function Clients() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Clients
        </h1>
      </div>
      
      <Breadcrumb/>

      <div className="bg-white -mt-10 dark:bg-gray-900">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/*Fixes warning each child in a list should have a unique "key" prop. */}
          {React.Children.toArray(clientsData.clients.filter(client => client.show === true)?.map((client, clientId) => (
            <>
              <ClientCard
                code={client.code}
                companyName={client.companyName}
                companyType={client.companyType}
                companySector={client.companySector}
                companyLogo={client.companyLogo}
                companyLogoX={client.companyLogoX}
                companyLogoY={client.companyLogoY}
                companyUrl={client.companyUrl}
                role={client.role}
                story={client.story}
                year={client.year}
                show={client.show}
              />
              {clientId === clientsData.clients.length - 1 || client.show === false ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          )))}
        </div>
      </div>
    </section>
  );
}