import "@styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import MBCookies from "@components/MBCookies";
import CustomError from '@components/CustomError'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <main className="dark:bg-gray-800 w-full">
          <Navbar/>
          <CustomError>
            <Component {...pageProps} />
          </CustomError>
          <MBCookies/>
          <Footer/>
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
