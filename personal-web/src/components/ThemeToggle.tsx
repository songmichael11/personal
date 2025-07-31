import React from "react";

interface ThemeToggleProps {
  onToggle: () => void;
  isDarkMode: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = (props) => {
  return (
    <button
      className="button fixed right-5 bottom-3 z-10 flex flex-row justify-between text-2xl lg:space-x-2"
      onClick={props.onToggle}
    >
      <div className="hidden lg:block">
        {props.isDarkMode ? "Light" : "Dark"} Mode
      </div>
      <p>{props.isDarkMode ? "☀️" : "🌙"}</p>
    </button>
  );
};

export default ThemeToggle;
