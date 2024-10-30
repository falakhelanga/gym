"use client";
import React, { ComponentProps } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import useClickOutside from "@/hooks/useClickoutside";
import { cn } from "../../../utils/utils";

type ModalProps = ComponentProps<"div"> & {
  children: React.ReactNode;
  className?: string;
};

const Modal = ({ children, className, ...props }: ModalProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const closeModal = () => {
    router.push(pathname, undefined);
  };
  const modalRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, closeModal);
  return (
    <div className="h-screen w-screen bg-[rgba(0,0,0,0.7)] fixed top-0 left-0 z-10 flex justify-center items-center">
      <div
        ref={modalRef}
        className={cn(
          "max-w-[80%] bg-[#f5f5f5] p-8 rounded-lg overflow-y-auto",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
