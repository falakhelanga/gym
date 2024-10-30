import { cn } from "../../../utils/utils";
import { ComponentProps } from "react";

type HeadingProps = ComponentProps<"h1"> & {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export const Heading = ({ className, size = "md", ...props }: HeadingProps) => {
  const commonClasses = "text-2xl font-semibold text-black";
  return (
    <h1
      className={cn(
        commonClasses,
        size === "sm" ? "text-2xl" : size === "lg" ? "text-6xl" : "text-4xl",
        className
      )}
      {...props}
    />
  );
};
