import React from "react";
import photo1 from "../assets/photo1.jpg";
import { Icon } from "../components/Icon";
import ArrowIcon from "../assets/arrow-down.svg?react";
import { RoleRotator } from "./landing/RoleRotator";

export const LandingScreen: React.FC = () => {
  return (
    <div
      className="relative z-0 min-h-screen text-shadow-black text-shadow-sm"
      id="hero"
    >
      <img
        src={photo1}
        alt="Background Photo 1"
        className="absolute inset-0 h-full w-full object-cover brightness-80"
      />
      <div className="text-primary-foreground relative z-10 flex min-h-screen flex-col items-center justify-center">
        <p className="text-5xl text-shadow-black text-shadow-sm md:text-8xl xl:text-[150px]">
          Michael Song
        </p>
        <p className="text-shadow-black text-shadow-sm md:text-lg xl:text-2xl">
          <RoleRotator
            roles={[
              "Computer Science + Biology @ Northeastern",
              "Full Stack SWE Co-op @ Hometap",
              "Incoming Backend SWE Intern @ HubSpot",
            ]}
            intervalMs={2500}
          />
        </p>
        <div className="mt-3 flex w-1/2 flex-row justify-between md:w-1/3">
          <Icon type="github" />
          <Icon type="linkedin" />
          <Icon type="email" />
          <Icon type="resume" />
        </div>
        <a href="#about">
          <ArrowIcon className="hover:text-primary absolute bottom-5 z-20 h-10 w-10 animate-bounce fill-current text-white transition" />
        </a>
      </div>
      <div className="text-primary-foreground absolute right-5 bottom-3 z-15 text-[12px] sm:text-sm lg:text-lg">
        I took this photo in the Chartreuse Mountains!
      </div>
    </div>
  );
};

export default LandingScreen;
