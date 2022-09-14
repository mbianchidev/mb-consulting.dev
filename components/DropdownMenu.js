import React, { useState } from 'react';
import userData from "@constants/data";
import Link from "next/link";
import { useRouter } from "next/router";


function DropdownMenu() {
  const router = useRouter();

  const servicesFontSize = '25px';
  const selectedTextStyle = "text-gray-800 font-bold dark:text-gray-400 dark:hover-underline-animation";
  const unselectedTextStyle = "text-gray-600 font-normal dark:text-gray-300 dark:hover-underline-animation";

  const MenuItems = [
    {
      title: userData.services.firstService.name,
      path: userData.services.firstService.path
    },
    {
      title: userData.services.secondService.name,
      path: userData.services.secondService.path
    },
    {
      title: userData.services.thirdService.name,
      path: userData.services.thirdService.path
    } 
  ];

  return (
    <></>
  );
}

export default DropdownMenu;