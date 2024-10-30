"use client";
import React from "react";
import Search from "../Search/Search";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";

const PageHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="h-[8vh]  flex items-end">
      <div className="flex justify-between w-full  flex-grow ">
        <Search className="" placeholder="Search exercise name" />
        <div className="flex ">
          {pathname === "/dashboard/exercises" && (
            <Button
              onClick={() => {
                router.push("/dashboard/exercises?addExercise=true");
              }}
              size="sm"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              <span>Add new exercise</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
