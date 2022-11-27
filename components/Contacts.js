import React from "react";
import SocialElement from "@custom/Social/SocialElement";
import ContactExtraInfo from "@custom/Info/ContactExtraInfo";
import ContactForm from "@custom/Forms/ContactForm";

export default function Contacts() {

  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Let's get in touch!
        </h1>
      </div>
      <div className="dark:bg-mb_primary bg-mb_secondary relative z-10 rounded-md shadow-md p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="dark:text-gray-50 font-semibold text-2xl">
                One step closer to your problem solved!
              </h1>
              <p className="font-light text-base dark:text-gray-200 mt-2"> Fill in the details and I'll get back to you in no time. </p>
            </header>
            {/* Email/Address */}
            <ContactExtraInfo pin="true" mail="true"/>
            {/* Socials */}
            <SocialElement twitter="true" telegram="true" linkedin="true" hideIfMobile="true"/>
          </div>
          {/* Contact Form */}
          <ContactForm/>
        </div>
      </div>
    </section>
  );
}
