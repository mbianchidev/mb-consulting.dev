import React from "react";
import Link from "next/link";
import navbarData from "@constants/navbar";

export default function NavbarMobile() {
  const mobileTextStyle = "text-gray-600 font-normal dark:text-white text-base";

  return (
    <div className="space-x-8 block md:hidden mt-4">
      {React.Children.toArray(
        navbarData.urls.map((item) => {
          // Check if the link should be hidden on mobile
          if (item.hideOnMobile) {
            return null; // Return null to hide the link
          }

          return (
            <Link
              key={item.link} // Add a unique key for each link
              href={item.link}
              className={mobileTextStyle}
              target={item.isExternal === true ? "_blank" : null}
              rel={item.isExternal === true ? "noopener noreferrer" : null}
            >
              {item.name}
            </Link>
          );
        })
      )}
    </div>
  );
}
