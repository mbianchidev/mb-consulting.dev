import React from "react";
import userData from "@constants/data";

export default function Clients() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Clients
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/*Fixes warning each child in a list should have a unique "key" prop. */}
          {React.Children.toArray(userData.clients.filter(client => client.show === true).map((client, clientId) => (
            <>
              <ClientCard
              code={client.code}
              companyName={client.companyName}
              companyType={client.companyType}
              companySector={client.companySector}
              companyLogo={client.companyLogo}
              companyUrl={client.companyUrl}
              role={client.role}
              story={client.story}
              year={client.year}
              show={client.show}
            />
            {clientId === userData.clients.length - 1 || client.show === false ? null : (
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

const ClientCard = ({code, companyName, companyType, companySector, companyLogo, companyUrl, role, story, year }) => {
    return (
      <div id={code} className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
        <img src={companyLogo}></img>
        <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-500 font-bold dark:text-gray-500">
        {year}
        </h1>
        <h1 className="font-semibold text-xl">{role}</h1>
        <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500">
          {companyName} - {companySector} ({companyType})
        </a>
        <p className="text-gray-600 dark:text-gray-400 my-2">{story}</p>
      </div>
    );
};
