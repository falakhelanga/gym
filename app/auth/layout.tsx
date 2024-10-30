import { cn } from "../../utils/utils";
import Image from "next/image";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div
        className={cn(
          "bg-[url('/images/auth.jpg')] bg-cover bg-no-repeat bg-center md:block hidden"
        )}
      ></div>
      <div className="">{children}</div>
    </div>
  );
};

export default layout;
