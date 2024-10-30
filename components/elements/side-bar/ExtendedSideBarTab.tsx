"use client";
import { cn } from "../../../utils/utils";
import { ComponentProps } from "react";
import { Link as LinkType } from "./ExtendedSideBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ExtendedSideBarTabProps = ComponentProps<"div"> & {
  className?: string;
  isActive?: boolean;
  link?: string;
  sublinks?: LinkType[];
};

const ExtendedSideBarTab = ({
  className,
  isActive,
  link,
  sublinks,
  children,
  ...props
}: ExtendedSideBarTabProps) => {
  const pathname = usePathname();
  return (
    <div
      //   href={link ? link : ""}
      className={cn("flex flex-col", className)}
      {...props}
    >
      <Link
        href={link ? link : ""}
        className={cn(
          "text-pastel-blue capitalize py-1 px-2   text-sm cursor-pointer hover:bg-light-blue hover:text-dark-blue",
          isActive ? "bg-light-blue text-dark-blue" : ""
        )}
      >
        {children}
      </Link>

      {sublinks &&
        sublinks.map(({ link, name }) => (
          <Link href={link} key={link}>
            <div
              className={cn(
                "text-pastel-blue capitalize py-1 px-2 ml-3  text-sm cursor-pointer",
                pathname === link ? "bg-light-blue text-dark-blue" : ""
              )}
            >
              {name}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ExtendedSideBarTab;
