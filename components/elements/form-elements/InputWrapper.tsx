import { cn } from "../../../utils/utils";
import { ComponentProps } from "react";

type InputWrapperProps = ComponentProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  labelClassName?: string;
  inputContainerClassName?: string;
  name?: string;
  label?: string;
  error?: string;
};

const InputWrapper = ({
  children,
  labelClassName,
  name,
  label,
  className,
  inputContainerClassName,
  error,
  ...props
}: InputWrapperProps) => {
  return (
    <div className={cn("text-black ", className)} {...props}>
      <label htmlFor={name}>
        <span className={cn("text-sm mb-1 font-semibold", labelClassName)}>
          {label}
        </span>
        <div
          className={cn(
            "border border-gray-400 rounded w-full px-1 py-2",
            inputContainerClassName
          )}
        >
          {children}
        </div>
      </label>
      {
        // If there is an error, display it
        error && <div className="text-red-500 text-xs mt-1">{error}</div>
      }
    </div>
  );
};

export default InputWrapper;
