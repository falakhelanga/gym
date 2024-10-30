import { ContentWrapper } from "@/components";

import { WelcomeComponent } from "@/components/section/welcome/Welcome";
import React from "react";

const Welcome = () => {
  return (
    <div>
      <ContentWrapper className="flex">
        <WelcomeComponent />
      </ContentWrapper>
    </div>
  );
};

export default Welcome;
