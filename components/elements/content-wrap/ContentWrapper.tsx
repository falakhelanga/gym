import { cn } from "../../../utils/utils";
import { ReactNode, ComponentProps } from "react";

type ContentWrapperProps = ComponentProps<"div"> & {
  className?: string;
};

export const ContentWrapper = ({
  className = "",
  ...rest
}: ContentWrapperProps) => {
  return <div className={cn(" mx-auto w-full  px-8", className)} {...rest} />;
};
