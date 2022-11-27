import React from "react";
import Link from "next/link";
import navbarData from "@constants/navbar";

export default function NavbarMobile() {

  const mobileTextStyle = "text-gray-600 font-normal dark:text-gray-300 text-base";

  return (
    <div className="space-x-8 block md:hidden mt-4">
      {React.Children.toArray(navbarData.urls.map((item) => (
        <Link href={item.link} className={mobileTextStyle}>
          {item.name}
        </Link>
      )))}
    </div>
  );
}
