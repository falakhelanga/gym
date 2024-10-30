"use client";
import { cn } from "../../../utils/utils";
import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

type SideBarTab = {
  className?: string;
  icon: IconDefinition;
  link: string;
  isActive: boolean;
  sublinks?: string[];
};

const SideBarTab = ({
  className,
  icon,
  link,
  isActive,
  sublinks,
}: SideBarTab) => {
  return (
    <Link href={link} className={cn("", className)}>
      <div
        className={cn(
          " text-pastel-blue  w-full py-4  flex items-center justify-center hover:bg-mid-blue",
          isActive ? "text-pastel-blue bg-mid-blue" : ""
        )}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
    </Link>
  );
};

export default SideBarTab;
