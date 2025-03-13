"use client";

import { MoonIcon, SunIcon } from "@/_components/icon";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on user preference or system setting
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Set initial theme based on saved preference or system preference
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Update theme when state changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bottom-0 right-0 fixed md:p-5 p-4 z-40">
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-200 p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <span
          className={`${
            isDarkMode ? "translate-x-8" : "translate-x-0"
          } inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out dark:bg-gray-800`}
        >
          {isDarkMode ? (
            <MoonIcon width="20" height="20" className="text-indigo-500" />
          ) : (
            <SunIcon width="20" height="20" className="text-yellow-500" />
          )}
        </span>
      </button>
    </div>
  );
}
