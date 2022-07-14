import React from "react";
import userData from "@constants/data";
import CookieConsent from "react-cookie-consent";

export default function Cookies() {

    return (
        <CookieConsent
          location="bottom"
          buttonText="Yes! Now just give me that cookie, pls."
          ariaAcceptLabel="Yes, I accept the use of cookies"
          enableDeclineButton={true}
          setDeclineCookie={false}
          declineButtonText="No. I don't like cookies."
          ariaDeclineLabel="No, I do not accept the use of cookies"
          onDecline={() => {setTimeout(function() {
            window.open(location.href, "_self", "");
            window.close()
            }, 5000);}}
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
        What's a cookie? Click <u><a target="_blank" rel="noopener noreferrer" href={userData.cookieUrl}>here</a></u> to learn more!
        <span style={{ fontSize: "10px" }}> Please accept? c:</span>
        </CookieConsent>
    );
}