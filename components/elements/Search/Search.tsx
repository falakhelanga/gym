import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "../../../utils/utils";
import React from "react";
import { faSearch, faSliders } from "@fortawesome/pro-solid-svg-icons";

interface SearchProps {
  className?: string;
  placeholder?: string;
}

const Search = ({ className, placeholder }: SearchProps) => {
  return (
    <div
      className={cn(
        "rounded-md border text-gray-400 flex items-center px-2  bg-gray-200 border-gray-300 search-container focus-within:border-light-blue focus-within:bg-transparent",
        className
      )}
    >
      <FontAwesomeIcon
        icon={faSearch}
        size="sm"
        className="text-gray-400 mr-1 cursor-pointer"
      />
      <input
        type="text"
        className="w-full border-none outline-none bg-transparent rounded flex-1 placeholder:text-sm search-input"
        placeholder={placeholder ? placeholder : "search"}
      />
      <FontAwesomeIcon
        icon={faSliders}
        size="sm"
        className="text-gray-400 ml-1 cursor-pointer"
      />
    </div>
  );
};

export default Search;
