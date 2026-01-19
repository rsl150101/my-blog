import { DefaultTheme } from "styled-components";

const defaultTheme = {
  fontSize: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
};

export const lightTheme: DefaultTheme = {
  ...defaultTheme,
  colors: {
    background: "#ffffff",
    text: "#333333",
    primary: "#6200ee",
    secondary: "#f5f5f5",
    border: "#e0e0e0",
  },
};

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  colors: {
    background: "#121212",
    text: "#e0e0e0",
    primary: "#bb86fc",
    secondary: "#1e1e1e",
    border: "#333333",
  },
};
