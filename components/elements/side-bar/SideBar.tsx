"use client";
import {
  faBook,
  faMessages,
  faNetworkWired,
  faUsers,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { usePathname } from "next/navigation";
import { link } from "fs";
import SideBarTab from "./SideBarTab";

const links = [
  {
    link: "/dashboard/clients",
    sublinks: [""],
    icon: faUsers,
  },
  {
    link: "/dashboard/exercises",
    sublinks: [
      "/dashboard/workouts",
      "/dashboard/programs",
      "/dashboard/tasks",
      "/dashboard/forms",
      "/dashboard/meals",
      "/dashboard/metrics",
      "/dashboard/sections",
      "/dashboard/recipes",
      "/dashboard/ingredients",
    ],
    icon: faBook,
  },
  {
    link: "/dashboard/messages",
    icon: faMessages,
  },
  {
    link: "/dashboard/automation",
    icon: faNetworkWired,
  },
];

export const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-dark-blue h-screen w-full  pb-2 pt-4">
      <div className="flex w-full justify-center items-center px-3">
        <div className="bg-white rounded-full flex items-center justify-center w-full aspect-square text-black">
          <span className="text-xs">Logo</span>
        </div>
      </div>
      <div className="mt-6">
        {links.map(({ link, icon, sublinks }) => (
          <SideBarTab
            sublinks={sublinks}
            isActive={link === pathname || sublinks?.includes(pathname)!}
            key={link}
            icon={icon}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
