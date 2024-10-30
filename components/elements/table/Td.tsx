import { cn } from "../../../utils/utils";
import { ComponentProps } from "react";

type TdProps = ComponentProps<"td"> & {
  className?: string;
};

const Td = ({ className, children, ...props }: TdProps) => {
  return (
    <td
      className={cn(
        "text-sm font-normal text-darkblue text-start   cursor-pointer h-16",
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
};

export default Td;
