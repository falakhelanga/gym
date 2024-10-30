import React from "react";
import { PlacesType, Tooltip, VariantType } from "react-tooltip";

interface TooltipProps {
  className?: string;
  id: string;
  place?: PlacesType;
  variant?: VariantType;
  content: string;
  backgroundColor?: string;
}

const CustomToolTip = ({
  className,
  content,
  id,
  place = "top",
  variant = "info",
  backgroundColor,
}: TooltipProps) => {
  return (
    <Tooltip
      style={{ backgroundColor: backgroundColor ?? "rgba(0,0,0,0.8)" }}
      className={className}
      id={id}
      place={place}
      variant={variant}
      content={content}
    />
  );
};

export default CustomToolTip;
