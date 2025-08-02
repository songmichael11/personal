import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { cn } from "../lib/utils";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={cn(
        "fixed z-40 w-full py-5 transition-all duration-300",
        isScrolled ? "bg-card/80 backdrop-blur-sm" : "bg-transparent",
      )}
    >
      {/* non-mobile one */}
      <div className="container flex justify-between">
        <div className="flex w-full flex-row justify-start space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-opacity-100 hover:text-primary text-xl font-medium text-white transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
