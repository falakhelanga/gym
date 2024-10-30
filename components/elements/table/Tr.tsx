import { ComponentProps } from "react";
import { cn } from "../../../utils/utils";

type TrProps = ComponentProps<"tr"> & {
  isLast?: boolean;
  className?: string;
};

const Tr = ({ className, children, isLast = false }: TrProps) => {
  return (
    <tr
      className={cn("border-b border-gray-200 hover:bg-slate-200", className)}
    >
      {children}
    </tr>
  );
};

export default Tr;
