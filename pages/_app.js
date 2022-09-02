import "@styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import MBCookies from "@components/Cookies";

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <main className="dark:bg-gray-800 w-full">
        <Navbar/>
        <Component {...pageProps} />
        <MBCookies/>
        <Footer/>
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
