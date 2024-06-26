import React from "react";
import userData from "@constants/data";
import mailData from "@constants/mail";
import Breadcrumb from "@custom/Breadcrumb/Breadcrumb";
import Link from "next/link";

export default function PrivacyPolicy() {
  const mailTo = "mailto:"+mailData.privacyMail;
  const h1TextStyle = "font-bold text-xl";
  const h2TextStyle = "font-semibold text-xl";
  const h3TextStyle = "font-light text-xl";
  const normalTextStyle = "text-xl text-gray-700 mb-4 dark:text-gray-300";

  return (
    <section id="privacy-policy-container" className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Privacy Policy
        </h1>
      </div>

      <Breadcrumb/>

      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container mx-auto pt-20" style={{marginLeft : "10px"}}>

          <h1 className={h1TextStyle} style={{textAlign : "center"}}>Introduction</h1>
          <br></br>
          <div className={normalTextStyle}>
            Welcome to my website. 
            <br></br>
            <br></br>
            I, {userData.name}, operate {userData.domain} (hereinafter referred to as <b>"Service"</b>).<br></br>
            This Privacy Policy governs your visit to my site, It explains how I collect, safeguard and disclose information that results from your use of this Service.<br></br>
            Your data, if you allow it, will be used anonymously to analyze traffic and interaction on this site. By using the Service, you agree to the collection and use of information in accordance with this policy.<br></br>
            <br></br>

            <b>Definitions</b>
            <br></br>
            <br></br>
            <b>SERVICE</b> means the {userData.domain} website operated by {userData.name}.<br></br>
            <b>DATA</b> is structured information about you or the User, including Personal Data.<br></br>
            <b>PERSONAL DATA</b> means data about a living individual who can be identified from those data (or from those and other information either in my possession or likely to come into my possession).<br></br>
            <b>USAGE DATA</b> is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).<br></br>
            <b>COOKIES</b> are small text files stored locally on your device (computer or mobile device).<br></br>
            <b>DATA CONTROLLER</b> means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, I am a Data Controller of your data.<br></br>
            <b>DATA PROCESSORS DATA PROCESSORS (OR SERVICE PROVIDERS)</b> means any natural or legal person who processes the data on behalf of the Data Controller. Services of various Service Providers are used in order to process your data more effectively.<br></br>
            <b>DATA SUBJECT</b> is any living individual who is the subject of Personal Data.<br></br>
            <b>THE USER</b> is the individual using this Service. The User corresponds to the Data Subject, who is the subject of Personal Data.<br></br> 
          </div>

          <h1 className={h1TextStyle} style={{textAlign : "center"}}>Information Collection and Use</h1>
          <br></br>
          <div className={normalTextStyle}>
            Different types of information are collected for analyzing the use of the Service. The information that is collected is:<br></br>
            <br></br>
            <h2 className={h2TextStyle}>Types of Data Collected</h2>
            <br></br>

            <h3 className={h3TextStyle}>Personal Data</h3>
            <br></br> 

            While using this Service, I may ask you to provide me with certain personally identifiable information that can be used to contact or identify you (<b>"Personal Data"</b>). <br></br>
            Personally identifiable information may include, but is not limited to:<br></br>
            <ul>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Cookies and Usage Data</li>
            </ul>
            <br></br>
            Your Personal Data won't be used to contact you with newsletters, marketing or promotional materials unless you asked for it explicitly. <br></br>
            In any case you may opt out of receiving any, or all, of these communications from the site by following the unsubscribe link provided automatically.<br></br>
            In no case your email address will be surrendered voluntarily to third parts.<br></br>

            <br></br> 
            <h3 className={h3TextStyle}>Usage Data</h3>   
            <br></br>

            Information that your browser sends whenever you visit this Service are collected also when you access through a mobile device (<b>"Usage Data"</b>).<br></br>
            This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, pages that you visit, time and date of your visit, time spent on those pages, unique device identifiers and other diagnostic data.<br></br>
            When you visit with a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.<br></br>
            I strongly advise you to use a VPN service to protect your privacy and navigate possibly with privacy enforcing browsers and services such as <u><Link target="_blank" rel="noopener noreferrer" href="https://www.torproject.org">Tor</Link></u>.<br></br>

            <br></br>
            <h3 className={h3TextStyle}>Tracking Cookies Data</h3>
            <br></br>
            
            Visit my <u><Link target="_blank" rel="noopener noreferrer" href="/cookie-policy">Cookie Policy page</Link></u> to learn more about cookies and how I use them.<br></br>

            <br></br>
            <h2 className={h2TextStyle}>Use of Data</h2>
            <br></br>

            The collected data can be used for various purposes:
            <br></br>
            <ul>
              <li>to provide and maintain this Service;</li>
              <li>to notify you about changes to parts of this Service;</li>
              <li>to gather analysis or valuable information so that I can improve this Service;</li>
              <li>to monitor the usage of this Service;</li>
              <li>to detect, prevent and address technical issues;</li>
              <li>to fulfill any other purpose for which you provide it;</li>
              <li>to carry out my obligations and enforce my rights arising from any contracts entered into between you and me, including for billing and collection;</li>
              <li>to provide you with news, special offers and general information about other goods, services and events which I offer that are similar to those that you have already purchased or enquired about (only if you have opted to receive such information);</li>
              <li>in any other way it is described when you provide the information;</li>
              <li>for any other purpose with your explicit consent.</li>
            </ul>
            <br></br>
            <h2 className={h2TextStyle}>Retention of Data</h2>
            <br></br>

            Your Personal Data will be retained only for as long as is necessary for the purposes set out in this Privacy Policy.<br></br>
            Your Personal Data will be retained to the extent necessary to comply with my legal obligations<br></br>
            (for example, if I am required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.<br></br>
            Usage Data will be retained only for internal analysis purposes.<br></br>
            Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of this Service, or I am legally obligated to retain this data for longer time periods.<br></br>

            <br></br> 
            <h2 className={h2TextStyle}>Transfer of Data</h2>
            <br></br>

            Your information, including Personal Data, may be transferred to – and maintained on – physical supports (hardware) located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.<br></br>
            Please note that the data are transferred, including Personal Data, to United States (US) and process it there but it could be stored in various countries based on the technology in use.<br></br>
            Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.<br></br>
            All the steps reasonably necessary will be taken to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.<br></br>

            <br></br>
            <h2 className={h2TextStyle}>Disclosure of Data</h2>
            <br></br>

            I may disclose personal information that I collect, or you provide.<br></br>

            <br></br>
            <h3 className={h3TextStyle}>Disclosure for Law Enforcement.</h3>
            <br></br>

            I am going to disclose your Personal Data if required to do so by law only if I am presented with a valid request by a democratic country and if my legal department validates this request. In any case you will be informed.<br></br> 

            <br></br>
            <h3 className={h3TextStyle}>Other cases. I may disclose your information also:</h3>
            <br></br>
            <ul>
              <li>to my affiliates;</li>
              <li>to contractors, service providers, and other third parties used to support my business;</li>
              <li>to fulfill the purpose for which you provide it (e.g. consultancy requests);</li>
              <li>for any other purpose disclosed by me when you provide the information;</li>
              <li>with your consent in any other cases;</li>
              <li>if I believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company.</li>
            </ul>
            <br></br>
            <h2 className={h2TextStyle}>Security of Data</h2>
            <br></br>

            The security of your data is important to me but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.<br></br> 
            While I strive to use commercially acceptable means to protect your Personal Data, I cannot guarantee its absolute security.<br></br>
            In case of data breaches or hacks, I will notify you as soon as possible while taking appropriate actions to protect your data and legally prosecute the entity responsible for the attack.<br></br>
          </div>
          
          <h1 className={h1TextStyle} style={{textAlign : "center"}}>Your Data Protection Rights Under General Data Protection Regulation (GDPR)</h1>
          <br></br>
          <div className={normalTextStyle}>
            If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR.<br></br> 
            – See more at <u><Link target="_blank" rel="noopener noreferrer" href="https://eur-lex.europa.eu/eli/reg/2016/679/oj">eur-lex europa site</Link></u>.<br></br>
            I aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.<br></br>
            If you wish to be informed what Personal Data I hold about you and if you want it to be removed from my system, please contact me at: <Link href={mailTo}><u>privacy@mb-consulting.dev</u></Link>.<br></br>
            You have the following data protection rights (even when living outside EU):<br></br>
            <ul>
              <li>the right to access, update or to delete the information I have on you;</li>
              <li>the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;</li>
              <li>the right to object. You have the right to object to the processing of your Personal Data;</li>
              <li>the right of restriction. You have the right to request that the processing of your personal information is restricted;</li>
              <li>the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;</li>
              <li>the right to withdraw consent. You also have the right to withdraw your consent at any time where I rely on your consent to process your personal information;</li>
            </ul>
            <br></br> 
            Please note that I will ask you to verify your identity before responding to such requests. <br></br>
            Please note, I may not able to provide Service without some necessary data.<br></br>
            You have the right to complain to a Data Protection Authority (DPA) about this collection and use of your Personal Data.<br></br>
            For more information, please contact your local data protection authority in the European Economic Area (EEA).<br></br> 
          </div>

          <h1 className={h1TextStyle} style={{textAlign : "center"}}>Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)</h1>
          <br></br>
          <div className={normalTextStyle}>
            CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy.<br></br>
            The law’s reach stretches well beyond California to require a person or company in the United States (and conceivable the world)<br></br>
            that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website<br></br>
            stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy.<br></br>
            – See more at consumercal.org <u><Link target="_blank" rel="noopener noreferrer" href="https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/">info page about CALOPPA</Link></u>.<br></br>

            <br></br>
            According to CalOPPA I agree to the following:
            <br></br>
            <ul>
              <li>users can visit this site anonymously;</li>
              <li>this Privacy Policy link includes the word "Privacy", and can easily be found on the page specified above on the home page of this website;</li>
              <li>users will be notified of any privacy policy changes on this Privacy Policy Page;</li>
              <li>users are able to change their personal information by emailing me at <Link href={mailTo}><u>privacy@mb-consulting.dev</u></Link>.</li>
            </ul>
            <br></br>

            My Policy on "Do Not Track" Signals:
            <br></br> 
            I honor Do Not Track signals and do not track, create or read cookies when a Do Not Track browser mechanism is in place.<br></br> 
            Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.<br></br>
            You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.<br></br>
          </div>

          <h1 className={h1TextStyle} style={{textAlign : "center"}}>Your Data Protection Rights under the California Consumer Privacy Act (CCPA)</h1>
          <br></br>
          <div className={normalTextStyle}>
            If you are a California resident, you are entitled to learn what data is being collected about you, ask to delete your data and not to sell (or share) it.<br></br> 
            To exercise your data protection rights, you can ask me: 
            <br></br>
            <br></br>
            <b>What personal information I have about you.</b><br></br>
            If you make this request, I will return to you:<br></br>
            <ul>
              <li>The categories of personal information I have collected about you.</li>
              <li>The categories of sources from which I collect your personal information.</li>
              <li>The business or commercial purpose for collecting or selling your personal information.</li>
              <li>The categories of third parties with whom I share personal information.</li>
              <li>The specific pieces of personal information I have collected about you.</li>
              <li>A list of categories of personal information that I may have sold, along with the category of any other company I sold it to. If I have not sold your personal information, I will inform you of that fact.</li>
              <li>A list of categories of personal information that I may have have disclosed for a business purpose, along with the category of any other company I shared it with.</li>
            </ul>
            <br></br>

            Please note, you are entitled to ask me to provide you with this information up to two times in a rolling twelve-month period.<br></br> 
            When you make this request, the information provided may be limited to the personal information I collected about you in the previous 12 months.<br></br>  

            <br></br>
            <b>To delete your personal information.</b>
            <br></br>

            If you make this request, I will delete the personal information I hold about you as of the date of your request from my records and direct any service providers to do the same.<br></br>
            In some cases, deletion may be accomplished through de-identification of the information.<br></br>
            If you choose to delete your personal information, you may not be able to use certain functions that require your personal information to operate.<br></br>

            <br></br>
            <b>To stop selling your personal information.</b> <br></br>
            I don't sell or rent your personal information to any third parties for any purpose.<br></br>
            You are the only owner of your Personal Data and can request disclosure or deletion at any time.<br></br>
            In no circumstances, I will discriminate against you for exercising your rights.<br></br>
            To exercise your California data protection rights described above, please send your request(s) by email: <Link href={mailTo}><u>privacy@mb-consulting.dev</u></Link><br></br>
            <br></br>
            Your data protection rights, described above, are covered by the CCPA, short for the California Consumer Privacy Act.<br></br>
            To find out more, visit the official <u><Link target="_blank" rel="noopener noreferrer" href="https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?division=3.&part=4.&lawCode=CIV&title=1.81.5">California Legislative Information website</Link></u>. The CCPA took effect on 01/01/2020.<br></br> 
          </div>  

          <h1 className={h1TextStyle} style={{textAlign : "center"}}>Service Providers</h1>
          <br></br>
          <div className={normalTextStyle}>
            I may employ third party companies and individuals to facilitate this Service (<b>"Service Providers"</b>), provide Service on my behalf, perform Service-related services or assist me in analysing how this Service is used.<br></br>
            These third parties have access to your Personal Data only to perform these tasks on my behalf and are obligated not to disclose or use it for any other purpose.<br></br>
          </div>

          <h1 className={h1TextStyle} style={{textAlign : "center"}}>Analytics</h1>
          <br></br>
          <div className={normalTextStyle}>
            Third-party Service Providers are used to monitor and analyze the use of this Service.<br></br>  

            <br></br>
            <h2 className={h2TextStyle}>Google Analytics</h2>
            <br></br>

            Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.<br></br> 
            Google uses the data collected to track and monitor the use of this Service.<br></br>
            This data is shared with other Google services.<br></br>
            Google will use the collected data to contextualise and personalise the ads of its own advertising network.<br></br>

            <br></br>
            For more information on the privacy practices of Google, please visit <u><Link target="_blank" rel="noopener noreferrer" href="https://policies.google.com/privacy?hl=en">Google Privacy Terms</Link></u>.<br></br>
            I also encourage you to review the <u><Link target="_blank" rel="noopener noreferrer" href="https://support.google.com/analytics/answer/6004245">Google's policy for safeguarding your data</Link></u>.<br></br>
          </div>

          <h1 className={h1TextStyle} style={{textAlign : "center"}}>CI/CD tools</h1>
          <br></br>
          <div className={normalTextStyle}>
            I may use third-party Service Providers to automate some processes of this Service.<br></br>

            <br></br>
            <h3 className={h3TextStyle}>GitHub</h3>
            <br></br>

            GitHub is provided by GitHub, Inc.
            GitHub is a development platform to host and review code, manage projects, and build software.<br></br>
            For more information on what data GitHub collects for what purpose and how the protection of the data is ensured, please visit <u><Link target="_blank" rel="noopener noreferrer" href="https://help.github.com/en/articles/github-privacy-statement">GitHub Privacy Policy page</Link></u>.<br></br>

            <br></br>
            <h3 className={h3TextStyle}>Vercel</h3>
            <br></br>

            Vercel is provided by Vercel, Inc.
            Vercel is a plaftorm used to deploy websites and webapps.<br></br>
            For more information on what data Vercel collects for what purpose and how the protection of the data is ensured, please visit <u><Link target="_blank" rel="noopener noreferrer" href="https://vercel.com/legal/privacy-policy">Vercel Privacy Policy page</Link></u>.<br></br>
          </div>

          <h1 className={h1TextStyle} style={{textAlign : "center"}}>Behavioral Remarketing</h1>
          <br></br>
          <div className={normalTextStyle}>
            I don't use remarketing services to advertise on third party websites to you after you visited this Service.<br></br>

            <br></br>
            <h2 className={h2TextStyle}>Google Ads and Analytics</h2>  
            <br></br>
            I don't use Google Ads or any ads on this Service.<br></br>

            However, you can opt-out of Google Analytics for Display Advertising and customize the Google Display Network ads by visiting <u><Link target="_blank" rel="noopener noreferrer" href="http://www.google.com/settings/ads">Google Ads Settings page</Link></u><br></br>
            Google also recommends installing the <u><Link target="_blank" rel="noopener noreferrer" href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</Link></u> for your web browser.<br></br>
            Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent their data from being collected and used by Google Analytics.<br></br>
            For more information on the privacy practices of Google, please visit the <u><Link target="_blank" rel="noopener noreferrer" href="https://policies.google.com/privacy?hl=en">Google Privacy Terms page</Link></u><br></br>
          </div>

          <h1 className={h1TextStyle} style={{textAlign : "center"}}>Links to Other Sites</h1>
          <br></br>
          <div className={normalTextStyle}>
            This site may contain links to other sites that are not operated by me. If you click a third party link, you will be directed to that third party's site.<br></br>
            I strongly advise you to review the Privacy Policy of every site you visit.<br></br>
            I have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.<br></br>
          </div>

          <h1 className={h1TextStyle} style={{textAlign : "center"}}>Children's Privacy</h1>
          <br></br>
          <div className={normalTextStyle}>
            My Services are not intended for use by children under the age of 13 (<b>"Children"</b>).<br></br>
            I do not knowingly collect personally identifiable information from Children under 13.<br></br> 
            If you become aware that a Child has provided this Service with Personal Data, please contact me at <Link href={mailTo}><u>privacy@mb-consulting.dev</u></Link>.<br></br>
            If I become aware that Personal Data from Children has been collected, I take steps to remove that information.<br></br>
          </div>

          <h1 className={h1TextStyle} style={{textAlign : "center"}}>Changes to This Privacy Policy</h1>
          <br></br>
          <div className={normalTextStyle}>
            I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page.<br></br>
            If it's possible I will let you know via email and/or a prominent notice on this Service, prior to the change becoming effective and update "effective date" at the top of this Privacy Policy.<br></br>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.<br></br>
          </div>

          <h1 className={h1TextStyle} style={{textAlign : "center"}}>Contact me</h1>
          <br></br>
          <div className={normalTextStyle}>
            If you have any questions about this Privacy Policy, please contact me at <Link href={mailTo}><u>privacy@mb-consulting.dev</u></Link>.
          </div>

        </div>
      </div>
    </section>
  );
}