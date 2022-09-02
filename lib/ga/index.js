import { useRouter } from "next/router";
import { useEffect } from "react";

// log the pageview with their URL
export const pageview = (url) => {
    window.gtag('config', process.env.GA_TRACKING_ID, {
      page_path: url,
    })
  }
  
// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
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

