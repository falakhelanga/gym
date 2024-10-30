import { cn } from "../../../utils/utils";
import { ComponentProps } from "react";

type TheadProps = ComponentProps<"thead"> & {
  className?: string;
};

const Thead = ({ className, children, ...props }: TheadProps) => {
  return (
    <thead
      style={{
        borderBottom: "1px solid #D9D9D9",
      }}
      className={cn("bg-[#f5f5f5]", className)}
      {...props}
    >
      <tr>{children}</tr>
    </thead>
  );
};

export default Thead;
