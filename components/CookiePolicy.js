import React from "react";
import userData from "@constants/data";

export default function CookiePolicy() {
  return (
  <section id="cookie-policy-container" className="bg-white dark:bg-gray-800" style={{marginLeft : "10px", marginRight: "10px" }}>
      <br></br>
      <h3 className="font-light text-xl">Tracking Cookies Data</h3>
      <br></br>
      This site use cookies and similar tracking technologies (e.g. Google Tag Manager) to track the activity on the site.<br></br>
      Cookies are files with a small amount of data which may include an anonymous unique identifier.<br></br>
      Cookies are sent to your browser from a website and stored on your device.<br></br>
      You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.<br></br>
      However, if you do not accept cookies, you may not be able to use some portions of this Service.<br></br>
      <br></br>
      Cookies used:
      <br></br>
      <li>Session Cookies: Session Cookies are used to operate this Service.</li>
      <li>Preference Cookies: Preference Cookies are used to remember your preferences and various settings.</li>
      <li>Security Cookies: Security Cookies are used for security purposes.</li>
      <li>Analysis Cookies: Analysis Cookies are used to better understand user traffic flows and improve this Service accordingly.</li>
      <br></br>
      I don't use advertising cookies and there is no advertisement on this site.
      <br></br>

      <br></br>
      Cookies details:
      <br></br>
      <li>mb-consulting-dev: functional first party cookie, used to operate the service and to store your preferences (1 year)</li>
      <li>_ga: analytics third party cookie (Google.com), used to analyze this site traffic and performance (2 years)</li>
      <li>_ga_*: technical third party cookie, see _ga (2 years)</li>
      <br></br>
      
      This Cookie Policy may be updated from time to time. Any change will be posted on this page.<br></br>
      Changes to this Cookie Policy are effective when they are posted on this page.<br></br>
      For every other concern about your privacy please visit the <u><a target="_blank" rel="noopener noreferrer" href="/privacy-policy">privacy policy page</a></u>.<br></br>

      <br></br>
      <b>Contact Us</b>
      <br></br>

      If you have any questions about this Cookie Policy, please contact me at: <u>{userData.privacyMail}</u>.<br></br>
    </section>
  );
}
