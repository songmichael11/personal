import React from "react";
import photo1 from "../assets/photo1.jpg";
import { Icon } from "../components/Icon";

export const LandingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <img
        src={photo1}
        alt="Background Photo 1"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="text-primary-foreground relative z-10 flex h-full flex-col items-center justify-center">
        <p className="text-5xl text-shadow-black text-shadow-sm md:text-8xl xl:text-[150px]">
          Michael Song
        </p>
        <p className="md:text-lg xl:text-2xl">
          CS + Biology @ Northeastern | Software Developer @ Sandbox
        </p>
        <div className="flex flex-row">
          <Icon type="github" />
          <Icon type="linkedin" />
          <Icon type="email" />
          <Icon type="resume" />
        </div>
      </div>

      <div className="text-primary-foreground text-md absolute bottom-3 left-5 z-15">
        Photo taken in the Chartreuse Mountains, by me!
      </div>
    </div>
  );
};

export default LandingScreen;
