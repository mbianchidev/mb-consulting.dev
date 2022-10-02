import React, { useState, useEffect } from "react";
import userData from "@constants/data";
import servicesData from "@constants/services";
import { useRouter } from 'next/router'
import { alertService } from "../services/alert.service";
import * as gtag from '@lib/ga'
import BackButton from "./custom/BackButton/BackButton";
import SocialElement from "./custom/SocialElement/SocialElement";

export default function Contacts() {

  // constant containing regex email validation
  const regexEmailValidationPattern = "^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$";
  const regexNameValidationPattern = "^.{3,}$";
  const regexCaptchaValidationPattern = "^(42|420|69|143)$"
  const formPlaceHolderTextStyle = "text-sm text-gray-600 mx-4 mt-4";
  const borderedTextStyle = "font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"

  // State variables -> used mainly for select and alert
  const {query} = useRouter();
  const router = useRouter();

  let selectedService = query.serviceName;
  if (!selectedService){
    selectedService = "other-services";
  }

  const [parent, setParent] = useState(selectedService);

  useEffect(() => {
    const href = `/contacts?serviceName=${selectedService}`;
    router.push(href, href, { shallow: true })
    setParent(selectedService);
  }, [selectedService, query.serviceName]);

  function onChange (event) {
    const href = `/contacts?serviceName=${event.target.value}`;
    setParent(event.target.value);
    // update the url based on selected service
    router.push(href, href, { shallow: true })
  }

  const [options] = useState({
    autoClose: true,
    keepAfterRouteChange: false
  });

  // Mail API Call
  async function sendEmail(event) {
  
    event.preventDefault();
    const formData = {};
  
    Array.from(event.currentTarget.elements).forEach(field => {
      if ( !field.name ) return;
      formData[field.name] = field.value;
    });
  
    // in case of random post request to /api/mail without data (should never be possible since the form is required)
    if (!formData) {
      alertService.error("Error, no data found in form", options);
      return;
    }
  
    gtag.event({
      action: 'submit_form',
      category: 'Contact',
      label: formData,
    });
  
    // resetting fields as the form is submitted
    event.currentTarget.reset();
  
    await fetch('/api/mail', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .catch((err) => {
      alertService.error('Error!'+ err + ' (please resend the message to '+userData.email+')' , options);
    })
    .then(result => {
      if (result) {
        alertService.success("Message sent! I will reply ASAP :)", options);
      } else {
        alertService.error("Ops! There was an error, please resend the message to "+userData.email, options);
      }
    });
  
  }
  
  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Let's get in touch!
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#050e96] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-gray-50 font-semibold text-2xl">
                Interested in my{" "}
                <a href="/services" rel="noopener noreferrer" className="text-gray-800 font-bold dark:text-gray-300 hover-underline-animation" style={{color : "#3B82F6"}}> 
                services 
                </a>?
              </h1>
              <p className="font-light text-base text-gray-200 mt-2">
                Fill in the details and I'll get back to you as soon as possible.
              </p>
            </header>
            {/* Social Buttons */}
            <div className="icons-container inline-flex flex-col my-20">
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {userData.email}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {userData.address}
                </p>
              </div>
            </div>

            <SocialElement twitter="true" linkedin="true"/>
            
          </div>
          {/* Contact Form */}
          <form className="form rounded-lg bg-white p-4 flex flex-col" method="post" onSubmit={sendEmail}>
            {/* Name */}
            <label htmlFor="name" className={formPlaceHolderTextStyle}>
              {" "}
              Your Name
            </label>
            <input
              type="text"
              className={borderedTextStyle}
              name="name"
              placeholder="John Doe"
              pattern={regexNameValidationPattern}
              title="What is your name again? - Blink 183"
              required
            />
            {/* Email */}
            <label htmlFor="email" className={formPlaceHolderTextStyle}>
              Your email
            </label>
            <input
              type="text"
              className={borderedTextStyle}
              name="email"
              placeholder="john.doe@example.com"
              pattern={regexEmailValidationPattern}
              title="Remember that the email should be a valid one and in a format like john.doe@example.com (no plus-aliases allowed, sorry)"
              required
            />
            {/* Select service */}
            <label htmlFor="serviceName" className={formPlaceHolderTextStyle}>
              Select a service
            </label>
            <select name="serviceName" value={parent} className={borderedTextStyle} onChange={(event) => onChange(event)}>
              {servicesData.services.filter(service => service.active === true)?.map((service, serviceId) => (
                <option key={serviceId} value={service.slug}>{service.category} - {service.name}</option>
              ))}
            </select>
            {/* Message */}
            <label htmlFor="message" className={formPlaceHolderTextStyle}>
              Your request
            </label>
            <textarea
              rows="4"
              type="text"
              className={borderedTextStyle}
              name="message"
              placeholder="I need a ... dollar, dollar a dollar is what I need (hey hey)"
              title="Try to be specific about your need (use a few words)"
              minLength={30}
              maxLength={500}
              required
            />
            {/* Captcha */}
            <label htmlFor="captcha" className={formPlaceHolderTextStyle}>
              41+1=? (just to make sure you are not a robot)
            </label>
            <input
              type="text"
              className={borderedTextStyle}
              name="captcha"
              placeholder="the Answer to the Ultimate Question of Life, the Universe, and Everything"
              pattern={regexCaptchaValidationPattern}
              title="Have you read the Hitchhiker's Guide to the Galaxy?"
              required
            />
            <div className="mx-4 mt-4">
              {/* Checkbox */}
              <input 
                type="checkbox" 
                name="consent" 
                title="Please, agree to the privacy policy or else... Nothing, you just can't submit a request without it, sorry!"
                required
              />
              <label htmlFor="consent" className={formPlaceHolderTextStyle}>
                I have read and agree to the{" "}
                <a
                  href="/privacy-policy" rel="noopener noreferrer" target="_blank"
                  className="text-gray-800 border-b-2 border-gray-800 font-bold"
                >privacy policy</a>{" "} of this site.
              </label>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
