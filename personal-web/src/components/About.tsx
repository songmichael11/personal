import React from "react";
import pfp from "../assets/pfp.png";

export const About: React.FC = () => {
  return (
    <div
      className="bg-primary/50 flex h-full w-full flex-col items-center justify-center py-3"
      id="about"
    >
      <h1 className="text-opacity-100 mt-5 text-3xl font-bold text-white">
        Nice to meet you!
      </h1>
      <div className="mx-5 mb-5 flex flex-row items-center justify-center space-x-5 text-lg text-white md:mx-30 md:text-xl">
        <img
          src={pfp}
          alt="Profile"
          className="border-primary mt-5 ml-10 h-80 w-80 rounded-full border-4"
        />
        <p className="text-opacity-100 mt-5 text-left text-xl text-white">
          I'm Michael Song, a class of 2028 B.S. computer science and biology
          student at Northeastern University. I'm interested in software
          engineering, bioinformatics, and machine learning.
          <br />
          <br />
          <span className="hidden lg:block">
            In the past, I've worked on projects involving web development, data
            analysis, and AI in both industry and academic settings. Currently,
            I'm a data analyst at Kaerwell and a software developer for Sandbox
            Software Consultancy at Northeastern. Outside of class and work, I'm
            involved with the Society of Asian Scientists and Engineers (SASE)
            and Volleyball.
          </span>
          <br />
          I'm currently looking for research opportunities year-round, co-ops
          for Spring 2026, and internships for Summer 2026. If you have any
          questions or would like to connect, feel free to reach out!
        </p>
      </div>
    </div>
  );
};

export default About;
