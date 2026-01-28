import React, { createContext, useState, useEffect, ReactNode } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

import { lightTheme, darkTheme } from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import PrismStyles from "../styles/PrismStyles";

interface ThemeContextType {
  themeMode: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  const setMode = (mode: "light" | "dark") => {
    window.localStorage.setItem("theme", mode);
    setThemeMode(mode);
  };

  const toggleTheme = () => {
    setMode(themeMode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
    const localTheme = window.localStorage.getItem("theme") as "light" | "dark";
    if (localTheme) {
      setThemeMode(localTheme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeMode("dark");
    }
  }, []);

  const themeObject = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <StyledProvider theme={themeObject}>
        <GlobalStyle />
        <PrismStyles />
        {!mounted ? <div style={{ visibility: "hidden" }}>{children}</div> : children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
};
