import React, {useState, useEffect} from "react";
import userData from "@constants/data";
import Link from "next/link";
import Image from 'next/image';
import logo from "@images/logo.webp"
import { useRouter } from "next/router";
import SocialElement from "@custom/Social/SocialElement";
import NavbarLink from "@custom/Navbar/NavbarLink";
import NavbarMobile from "@custom/Navbar/NavbarMobile";
import Dropdown from "@custom/DropdownMenu/DropdownMenu";
import navbarData from "@constants/navbar";

export default function Navbar() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    mounted ? (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-8xl mx-auto px-6 py-4 md:py-6">
        <div className="flex md:flex-row justify-between items-center">

          {/* Logo + Name */}
          <Link href="/" passHref>
            <div className="flex flex-col md:flex-row items-center group cursor-pointer">
              <div className="transform transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src={logo} 
                  alt="mb-consulting logo an infinite symbol turned into a cloud" 
                  width={156} 
                  height={104} 
                  priority 
                  quality="100" 
                />
              </div>
              <div className="flex flex-col navbar__logo-name-role ml-3">
                <h1 className="font-bold text-3xl lg:text-4xl text-slate-900 dark:text-white transition-colors">
                  {userData.name}
                </h1>
                <p className="text-base lg:text-lg font-medium text-slate-600 dark:text-slate-400 transition-colors">
                  {userData.role}
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navbar links */}
          <div className="space-x-8 hidden md:flex items-center">
            {React.Children.toArray(navbarData.urls.map((item) => (
              <NavbarLink link={item.link} name={item.name} router={router} />
            )))}
          </div>

          {/*Social Links and change theme*/}
          <SocialElement github="true" linkedin="true" themeToggle="true" hideIfMobile="true"/> 
        </div>

        {/*Mobile Navbar Element*/}
        <NavbarMobile />
      </div>
    </nav>
    ) : null
  );
}
