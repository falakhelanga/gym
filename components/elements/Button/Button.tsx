import { cn } from "../.././../utils/utils";
import { ComponentProps } from "react";
import { ButtonSpinner } from "../Spinner/ButtonSpinner";

type ButtonProps = ComponentProps<"button"> & {
  className?: string;
  size?: "sm" | "md" | "lg";
  loading?: boolean;
};

export const Button = ({
  className,
  size = "md",
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-dark-blue",
        "hover:bg-mid-blue",
        "text-white",
        "font-bold",
        // "py-4",
        // "px-4",
        "rounded",
        "focus:outline-none",
        "focus:shadow-outline",
        "transition",
        "duration-300",
        "ease-in-out",
        "w-full",
        size === "sm" && "py-2 px-3 text-sm",
        size === "md" && "py-3 px-4 text-base",
        size === "lg" && "py-4 px-5 text-lg",
        className
      )}
      {...props}
    >
      {loading ? <ButtonSpinner /> : props.children}
    </button>
  );
};
