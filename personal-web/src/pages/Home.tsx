import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import LandingScreen from "../components/LandingScreen";
import NavBar from "../components/Navbar";
import { About } from "../components/About";
import { Employment } from "../components/Employment";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Education } from "@/components/Education";

export const Home: React.FC = () => {
  const [_, setIsDarkMode] = useState(true);

  // const handleThemeToggle = () => {
  //   setIsDarkMode(!isDarkMode);
  //   document.documentElement.classList.toggle("dark", !isDarkMode);
  //   localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  // };

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setIsDarkMode(savedTheme === "dark");
        document.documentElement.classList.toggle(
          "dark",
          savedTheme === "dark",
        );
      }
    }
  }, []);

  return (
    <div className="min-h-dvh-screen flex flex-col overflow-x-hidden">
      {/* <ThemeToggle onToggle={handleThemeToggle} isDarkMode={isDarkMode} /> */}

      <LandingScreen />
      <NavBar />
      <About />
      <Employment />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
