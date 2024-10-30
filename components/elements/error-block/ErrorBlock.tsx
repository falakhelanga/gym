import { cn } from "../../../utils/utils";
import { ComponentProps } from "react";

type ErrorBlockProps = ComponentProps<"div"> & {
  className?: string;
};

export const ErrorBlock = ({ className, ...props }: ErrorBlockProps) => {
  return (
    <div
      className={cn(
        "text-red-500 w-full py-2 px-4 rounded",
        "text-sm",
        "text-center",
        "bg-red-100",
        className
      )}
      {...props}
    />
  );
};
