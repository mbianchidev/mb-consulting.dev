import React from "react";
import userData from "@constants/data";
import CookieConsent, { getCookieConsentValue, Cookies } from "react-cookie-consent";
import * as ga from "@lib/ga";

export default function MBCookies() {

    return (
        <CookieConsent
          location="bottom"
          visible="byCookieValue"
          buttonText="Yes! Now just give me that cookie, pls."
          ariaAcceptLabel="Yes, I accept the use of cookies"
          enableDeclineButton={true}
          setDeclineCookie={true}
          declineButtonText="No. I don't like cookies."
          ariaDeclineLabel="No, I do not accept the use of cookies"
          onDecline={() => {
            Cookies.remove("_ga");
            Cookies.remove("_gat");
            Cookies.remove("_gid")
            Cookies.remove("_ga_"+process.env.GA_TRACKING_ID);
          }}  
          onAccept={() => {
            if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID && getCookieConsentValue() === "true") {
              ga.router(url);
            }
          }}          
          declineCookieValue="declined"
          cookieName="mb-consulting-dev"
          sameSite="strict"
          overlay={true}
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={365}
        >
        This (awesome?) website uses the smallest amount of cookies possible to enhance the user experience and allow me to perform some traffic/performance analysis.
        For more info checkout <u><a target="_blank" rel="noopener noreferrer" href="/cookie-policy">my cookies policy</a></u>.
        What's a cookie? Checkout this <u><a target="_blank" rel="noopener noreferrer" href={userData.cookieUrl}>informative article about cookies</a></u> to learn more!
        <span style={{ fontSize: "10px" }}> Please accept? c:</span>
        </CookieConsent>
    );
}