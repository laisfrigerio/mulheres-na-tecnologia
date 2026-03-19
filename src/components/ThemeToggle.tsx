"use client";

import { useState, useEffect } from "react";
import { toggleTheme, setTheme, initializeTheme, Theme } from "@/utils/theme";

export const ThemeToggle = () => {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initialTheme = initializeTheme();
    setThemeState(initialTheme);
  }, []);

  const handleToggle = () => {
    const newTheme = toggleTheme(theme);
    setThemeState(newTheme);
  };

  if (!mounted) return null;

  return (
    <button
      id="theme-toggle"
      className="theme-toggle"
      onClick={handleToggle}
      aria-label="Alternar tema"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};
