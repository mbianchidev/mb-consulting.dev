import "@styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@custom/Navbar/Navbar";
import Footer from "@custom/Footer/Footer";
import MBCookies from "@custom/Cookies/MBCookies";
import CustomError from '@custom/Error/CustomError'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <main className="dark:bg-gray-800 w-full">
          <Navbar/>
          <CustomError>
            <Component {...pageProps} />
            <SpeedInsights/>
            <Analytics/>
          </CustomError>
          <MBCookies/>
          <Footer/>
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
