import { cn } from "../../../utils/utils";
import { ComponentProps } from "react";

type CardProps = ComponentProps<"div"> & {
  className?: string;
};

export const Card = ({ className, ...props }: CardProps) => {
  return (
    <div
      className={cn("bg-white shadow px-4 py-6 rounded-lg", className)}
      {...props}
    />
  );
};
