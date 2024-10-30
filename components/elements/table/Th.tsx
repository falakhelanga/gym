import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "../../../utils/utils";
import { ComponentProps } from "react";
import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";

type ThProps = ComponentProps<"th"> & {
  className?: string;
  isSortable?: boolean;
};
const Th = ({ className, children, isSortable = false, ...props }: ThProps) => {
  return (
    <th
      className={cn(
        "text-sm font-normal text-gray-400 text-start pb-4 cursor-pointer  capitalize",
        isSortable && "hover:text-gray-800",
        className
      )}
      {...props}
    >
      {children}
      {isSortable && <FontAwesomeIcon icon={faChevronDown} className="ml-2" />}
    </th>
  );
};

export default Th;
