import CookieConsent from "react-cookie-consent";

export default function Cookies() {

    return (
        <CookieConsent
          location="bottom"
          buttonText="Okay! Now just give me that cookie, man."
          ariaAcceptLabel="Yes, I accept the use of cookies"
          enableDeclineButton={true}
          setDeclineCookie={false}
          declineButtonText="Ehm, no. I don't like cookies."
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
        This (awesome?) website uses the smallest amount of cookies possible to enhance the user experience.
        For more info about my cookies policy: <u><a target="_blank" rel="noopener noreferrer" href="/policy">https://mb-consulting.dev/policy</a></u>.
        What's a cookie? <u><a target="_blank" rel="noopener noreferrer" href="https://www.allaboutcookies.org/">allaboutcookies.org</a></u> 
        <span style={{ fontSize: "10px" }}> Please accept? c:</span>
        </CookieConsent>
    );
}