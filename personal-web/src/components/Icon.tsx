import React from "react";
import GitHubIcon from "../assets/github.svg?react";
import LinkedInIcon from "../assets/linkedin.svg?react";
import EmailIcon from "../assets/gmail.svg?react";
import ResumeIcon from "../assets/resume.svg?react";

interface IconProps {
  type: "github" | "linkedin" | "email" | "resume";
}

interface IconData {
  url: string;
}

export const Icon: React.FC<IconProps> = ({ type }) => {
  const iconMap: Record<string, IconData> = {
    github: {
      url: "https://github.com/songmichael11",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/songmichael11/",
    },
    email: {
      url: "mailto:songmichael11@gmail.com",
    },
  };

  if (type === "resume") {
    return (
      <a href="./resume.docx" download>
        <ResumeIcon className="text-primary-foreground hover:text-primary h-10 w-10 fill-current transition md:h-15 md:w-15" />
      </a>
    );
  } else {
    return (
      <a href={iconMap[type].url} target="_blank" rel="noopener noreferrer">
        {type === "github" && (
          <GitHubIcon className="text-primary-foreground hover:text-primary h-10 w-10 fill-current transition md:h-15 md:w-15" />
        )}
        {type === "linkedin" && (
          <LinkedInIcon className="text-primary-foreground hover:text-primary h-10 w-10 fill-current transition md:h-15 md:w-15" />
        )}
        {type === "email" && (
          <EmailIcon className="text-primary-foreground hover:text-primary translate-y--1 h-10 w-12 fill-current transition md:h-17 md:w-15" />
        )}
      </a>
    );
  }
};

export default Icon;
