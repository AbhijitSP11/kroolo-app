"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
    document.documentElement.classList.add(systemTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div
      onClick={toggleTheme}
      className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
        theme === "light" ? "bg-yellow-400" : "bg-black"
      }`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <div
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center transform transition-transform duration-300 ${
          theme === "light" ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {theme === "light" ? (
          <Sun className="h-3.5 w-3.5 text-yellow-600" />
        ) : (
          <Moon className="h-3.5 w-3.5 text-gray-200" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
