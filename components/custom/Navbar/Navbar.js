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
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted ? (
    <div className="max-w-8xl px-4 py-5 md:py-10 navbar-mb">

      <div className="flex md:flex-row justify-between items-center">

        {/* Logo + Name */}
        <Link href="/" passHref>
          <div className="flex flex-col md:flex-row items-center">
            <Image src={logo} alt="mb-consulting logo an infinite symbol turned into a cloud" width={156} height={104} priority quality="100" />
            <div className="flex flex-col navbar__logo-name-role">
              <h1 className="font-semibold text-x1 dark:text-gray-100" style={{fontSize: '40px'}}>
                {userData.name}
              </h1>
              <p className="text-base font-light text-gray-500 dark:text-gray-300" style={{fontSize: '20px'}}>
                {userData.role}
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navbar links */}
        <div className="space-x-8 hidden md:block -mr-50 mt-30">
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
    ) : null
  );
}
