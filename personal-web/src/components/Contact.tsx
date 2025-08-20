import React from "react";
import EmailIcon from "../assets/gmail.svg?react";
import LinkedInIcon from "../assets/linkedin.svg?react";

export const Contact: React.FC = () => {
  return (
    <div
      className="bg-primary/50 flex flex-col items-center justify-center py-3 text-white"
      id="contact"
    >
      <h1 className="text-3xl font-semibold">Contact</h1>
      <h2 className="my--3 text-xl text-white/70">I'd love to talk/connect!</h2>
      <div className="divide-2 flex max-w-full flex-row justify-between gap-x-2 divide-gray-50 sm:max-w-3/4 sm:gap-x-0 lg:justify-around">
        <div className="flex flex-col items-center">
          <EmailIcon className="text-primary-foreground lg:translate-y--1 h-10 w-12 fill-current md:h-17 md:w-15" />
          <h3 className="text-xl lg:text-2xl">Email Me</h3>
          <a
            href="mailto:songmichael11@gmail.com"
            className="text-md text-sm text-white/80 hover:text-white sm:text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            songmichael11@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center">
          <LinkedInIcon className="text-primary-foreground h-10 w-10 fill-current sm:mb-1 md:h-15 md:w-15" />
          <h3 className="text-xl lg:text-2xl">Connect with Me</h3>
          <a
            href="https://www.linkedin.com/in/songmichael11"
            className="text-sm text-white/80 hover:text-white sm:text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/songmichael11
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
