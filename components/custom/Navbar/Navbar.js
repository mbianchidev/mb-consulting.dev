import React, {useState, useEffect} from "react";
import userData from "@constants/data";
import Link from "next/link";
import Image from 'next/image';
import logo from "@images/logo.webp"
import { useRouter } from "next/router";
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
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-xl border-b border-slate-700/50' 
        : 'bg-slate-900/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* Logo + Name */}
          <Link href="/" passHref className="flex-shrink-0">
            <div className="flex items-center group cursor-pointer gap-2">
              <div className="transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                <Image 
                  src={logo} 
                  alt="mb-consulting logo an infinite symbol turned into a cloud" 
                  width={32} 
                  height={20} 
                  priority 
                  className="w-8 h-5 md:w-9 md:h-6"
                />
              </div>
              <div className="hidden sm:flex flex-col navbar__logo-name-role">
                <h1 className="font-semibold text-xs text-white transition-colors leading-tight">
                  {userData.name}
                </h1>
                <p className="text-[10px] font-medium text-slate-400 transition-colors">
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

          {/* Empty div for layout balance */}
          <div className="w-10 md:hidden"></div>
        </div>

        {/* Mobile Navbar Element */}
        <NavbarMobile />
      </div>
    </nav>
    ) : null
  );
}
