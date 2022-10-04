import React from "react";
import userData from "@constants/data";
import Breadcrumb from "./custom/Breadcrumb/Breadcrumb";

export default function CookiePolicy() {
  const mailTo = "mailto:"+userData.privacyMail;
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

          <h1 className="font-bold text-xl" style={{textAlign : "center"}}>Tracking Cookies Data</h1>
          <br></br>
          <div className="text-xl text-gray-700 mb-4 dark:text-gray-300">
            First of all, in case you don't accept cookies you will still be able to use this site without limitations.
            <br></br>
            However, only if you'll allow it, this site uses cookies and similar tracking technologies (e.g. <u><a target="_blank" rel="noopener noreferrer" href="https://support.google.com/tagmanager/answer/6102821?hl=en ">Google Tag Manager</a></u>) to track the activity on the site.<br></br>
            Cookies are files with a small amount of data which may include an anonymous unique identifier.<br></br>
            Cookies are sent to your browser from a website and stored on your device.<br></br>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.<br></br><br></br>
            Here are some pages you might find useful for disabling cookies:<br></br>
            <li> <u><a target="_blank" rel="noopener noreferrer" href="https://support.microsoft.com/en-us/search?query=disable%20cookies%20in%20microsoft%20edge"> Edge </a></u> </li>
            <li> <u><a target="_blank" rel="noopener noreferrer" href="https://support.google.com/accounts/answer/61416?hl=en&co=GENIE.Platform%3DDesktop"> Chrome </a></u> </li> 
            <li> <u><a target="_blank" rel="noopener noreferrer" href="https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox"> Firefox </a></u> </li>
            <li> <u><a target="_blank" rel="noopener noreferrer" href="http://docs.info.apple.com/article.html?path=Safari/5.0/en/9277.html"> Safari </a></u> </li>
            <br></br>
            If you use other browsers like <u><a target="_blank" rel="noopener noreferrer" href="https://brave.com/"> Brave</a></u> or search engines like <u><a target="_blank" rel="noopener noreferrer" href="https://duckduckgo.com/ ">DuckDuckGo</a></u>, please consult their websites for more information.
            <br></br>
            You can disable Google Analytics too, you can find the instructions to do so in this <u><a href="https://tools.google.com/dlpage/gaoptout/">GA optout guide by Google</a></u> .
          </div>

          <h1 className="font-bold text-xl" style={{textAlign : "center"}}>Cookies used</h1>
          <br></br>
          <div className="text-xl text-gray-700 mb-4 dark:text-gray-300">
            <li>Session Cookies: Session Cookies are used to operate this Service.</li>
            <li>Preference Cookies: Preference Cookies are used to remember your preferences and various settings.</li>
            <li>Security Cookies: Security Cookies are used for security purposes.</li>
            <li>Analysis Cookies: Analysis Cookies are used to better understand user traffic flows and improve this Service accordingly.</li>
            <br></br>
            I don't use advertising cookies and there is no advertisement on this site.
          </div>

          <h1 className="font-bold text-xl" style={{textAlign : "center"}}>Cookies details</h1>
          <br></br>
          <div className="text-xl text-gray-700 mb-4 dark:text-gray-300">
            <li>mb-consulting-dev: functional first party cookie, used to operate the service and to store your preferences (1 year)</li>
            <li>_ga: analytics third party cookie (Google.com), used to analyze this site traffic and performance (2 years)</li>
            <li>_ga_*: technical third party cookie, identifies my Google Analytics account (2 years)</li>
            <br></br>
            This Cookie Policy may be updated from time to time. Any change will be posted on this page.<br></br>
            Changes to this Cookie Policy are effective when they are posted on this page.<br></br>
            For every other concern about your privacy please visit the <u><a target="_blank" rel="noopener noreferrer" href="/privacy-policy">privacy policy page</a></u>.<br></br>
          </div>  

          <h1 className="font-bold text-xl" style={{textAlign : "center"}}>Contact me</h1>
          <br></br>
          <div className="text-xl text-gray-700 mb-4 dark:text-gray-300">
            If you have any questions about this Cookie Policy, please contact me at <a href={mailTo}><u>privacy@mb-consulting.dev</u></a>.
          </div>

        </div>
      </div>
    </section>
  );
}