import React, {useState, useEffect} from "react";
import userData from "@constants/data";
import Link from "next/link";
import Image from 'next/image';
import logo from "@images/logo.webp"
import { useRouter } from "next/router";
import SocialElement from "@custom/Social/SocialElement";
import NavbarLink from "@custom/Navbar/NavbarLink";
import NavbarMobile from "@custom/Navbar/NavbarMobile";
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
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl border-b border-slate-200/50 dark:border-slate-700/50' 
        : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo + Name */}
          <Link href="/" passHref className="flex-shrink-0">
            <div className="flex items-center group cursor-pointer gap-3">
              <div className="transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                <Image 
                  src={logo} 
                  alt="mb-consulting logo an infinite symbol turned into a cloud" 
                  width={48} 
                  height={32} 
                  priority 
                  className="w-12 h-8 md:w-14 md:h-10"
                />
              </div>
              <div className="hidden sm:flex flex-col navbar__logo-name-role">
                <h1 className="font-bold text-lg md:text-xl text-slate-900 dark:text-white transition-colors leading-tight">
                  {userData.name}
                </h1>
                <p className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors">
                  {userData.role}
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navbar links */}
          <div className="hidden md:flex items-center gap-1">
            {React.Children.toArray(navbarData.urls.map((item) => (
              <NavbarLink link={item.link} name={item.name} router={router} />
            )))}
          </div>

          {/* Social Links and theme toggle */}
          <div className="flex items-center gap-2">
            <SocialElement github="true" linkedin="true" themeToggle="true" hideIfMobile="true"/> 
          </div>
        </div>

        {/* Mobile Navbar Element */}
        <NavbarMobile />
      </div>
    </nav>
    ) : null
  );
}
