import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  const setMode = (mode: "light" | "dark") => {
    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
    } else {
      window.localStorage.setItem("theme", "dark");
    }
    setThemeMode(mode);
  };

  const toggleTheme = () => {
    if (themeMode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    setMounted(true);
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme === "light" || localTheme === "dark") {
      setThemeMode(localTheme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeMode("dark");
    }
  }, []);

  return { themeMode, toggleTheme, mounted };
};
