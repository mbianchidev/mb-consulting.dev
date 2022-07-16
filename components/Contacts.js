import React from "react";
import userData from "@constants/data";
import { useState } from 'react';
import { alertService } from "../services/alert.service";
import * as gtag from '@lib/ga'

export default function Contacts() {

  // constant containing regex email validation
  const regexEmailValidationPattern = "^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$";
  const formPlaceHolderTextStyle = "text-sm text-gray-600 mx-4 mt-4";
  const borderedTextStyle = "font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"

  const [options] = useState({
    autoClose: true,
    keepAfterRouteChange: false
  });

  async function sendEmail(e) {

    e.preventDefault();
    const formData = {};
  
    Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.name ) return;
      formData[field.name] = field.value;
    });

    gtag.event({
      action: 'submit_form',
      category: 'Contact',
      label: formData,
    });

    // resetting fields as the form is submitted
    e.currentTarget.reset();
  
    const response = await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData)
    }).then(result => result.json()).then(result => {
      if (result.success===true) {
        alertService.success(result.message, options);
      }
      alertService.error(result.message, options);
    });

  }
  
  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Let's get in touch!
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-gray-50 font-semibold text-2xl">
                Interested in one of my{" "}
                <a
                  href="/services" rel="noopener noreferrer"
                  className="text-gray-50 font-bold text-2xl border-b-2 border-gray-50"
                > services </a>?
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
            <div className="social-icons flex flex-row space-x-8">
              <a
                href={userData.socialLinks.twitter}
                target="_blank" rel="noopener noreferrer"
                className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter h-5 w-5 text-gray-50" viewBox="0 0 24 24"
              >
                <g transform="translate(4,4)">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </g>
              </svg>
              </a>
              <a
                href={userData.socialLinks.linkedin}
                target="_blank" rel="noopener noreferrer"
                className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-gray-50">
                <g transform="translate(4,4)">
                <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </g>
              </svg>
              </a>
            </div>
          </div>
          <form className="form rounded-lg bg-white p-4 flex flex-col" method="post" onSubmit={sendEmail}>
            <label htmlFor="name" className={formPlaceHolderTextStyle}>
              {" "}
              Your Name
            </label>
            <input
              type="text"
              className={borderedTextStyle}
              name="name"
              placeholder="John Doe"
              required
            />
            <label htmlFor="email" className={formPlaceHolderTextStyle}>
              Your email
            </label>
            <input
              type="text"
              className={borderedTextStyle}
              name="email"
              placeholder="john.doe@example.com"
              pattern={regexEmailValidationPattern}
              title="Emails should be in a valid format like john.doe@example.com"
              required
            />
            <label htmlFor="message" className={formPlaceHolderTextStyle}>
              Your request
            </label>
            <textarea
              rows="4"
              type="text"
              className={borderedTextStyle}
              name="message"
              placeholder="I need a ... dollar, dollar a dollar is what I need (hey hey)"
              required
            ></textarea>
            <div className="mx-4 mt-4">
              <input type="checkbox" name="consent" required/>
              <label htmlFor="consent" className={formPlaceHolderTextStyle}>
                I have read and agree to the{" "}
                <a
                  href="/privacy-policy" rel="noopener noreferrer"
                  className="text-gray-800 border-b-2 border-gray-800 font-bold"
                > privacy policy </a>{" "} of this site.
              </label>
            </div>
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
