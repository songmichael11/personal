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
      <a href="../assets/resume.docx" download>
        <ResumeIcon className="text-primary-foreground hover:text-primary h-15 w-15 fill-current transition" />
      </a>
    );
  } else {
    return (
      <a href={iconMap[type].url} target="_blank" rel="noopener noreferrer">
        {type === "github" && (
          <GitHubIcon className="text-primary-foreground hover:text-primary h-15 w-15 fill-current transition" />
        )}
        {type === "linkedin" && (
          <LinkedInIcon className="text-primary-foreground hover:text-primary h-15 w-15 fill-current transition" />
        )}
        {type === "email" && (
          <EmailIcon className="text-primary-foreground hover:text-primary h-15 w-15 fill-current transition" />
        )}
      </a>
    );
  }
};

export default Icon;
