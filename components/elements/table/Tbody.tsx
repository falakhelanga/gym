import { cn } from "../../../utils/utils";
import { ComponentProps } from "react";

type TbodyProps = ComponentProps<"tbody"> & {
  className?: string;
};

const Tbody = ({ className, children, ...props }: TbodyProps) => {
  return (
    <tbody className={cn("", className)} {...props}>
      {children}
    </tbody>
  );
};

export default Tbody;
