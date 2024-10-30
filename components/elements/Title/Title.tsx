import { cn } from "../../../utils/utils";
import { ComponentProps } from "react";

type TitleProps = ComponentProps<"h3"> & {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export const Title = ({ className, size, ...props }: TitleProps) => {
  return (
    <h3
      className={cn(
        "font-bold",
        size === "sm" && "text-md",
        size === "md" && "text-lg",
        size === "lg" && "text-xl",
        className
      )}
      {...props}
    />
  );
};
