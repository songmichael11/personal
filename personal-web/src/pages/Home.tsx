import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import LandingScreen from "../components/LandingScreen";
import NavBar from "../components/Navbar";

export const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  return (
    <div className="min-h-dvh-screen bg-background text-foreground flex flex-col overflow-x-hidden">
      <ThemeToggle onToggle={handleThemeToggle} isDarkMode={isDarkMode} />

      {/* background effects */}
      <LandingScreen />
      {/* header */}
      <NavBar />
      {/* main content */}
      {/* footer */}
    </div>
  );
};

export default Home;
