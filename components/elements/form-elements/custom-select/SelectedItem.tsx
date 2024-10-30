import React from "react";
import { Option } from "../select-input/SelectInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/pro-solid-svg-icons";

type SelectedItemProps = {
  option: Option;
  onRemove: (option: Option) => void;
};

const SelectedItem = ({ option, onRemove }: SelectedItemProps) => {
  return (
    <div className="bg-pastel-blue text-gray-600 rounded-md px-2 flex text-xs items-center py-1 gap-x-1">
      <span>{option.label}</span>
      <FontAwesomeIcon
        role="button"
        className="cursor-pointer hover:text-red-500"
        onClick={() => onRemove(option)}
        icon={faClose}
      />
    </div>
  );
};

export default SelectedItem;
