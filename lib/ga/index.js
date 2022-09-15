import { useRouter } from "next/router";
import { useEffect } from "react";

// log the pageview with their URL
export const pageview = (url) => {
  console.log("pageview", url); //TODO remove this
  console.log("GA_TRACKING_ID", process.env.GA_TRACKING_ID); //TODO remove this
    window.gtag('config', process.env.GA_TRACKING_ID, {
      page_path: url,
    })
  }
  
// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}

export function reportWebVitalsToGoogle({ id, name, label, value }) {
  // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js
  console.log('Reporting vital => [',id, name, label, value, ']'); //TODO remove this
  window.gtag('event', name, {
    event_category:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  })
}

export const router = (url) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    // When the component is mounted, subscribe to router changes and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}

