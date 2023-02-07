import React from "react";
import mailData from "@constants/mail";
import Breadcrumb from "@custom/Breadcrumb/Breadcrumb";
import CookieConsent, { Cookies, resetCookieConsentValue } from "react-cookie-consent";
import Link from "next/link";

export default function CookiePolicy() {
  const mailTo = "mailto:"+mailData.privacyMail;
  return (
    <section id="cookie-policy-container" className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Cookie Policy
        </h1>
      </div>

      <Breadcrumb/>

      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container mx-auto pt-20" style={{marginLeft : "10px"}}>
          
          <h1 className="font-bold text-xl" style={{textAlign : "center"}}>Reset cookie consent</h1>
          <br></br>
          <div>
            <p className="text-xl text-gray-700 dark:text-gray-300">You can reset consent by clicking on this button.</p>
            <br></br>
            <button className="dark:bg-mb_tertiary bg-mb_quaternary rounded-md mx-2 mt-8 py-2 px-2 text-gray-200 dark:text-gray-200 text-xl font-bold" onClick={() => {
              resetCookieConsentValue("mb-consulting-dev");
              Cookies.remove("_ga");
              Cookies.remove("_gat");
              Cookies.remove("_gid")
              Cookies.remove("_ga_B11MCGL84K");             
              window.location.reload();
            }}>
              Reset consent
            </button>
            <br></br>
            <p className="text-sm">You can also reset your consent at any time by deleting the cookies stored in your browser. You can find out how to do this in the help function of your browser.</p>
          </div>
          <br></br>

          <h1 className="font-bold text-xl" style={{textAlign : "center"}}>Tracking Cookies Data</h1>
          <br></br>
          <div className="text-xl text-gray-700 mb-4 dark:text-gray-300">
            First of all, in case you don't accept cookies you will still be able to use this site without limitations.
            <br></br>
            However, only if you'll allow it, this site uses cookies and similar tracking technologies (e.g. <u><Link target="_blank" rel="noopener noreferrer" href="https://support.google.com/tagmanager/answer/6102821?hl=en ">Google Tag Manager</Link></u>) to track the activity on the site.<br></br>
            Cookies are files with a small amount of data which may include an anonymous unique identifier.<br></br>
            Cookies are sent to your browser from a website and stored on your device.<br></br>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.<br></br><br></br>
            Here are some pages you might find useful for disabling cookies:<br></br>
            <ul>
              <li> <u><Link target="_blank" rel="noopener noreferrer" href="https://support.microsoft.com/en-us/search?query=disable%20cookies%20in%20microsoft%20edge"> Edge </Link></u> </li>
              <li> <u><Link target="_blank" rel="noopener noreferrer" href="https://support.google.com/accounts/answer/61416?hl=en&co=GENIE.Platform%3DDesktop"> Chrome </Link></u> </li> 
              <li> <u><Link target="_blank" rel="noopener noreferrer" href="https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox"> Firefox </Link></u> </li>
              <li> <u><Link target="_blank" rel="noopener noreferrer" href="http://docs.info.apple.com/article.html?path=Safari/5.0/en/9277.html"> Safari </Link></u> </li>
            </ul>
            <br></br>
            If you use other browsers like <u><Link target="_blank" rel="noopener noreferrer" href="https://brave.com/"> Brave</Link></u> or search engines like <u><Link target="_blank" rel="noopener noreferrer" href="https://duckduckgo.com/ ">DuckDuckGo</Link></u>, please consult their websites for more information.
            <br></br>
            You can disable Google Analytics too, you can find the instructions to do so in this <u><Link href="https://tools.google.com/dlpage/gaoptout/">GA optout guide by Google</Link></u> .
          </div>

          <h1 className="font-bold text-xl" style={{textAlign : "center"}}>Cookies used</h1>
          <br></br>
          <div className="text-xl text-gray-700 mb-4 dark:text-gray-300">
            <ul>
              <li>Session Cookies: Session Cookies are used to operate this Service.</li>
              <li>Preference Cookies: Preference Cookies are used to remember your preferences and various settings.</li>
              <li>Security Cookies: Security Cookies are used for security purposes.</li>
              <li>Analysis Cookies: Analysis Cookies are used to better understand user traffic flows and improve this Service accordingly.</li>
            </ul>
            <br></br>
            We don't use advertising cookies and there is no advertisement on this site.
          </div>

          <h1 className="font-bold text-xl" style={{textAlign : "center"}}>Cookies details</h1>
          <br></br>
          <div className="text-xl text-gray-700 mb-4 dark:text-gray-300">
            <ul>
              <li>mb-consulting-dev: functional first party cookie, used to operate the service and to store your preferences (1 year)</li>
              <li>_ga: analytics third party cookie (Google.com), used to analyze this site traffic and performance (2 years)</li>
              <li>_ga_*: technical third party cookie, identifies our Google Analytics account (2 years)</li>
            </ul>
            <br></br>
            This Cookie Policy may be updated from time to time. Any change will be posted on this page.<br></br>
            Changes to this Cookie Policy are effective when they are posted on this page.<br></br>
            For every other concern about your privacy please visit the <u><Link target="_blank" rel="noopener noreferrer" href="/privacy-policy">privacy policy page</Link></u>.<br></br>
          </div>  

          <h1 className="font-bold text-xl" style={{textAlign : "center"}}>Contact me</h1>
          <br></br>
          <div className="text-xl text-gray-700 mb-4 dark:text-gray-300">
            If you have any questions about this Cookie Policy, please contact me at <Link href={mailTo}><u>{mailData.privacyMail}</u></Link>.
          </div>

        </div>
      </div>
    </section>
  );
}