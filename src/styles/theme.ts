import { DefaultTheme } from "styled-components";

const defaultTheme = {
  fontSize: {
    sm: "0.875rem",
    md: "1rem",
    ml: "1.25rem",
    lg: "1.5rem",
    xl: "2rem",
  },
};

export const lightTheme: DefaultTheme = {
  name: "light",
  ...defaultTheme,
  colors: {
    background: "#f8f9fa",
    layoutBg: "#ffffff",
    text: "#333333",
    subText: "#555555",
    hoverText: "#000000",
    primary: "#0055ff",
    secondary: "#f5f5f5",
    layoutBorder: "#eeeeee",
    boxBorder: "#dddddd",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
    categoryBtnActiveBg: "#e6f7ff",
    categoryBtnActiveText: "#007acc",
  },
};

export const darkTheme: DefaultTheme = {
  name: "dark",
  ...defaultTheme,
  colors: {
    background: "#0d1117",
    layoutBg: "#161b22",
    text: "#e2e8f0",
    subText: "#8b949e",
    hoverText: "#58a6ff",
    primary: "#58a6ff",
    secondary: "#21262d",
    layoutBorder: "#30363d",
    boxBorder: "#30363d",
    boxShadow: "0 2px 5px rgba(255,255,255, 0.05)",
    categoryBtnActiveBg: "#3a8cff26",
    categoryBtnActiveText: "#58a6ff",
  },
};
