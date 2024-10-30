"use client";
import { ComponentProps, forwardRef, useState } from "react";
import InputWrapper from "../InputWrapper";
import { cn } from "../../../../utils/utils";
import Select from "react-select";

export interface Option {
  value: string;
  label: string;
}

type SelectInputProps = ComponentProps<"select"> & {
  label?: string;
  options: Option[];
  className?: string;
  labelClassName?: string;
  inputContainerClassName?: string;
  containerClassName?: string;
  error?: string;
};

const SelectInput = forwardRef<any, SelectInputProps>(
  (
    {
      className,
      label,
      labelClassName,
      containerClassName,
      inputContainerClassName,
      error,
      options,
      ...props
    },
    ref
  ) => {
    return (
      <InputWrapper
        className={containerClassName}
        labelClassName={labelClassName}
        inputContainerClassName={cn("flex", inputContainerClassName)}
        name={props.name}
        label={label}
        error={error}
      >
        <Select
          ref={ref}
          className={cn(
            "border-none outline-none bg-transparent w-full text-sm",
            className
          )}
          {...(props as any)}
          options={options as any}
        ></Select>
      </InputWrapper>
    );
  }
);

SelectInput.displayName = "SelectInput";
export default SelectInput;
