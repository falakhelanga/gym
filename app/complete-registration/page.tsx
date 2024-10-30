import WelcomeRegistration from "@/components/section/registration/WelcomeRegistration";
import React from "react";

const CompleteRegistration = () => {
  return (
    <div className="h-screen overflow-auto w-full flex justify-center items-center">
      <div className="md:w-[60%] h-[80%]">
        <WelcomeRegistration />
      </div>
    </div>
  );
};

export default CompleteRegistration;
