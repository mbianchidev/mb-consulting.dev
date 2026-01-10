import React from "react";
import SocialElement from "@custom/Social/SocialElement";
import ContactExtraInfo from "@custom/Info/ContactExtraInfo";
import ContactForm from "@custom/Forms/ContactForm";

export default function Contacts() {

  return (
    <section className="bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 antialiased">
        <h1 className="text-5xl md:text-8xl font-bold text-slate-900 dark:text-white" style={{fontFamily: 'var(--font-heading)'}}>
          Let's get in touch!
        </h1>
      </div>
      <div className="bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 relative z-10 rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:ml-4">
            <header className="mb-8">
              <h1 className="text-white font-bold text-3xl md:text-4xl mb-4" style={{fontFamily: 'var(--font-heading)'}}>
                One step closer to your problem solved!
              </h1>
              <p className="font-normal text-lg text-white/90 leading-relaxed">
                Fill in the details and I'll get back to you in no time.
              </p>
            </header>
            {/* Email/Address */}
            <ContactExtraInfo pin="true" mail="true"/>
            {/* Socials */}
            <div className="mt-8">
              <SocialElement twitter="true" telegram="true" linkedin="true" hideIfMobile="true"/>
            </div>
          </div>
          {/* Contact Form */}
          <ContactForm/>
        </div>
      </div>
    </section>
  );
}
