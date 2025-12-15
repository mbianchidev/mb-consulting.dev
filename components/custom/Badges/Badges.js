import React from "react";
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';

export default function Badges() {

  return (
    <section className="bg-white -mt-40 dark:bg-gray-900 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-600 my-20 md:my-0 dark:text-gray-300 text-center lg:text-left">
            Badges
          </h1>

          <WebsiteCarbonBadge dark={true} co2="0.12" percentage="89" />

        </div>
      </div>
    </section>
  );
}