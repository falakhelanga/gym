"use client";
import { ComponentProps, forwardRef, useState } from "react";
import InputWrapper from "../InputWrapper";
import { cn } from "../../../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/pro-solid-svg-icons";

type TextInputProps = ComponentProps<"input"> & {
  label?: string;
  className?: string;
  labelClassName?: string;
  inputContainerClassName?: string;
  containerClassName?: string;
  error?: string;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      label,
      labelClassName,
      containerClassName,
      inputContainerClassName,
      error,
      type,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <InputWrapper
        className={containerClassName}
        labelClassName={labelClassName}
        inputContainerClassName={cn("flex", inputContainerClassName)}
        name={props.name}
        label={label}
        error={error}
      >
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          ref={ref}
          className={cn(
            "border-none outline-none bg-transparent w-full text-sm",
            className
          )}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className=""
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>
        )}
      </InputWrapper>
    );
  }
);

TextInput.displayName = "TextInput";
export default TextInput;
