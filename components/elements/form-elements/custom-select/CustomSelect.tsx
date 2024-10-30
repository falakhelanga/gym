"use client";
import React, {
  ComponentProps,
  forwardRef,
  use,
  useEffect,
  useState,
} from "react";
import InputWrapper from "../InputWrapper";
import { cn } from "../../../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faEye,
  faEyeSlash,
} from "@fortawesome/pro-solid-svg-icons";
import { Option } from "../select-input/SelectInput";
import SelectedItem from "./SelectedItem";
import { set } from "date-fns";
import useClickOutside from "@/hooks/useClickoutside";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type CustomOption = Option & {
  selected?: boolean;
  listIcon?: IconProp;
};

type CustomSelectProps = ComponentProps<"input"> & {
  maxOptions?: number;
  displayValue?: boolean;
  bubleList?: boolean;
  isMulti?: boolean;
  label?: string;
  preText?: string;
  className?: string;
  labelClassName?: string;
  inputContainerClassName?: string;
  containerClassName?: string;
  error?: string;
  options: CustomOption[];
};

const CustomSelect = forwardRef<HTMLInputElement, CustomSelectProps>(
  (
    {
      className,
      bubleList = false,
      displayValue = false,
      maxOptions,
      label,
      labelClassName,
      containerClassName,
      inputContainerClassName,
      error,
      isMulti,
      options,
      preText,
      type,
      ...props
    },
    ref
  ) => {
    const [selectOptions, setSelectOptions] = useState<CustomOption[]>(options);
    const [selectedOptions, setSelectedOptions] = useState<CustomOption[]>([]);
    const [searchValue, setSearchValue] = useState("");
    const resultsRef = React.useRef<HTMLDivElement>(null);
    const closeResults = () => {
      setShowOptions(false);
    };
    const openResults = () => {
      setShowOptions(true);
    };
    useClickOutside(resultsRef, closeResults);
    const [showOptions, setShowOptions] = useState(false);

    const handleSelect = (option: Option) => {
      if (maxOptions && selectedOptions.length >= maxOptions) {
        return;
      }
      setSearchValue("");
      if (!isMulti) {
        setSelectedOptions([option]);
        setSelectOptions(
          selectOptions.filter((opt) => opt.value !== option.value)
        );
        setShowOptions(false);
        return;
      }
      setSelectedOptions([...selectedOptions, option]);
      setSelectOptions(
        selectOptions.filter((opt) => opt.value !== option.value)
      );
    };

    const handleRemove = (option: Option) => {
      setSelectedOptions(
        selectedOptions.filter((opt) => opt.value !== option.value)
      );
      setSelectOptions([...selectOptions, option]);
    };

    useEffect(() => {
      if (searchValue === "") {
        const filteredOptions = options.filter(
          (option) => !selectedOptions.includes(option)
        );
        setSelectOptions(filteredOptions);
        return;
      }
      const filteredOptions = selectOptions.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSelectOptions(filteredOptions);
    }, [selectedOptions, searchValue, options]);

    return (
      <div ref={resultsRef} className="w-full relative">
        <InputWrapper
          role="button"
          onClick={openResults}
          className={containerClassName}
          labelClassName={labelClassName}
          inputContainerClassName={cn(
            "flex flex-wrap text-black gap-1 max-h-[5rem] overflow-y-auto items-center",
            inputContainerClassName
          )}
          name={props.name}
          label={label}
          error={error}
        >
          {!showOptions && (
            <div
              className={cn(
                " text-gray-400 text-sm flex gap-x-1 ",
                showOptions && "flex-1",
                !isMulti && "flex-1"
              )}
            >
              <span className="text-sm  ">{preText}</span>
              {!isMulti && selectedOptions.length > 0 && (
                <span className="text-black">
                  {displayValue
                    ? selectOptions[0].value
                    : selectedOptions[0].label}
                </span>
              )}
            </div>
          )}

          {isMulti && (
            <div className="flex flex-wrap gap-1 ">
              {selectedOptions.map((option) => (
                <SelectedItem
                  key={option.value}
                  option={option}
                  onRemove={handleRemove}
                />
              ))}
            </div>
          )}

          {showOptions && (
            <input
              ref={ref}
              value={searchValue}
              className={cn(
                "border-none outline-none bg-transparent w-full text-sm flex-1",
                className
              )}
              onChange={(e) => setSearchValue(e.target.value)}
              {...props}
            />
          )}
          <div className="flex-1 flex justify-end">
            <FontAwesomeIcon
              icon={!showOptions ? faChevronDown : faChevronUp}
              size="xs"
              className="text-gray-400"
            />
          </div>
        </InputWrapper>

        {/* Dropdown is placed after the InputWrapper */}
        {showOptions && (
          <div className="absolute right-0 top-full left-0 w-full z-10">
            {
              // Bubble list is a list that is displayed above the input
              bubleList && (
                <div
                  style={{
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
                  }}
                  className="bg-white w-full flex  gap-2 rounded-md overflow-auto max-h-[12rem] z-10 px-3 flex-wrap py-2 mt-1"
                >
                  {selectOptions.length > 0 ? (
                    selectOptions.map((option) => (
                      <span
                        key={option.value}
                        className={cn(
                          "px-2 bg-gray-100 hover:bg-slate-200 text-xs py-1 cursor-pointer rounded-full text-gray-600 border border-gray-200",
                          maxOptions &&
                            selectedOptions.length >= maxOptions &&
                            "cursor-not-allowed hover:bg-gray-100"
                        )}
                        onClick={() => handleSelect(option)}
                      >
                        <span>
                          {displayValue ? option.value : option.label}
                        </span>
                      </span>
                    ))
                  ) : (
                    <span className="px-2 hover:bg-pastel-blue text-sm py-1 cursor-pointer text-center">
                      No Result
                    </span>
                  )}
                </div>
              )
            }
            {!bubleList && (
              <ul
                style={{
                  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
                }}
                className="bg-white w-full flex flex-col  rounded-md overflow-auto max-h-[10rem] z-10 mt-1"
              >
                {selectOptions.length > 0 ? (
                  selectOptions.map((option) => (
                    <li
                      key={option.value}
                      className="px-2 hover:bg-pastel-blue text-gray-600 text-sm py-3 cursor-pointer border-b border-gray-200"
                      onClick={() => handleSelect(option)}
                    >
                      {option.listIcon && (
                        <FontAwesomeIcon icon={option.listIcon} />
                      )}
                      <span>{displayValue ? option.value : option.label}</span>
                    </li>
                  ))
                ) : (
                  <li className="px-2 hover:bg-pastel-blue text-sm py-1 cursor-pointer text-center">
                    No Result
                  </li>
                )}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  }
);

CustomSelect.displayName = "CustomSelect";
export default CustomSelect;
