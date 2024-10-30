"use client";
import React, { useMemo } from "react";
import { ContentWrapper } from "../content-wrap/ContentWrapper";
import { Heading } from "../Heading/Heading";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faListCheck,
  faSearch,
} from "@fortawesome/pro-solid-svg-icons";

const Header = () => {
  const pathname = usePathname();
  const heading = useMemo(() => {
    switch (pathname) {
      case "/dashboard/exercises":
        return "Exercise library";
      case "/dashboard/exercises/create":
        return "Create new exercise";
      case "/dashboard/exercises/edit":
        return "Edit exercise";
      default:
        return "";
    }
  }, [pathname]);
  return (
    <ContentWrapper className="flex justify-between pt-4 h-[5vh] ">
      <div>
        <Heading size="sm" className="mb-6">
          {heading}
        </Heading>
      </div>
      <div className="flex gap-x-4 ">
        <div className="text-gray-400">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="text-gray-400">
          <FontAwesomeIcon icon={faListCheck} />
        </div>
        <div className="text-gray-400">
          <FontAwesomeIcon icon={faBell} size="lg" />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Header;
