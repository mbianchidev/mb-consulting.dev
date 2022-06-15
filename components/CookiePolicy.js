import React from "react";
import userData from "@constants/data";

export default function CookiePolicy() {
  return (
  <section id="policy-container" className="bg-white dark:bg-gray-800" style={{marginLeft : "10px", marginRight: "10px" }}>
      <h1 className="font-bold text-xl" style={{textAlign : "center"}}>Introduction</h1>
      Welcome to my website. 
      <br></br>
      <br></br>
      I, {userData.name} (I still use 2nd person since it's more instituitional), operate {userData.domain} (hereinafter referred to as <b>"Service"</b>).<br></br>
      Our Privacy Policy governs your visit to <u><a target="_blank" rel="noopener noreferrer" href="/policy">https://{userData.domain}/policy</a></u> it explains how we collect, safeguard and disclose information that results from your use of our Service.<br></br>
      We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy.<br></br>
      Our Terms and Conditions (<b>"Terms"</b>) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (<b>"Agreement"</b>).<br></br>
      <br></br>

      <b>Cookies</b>
      <br></br>
      <br></br>
      Cookies are small files stored on your device (computer or mobile device).<br></br> 
      
      <br></br>
      <h1 className="font-bold text-xl" style={{textAlign : "center"}}>Information Collection and Use</h1>
      <br></br>

      We collect several few information for analytics purposes to provide and improve our Service to you.

      <br></br>
      <h3 className="font-light text-xl">Tracking Cookies Data</h3>
      <br></br>

      We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.<br></br>
      Cookies are files with a small amount of data which may include an anonymous unique identifier.<br></br>
      Cookies are sent to your browser from a website and stored on your device.<br></br>
      Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.<br></br>
      You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.<br></br>
      However, if you do not accept cookies, you may not be able to use some portions of our Service.<br></br>
      <br></br>
      Cookies we use:
      <br></br>
      <li>Session Cookies (technical): We use Session Cookies to operate our Service.</li>
      <li>Preference Cookies (technical): We use Preference Cookies to remember your preferences and various settings.</li>
      <li>Security Cookies (technical): We use Security Cookies for security purposes.</li>

      <li>Analytics Cookies (analytics): Analytics Cookies are used to generate reports useful to improve the service and do statistical analysis to improve the content provided.</li>

      <br></br>
      <h2 className="font-semibold text-xl">Retention of Data</h2>
      <br></br>

      We will retain your cookies only for as long as is necessary for the purposes set out in this Cookie Policy.<br></br>
      We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, maximum 6 months.<br></br>

      <br></br>
      <h2 className="font-semibold text-xl">Security of Cookies Data</h2>
      <br></br>

      The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.<br></br> 
      While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.<br></br>

      <br></br>
      <h1 className="font-bold text-xl" style={{textAlign : "center"}}>Your Data Protection Rights Under General Data Protection Regulation (GDPR)</h1>
      <br></br>

      If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR.<br></br> 
      – See more at <u><a target="_blank" rel="noopener noreferrer" href="https://eur-lex.europa.eu/eli/reg/2016/679/oj">https://eur-lex.europa.eu/eli/reg/2016/679/oj</a></u><br></br>
      
      <br></br>
      <h1 className="font-bold text-xl" style={{textAlign : "center"}}>Behavioral Remarketing</h1>
      <br></br>

      We don't use remarketing services to advertise on third party websites to you after you visited our Service.<br></br>  
      
      <br></br>
      <h1 className="font-bold text-xl" style={{textAlign : "center"}}>Changes to This Cookie Policy</h1>
      <br></br>

      We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.<br></br>
      We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update "effective date" at the top of this Cookie Policy.<br></br>
      You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.<br></br>

      <br></br>
      <b>Contact Us</b>
      <br></br>

      If you have any questions about this Cookie Policy, please contact us by email: <u>{userData.privacyMail}</u>.<br></br>
    </section>
  );
}
