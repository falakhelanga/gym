"use client";
import React, { useMemo } from "react";
import { Title } from "../Title/Title";
import ExtendedSideBarTab from "./ExtendedSideBarTab";
import { usePathname } from "next/navigation";

export interface Link {
  link: string;
  name: string;
}

const workouts = {
  title: "Library",
  links: [
    {
      link: "/dashboard/exercises",
      name: "Exercises",
    },
    {
      link: "/dashboard/workouts",
      name: "Workouts",
      sublinks: [
        {
          link: "/dashboard/sections",
          name: "sections",
        },
      ],
    },
    {
      link: "/dashboard/programs",
      name: "Programs",
    },
    {
      link: "/dashboard/tasks",
      name: "Tasks",
    },
    {
      link: "/dashboard/forms",
      name: "Forms and Questionnaires",
    },
    {
      link: "/dashboard/meals",
      name: "meal plan templates",
      sublinks: [
        {
          link: "/dashboard/recipes",
          name: "Recipes",
        },
        {
          link: "/dashboard/ingredients",
          name: "Ingredients",
        },
      ],
    },
    {
      link: "/dashboard/metrics",
      name: "Metric groups",
    },
  ],
};

type ExtendedSideBarProps = {
  //   title: string;
  //   children: React.ReactNode;
};

const ExtendedSideBar = ({}: ExtendedSideBarProps) => {
  const pathname = usePathname();
  const selectedTab = useMemo(() => {
    switch (pathname) {
      case "/dashboard/workouts":
      case "/dashboard/exercises":
        return workouts;

      default:
        return null;
    }
  }, [pathname]);
  return (
    <div className="bg-mid-blue h-screen px-3 overflow-auto pb-2 pt-8">
      <Title className="mb-6 text-pastel-blue">{selectedTab?.title}</Title>
      <div className="flex flex-col gap-y-2">
        {selectedTab?.links.map(({ link, name, sublinks }) => (
          <ExtendedSideBarTab
            isActive={pathname === link}
            key={link}
            link={link}
            sublinks={sublinks}
          >
            {name}
          </ExtendedSideBarTab>
        ))}
      </div>
    </div>
  );
};

export default ExtendedSideBar;
