import "@styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@custom/Navbar/Navbar";
import Footer from "@custom/Footer/Footer";
import MBCookies from "@custom/Cookies/MBCookies";
import CustomError from '@custom/Error/CustomError'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { memo } from 'react';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <ThemeProvider 
        attribute="class" 
        defaultTheme="dark" 
        enableSystem={false}
        storageKey="theme"
        disableTransitionOnChange={false}
      >
        <main className="bg-white dark:bg-gray-800 w-full min-h-screen transition-colors duration-300">
          <Navbar/>
          <CustomError>
            <Component {...pageProps} />
          </CustomError>
          <MBCookies/>
          <Footer/>
          <SpeedInsights/>
          <Analytics/>
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
