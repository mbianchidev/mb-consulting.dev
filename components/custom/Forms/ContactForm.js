import React, {useState, useEffect} from "react";
import { useRouter } from 'next/router';
import { alertService } from "@services/alert.service";
import * as gtag from '@lib/ga';
import mailData from "@constants/mail";
import servicesData from "@constants/services";
import Link from "next/link";

export default function ContactForm() {

  const regexEmailValidationPattern = "^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$";
  const regexPhoneValidationPattern = "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$";
  const regexNameValidationPattern = "^.{3,}$";
  const regexCaptchaValidationPattern = "^(42|420|69|143)$"
  const formPlaceHolderTextStyle = "text-sm text-gray-600 font-semibold mx-4 mt-4";
  const borderedTextStyle = "font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500";

  // State variables -> used mainly for select and alert
  const {query} = useRouter();
  const router = useRouter();

  let selectedService = query.serviceName;
  if (!selectedService){
    selectedService = "mentoring-services";
  }

  const [parent, setParent] = useState(selectedService);
  
  const [options] = useState({
    autoClose: true,
    keepAfterRouteChange: false,
    alerts: [],
  });

  useEffect(() => {
    const href = `/contacts?serviceName=${selectedService}`;
    router.push(href, href, { shallow: true })
    setParent(selectedService);
  }, [selectedService, query.serviceName]);

  function onChange (event) {
    const serviceName = encodeURIComponent(event.target.value);
    const href = `/contacts?serviceName=${serviceName}`;
    setParent(event.target.value);
    // update the url based on selected service
    router.push(href, href, { shallow: true })
  }

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
      alertService.error('Error!'+ err + ' (please resend the message to '+mailData.email+')' , options);
    })
    .then(result => {
      if (result) {
        alertService.success("Message sent! I will reply ASAP :)", options);
      } else {
        alertService.error("Ops! There was an error, please resend the message directly to "+mailData.email, options);
      }
    });
  
  }

  return (
    <form className="form rounded-lg bg-white p-4 flex flex-col" method="post" onSubmit={sendEmail}>
      {/* Name */}
      <label htmlFor="name" className={formPlaceHolderTextStyle}>
        {" "}
        Your Name *
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
        Your email *
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
      {/* Phone number */}
      <label htmlFor="phone" className={formPlaceHolderTextStyle}>
        Your phone number
      </label>
      <input
        type="text"
        className={borderedTextStyle}
        name="phone"
        placeholder="Please include the country code (+39, +44, +316, etc.)"
        pattern={regexPhoneValidationPattern}
        title="Remember that the phone number should be a valid one and in a format like +39 123 456 7890"
        required={false}
      />
      {/* Select reason */}
      <label htmlFor="reason" className={formPlaceHolderTextStyle}>
        How did you find me?
      </label>
      <select name="reason" defaultValue="OTHER" className={borderedTextStyle}>
        <option key="ad" value="GOOGLE_AD">via Google/Youtube Advertisement</option>
        <option key="srch" value="GOOGLE_SEARCH">via Google Search</option>
        <option key="lkdn" value="LINKEDIN">On LinkedIn</option>
        <option key="ref" value="REFERRAL">Someone recommended your services</option>
        <option key="oth" value="OTHER">Just somewhere</option>
      </select>
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
        Your request *
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
        Captcha 41+1=? (just to make sure you are not a robot)
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
          <Link
            href="/privacy-policy" rel="noopener noreferrer" target="_blank"
            className="text-gray-800 border-b-2 border-gray-800 font-bold"
          >privacy policy</Link>{" "} of this site.
        </label>
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="dark:bg-mb_tertiary bg-mb_quaternary rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
      >
        Send
      </button>
    </form>
  );
}
