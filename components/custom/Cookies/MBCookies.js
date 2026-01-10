import React from "react";
import userData from "@constants/data";
import CookieConsent, { getCookieConsentValue, Cookies } from "react-cookie-consent";
import * as ga from "@lib/ga";
import Link from "next/link";

export default function MBCookies() {

    return (
        <CookieConsent
          location="bottom"
          visible="byCookieValue"
          buttonText="Accept"
          ariaAcceptLabel="Yes, I accept the use of cookies"
          enableDeclineButton={true}
          setDeclineCookie={true}
          declineButtonText="Decline"
          ariaDeclineLabel="No, I do not accept the use of cookies"
          onDecline={() => {
            Cookies.remove("_ga");
            Cookies.remove("_gat");
            Cookies.remove("_gid")
            Cookies.remove("_ga_B11MCGL84K");
          }}  
          onAccept={() => {
            if (process.env.GA_TRACKING_ID && getCookieConsentValue() === "true") {
              ga.router(url);
            }
          }}          
          declineCookieValue="false"
          cookieName="mb-consulting-dev"
          sameSite="strict"
          overlay={true}
          containerClasses="!bg-slate-900/95 !backdrop-blur-xl !border-t !border-slate-700 !p-6 !shadow-2xl"
          contentClasses="!text-slate-300 !text-sm !leading-relaxed !max-w-3xl"
          style={{ 
            background: "transparent",
            fontFamily: "var(--font-body)",
          }}
          buttonStyle={{ 
            background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
            color: "#ffffff", 
            fontSize: "14px",
            fontWeight: "600",
            padding: "10px 24px",
            borderRadius: "12px",
            fontFamily: "var(--font-body)",
          }}
          declineButtonStyle={{
            background: "transparent",
            border: "1px solid #475569",
            color: "#94a3b8",
            fontSize: "14px",
            fontWeight: "500",
            padding: "10px 24px",
            borderRadius: "12px",
            fontFamily: "var(--font-body)",
          }}
          expires={365}
        >
        <span style={{fontFamily: "var(--font-body)"}}>
          🍪 This site uses minimal cookies for analytics. 
          <Link href="/cookie-policy" className="text-primary-400 hover:text-primary-300 underline ml-1">Learn more</Link>
        </span>
        </CookieConsent>
    );
}