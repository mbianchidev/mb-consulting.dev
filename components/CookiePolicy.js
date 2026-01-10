import React from "react";
import mailData from "@constants/mail";
import Breadcrumb from "@custom/Breadcrumb/Breadcrumb";
import CookieConsent, { Cookies, resetCookieConsentValue } from "react-cookie-consent";
import Link from "next/link";

export default function CookiePolicy() {
  const mailTo = "mailto:"+mailData.privacyMail;
  const sectionTitleStyle = "text-2xl font-bold text-slate-900 dark:text-white text-center mb-6";
  const textStyle = "text-lg text-slate-700 dark:text-slate-300 leading-relaxed";
  const linkStyle = "text-primary-600 dark:text-primary-400 hover:underline";
  
  return (
    <section id="cookie-policy-container" className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 bg-slate-50 dark:bg-slate-950">
        <h1 className="text-5xl md:text-8xl font-bold text-slate-900 dark:text-white text-center md:text-left" style={{fontFamily: 'var(--font-heading)'}}>
          Cookie Policy
        </h1>
      </div>

      <Breadcrumb/>

      <div className="bg-slate-100 dark:bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          
          {/* Reset Cookie Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className={sectionTitleStyle}>Reset Cookie Consent</h2>
            <p className={textStyle}>You can reset your cookie consent preferences by clicking the button below.</p>
            <div className="mt-6 text-center">
              <button className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 rounded-xl px-8 py-3 text-white text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" onClick={() => {
                resetCookieConsentValue("mb-consulting-dev");
                Cookies.remove("_ga");
                Cookies.remove("_gat");
                Cookies.remove("_gid")
                Cookies.remove("_ga_B11MCGL84K");             
                window.location.reload();
              }}>
                Reset Consent
              </button>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 text-center">You can also reset your consent at any time by deleting the cookies stored in your browser.</p>
          </div>

          {/* Tracking Cookies Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className={sectionTitleStyle}>Tracking Cookies Data</h2>
            <div className={`${textStyle} space-y-4`}>
              <p><strong className="text-slate-900 dark:text-white">Important:</strong> If you don't accept cookies, you can still use this site without any limitations.</p>
              <p>However, only if you allow it, this site uses cookies and similar tracking technologies (e.g. <Link target="_blank" rel="noopener noreferrer" href="https://support.google.com/tagmanager/answer/6102821?hl=en" className={linkStyle}>Google Tag Manager</Link>) to track site activity.</p>
              <p>Cookies are files with a small amount of data which may include an anonymous unique identifier. They are sent to your browser from a website and stored on your device.</p>
              
              <div className="mt-6">
                <p className="font-semibold text-slate-900 dark:text-white mb-3">How to disable cookies in popular browsers:</p>
                <ul className="space-y-2 ml-4">
                  <li>• <Link target="_blank" rel="noopener noreferrer" href="https://support.microsoft.com/en-us/search?query=disable%20cookies%20in%20microsoft%20edge" className={linkStyle}>Microsoft Edge</Link></li>
                  <li>• <Link target="_blank" rel="noopener noreferrer" href="https://support.google.com/accounts/answer/61416?hl=en&co=GENIE.Platform%3DDesktop" className={linkStyle}>Google Chrome</Link></li>
                  <li>• <Link target="_blank" rel="noopener noreferrer" href="https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox" className={linkStyle}>Mozilla Firefox</Link></li>
                  <li>• <Link target="_blank" rel="noopener noreferrer" href="http://docs.info.apple.com/article.html?path=Safari/5.0/en/9277.html" className={linkStyle}>Apple Safari</Link></li>
                </ul>
              </div>
              
              <p className="mt-4">For privacy-focused browsers like <Link target="_blank" rel="noopener noreferrer" href="https://brave.com/" className={linkStyle}>Brave</Link> or search engines like <Link target="_blank" rel="noopener noreferrer" href="https://duckduckgo.com/" className={linkStyle}>DuckDuckGo</Link>, please consult their websites.</p>
              <p>You can also <Link href="https://tools.google.com/dlpage/gaoptout/" className={linkStyle}>disable Google Analytics</Link>.</p>
            </div>
          </div>

          {/* Cookies Used Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className={sectionTitleStyle}>Cookies Used</h2>
            <div className={textStyle}>
              <ul className="space-y-3">
                <li><strong className="text-slate-900 dark:text-white">Session Cookies:</strong> Used to operate this Service</li>
                <li><strong className="text-slate-900 dark:text-white">Preference Cookies:</strong> Used to remember your preferences and settings</li>
                <li><strong className="text-slate-900 dark:text-white">Security Cookies:</strong> Used for security purposes</li>
                <li><strong className="text-slate-900 dark:text-white">Analysis Cookies:</strong> Used to understand traffic flows and improve the Service</li>
              </ul>
              <p className="mt-6 p-4 bg-slate-100 dark:bg-slate-700 rounded-xl text-center font-medium">
                ✨ This site does not use advertising cookies and contains no advertisements.
              </p>
            </div>
          </div>

          {/* Cookie Details Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className={sectionTitleStyle}>Cookie Details</h2>
            <div className={textStyle}>
              <ul className="space-y-3">
                <li><code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm">mb-consulting-dev</code>: Functional first-party cookie for site operation and preferences (1 year)</li>
                <li><code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm">_ga</code>: Analytics third-party cookie (Google) for traffic analysis (2 years)</li>
                <li><code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm">_ga_*</code>: Technical third-party cookie identifying our Google Analytics account (2 years)</li>
              </ul>
              <p className="mt-6">This Cookie Policy may be updated from time to time. Any changes will be posted on this page.</p>
              <p className="mt-4">For other privacy concerns, please visit the <Link target="_blank" rel="noopener noreferrer" href="/privacy-policy" className={linkStyle}>privacy policy page</Link>.</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className={sectionTitleStyle}>Contact Me</h2>
            <p className={`${textStyle} text-center`}>
              If you have any questions about this Cookie Policy, please contact me at <Link href={mailTo} className={linkStyle}>{mailData.privacyMail}</Link>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}