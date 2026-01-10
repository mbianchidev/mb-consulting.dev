import React from "react";
import clientsData from "@constants/clients";
import ClientCard from "@custom/Cards/ClientCard";
import Breadcrumb from "@custom/Breadcrumb/Breadcrumb";

export default function Clients() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <h1 className="text-5xl md:text-8xl font-bold text-slate-900 dark:text-white" style={{fontFamily: 'var(--font-heading)'}}>
          Clients
        </h1>
      </div>
      
      <Breadcrumb/>

      <div className="bg-slate-100 dark:bg-slate-900 py-16 pb-24">
        <div className="grid grid-cols-1 max-w-4xl mx-auto px-6">
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
                <div className="divider-container flex flex-col items-center my-8">
                  <div className="relative w-6 h-6">
                    <div className="w-6 h-6 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full absolute"></div>
                    <div className="w-6 h-6 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full absolute animate-ping"></div>
                  </div>
                  <div className="w-1 h-20 bg-gradient-to-b from-secondary-500 to-primary-500 rounded-full mt-2"></div>
                </div>
              )}
            </>
          )))}
        </div>
      </div>
    </section>
  );
}