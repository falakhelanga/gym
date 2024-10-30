import { Option } from "@/components/elements/form-elements/select-input/SelectInput";
import { faClose } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface TrackFieldOptionProps {
  option: Option;
  handleRemoveTrackingField: (option: Option) => void;
}

const TrackFieldOption = ({
  option,
  handleRemoveTrackingField,
}: TrackFieldOptionProps) => {
  return (
    <div className="bg-white shadow-md text-xs px-2 py-1 rounded flex items-center gap-1">
      <span>{option.label}</span>
      <FontAwesomeIcon
        role="button"
        onClick={() => handleRemoveTrackingField(option)}
        icon={faClose}
        className="text-red-500 cursor-pointer"
      />
    </div>
  );
};

export default TrackFieldOption;
