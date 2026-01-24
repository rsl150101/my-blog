import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: "light" | "dark";
    fontSize: {
      sm: string;
      md: string;
      ml: string;
      lg: string;
      xl: string;
    };
    colors: {
      background: string;
      layoutBg: string;
      text: string;
      subText: string;
      hoverText: string;
      primary: string;
      secondary: string;
      layoutBorder: string;
      boxBorder: string;
      boxShadow: string;
      categoryBtnActiveBg: string;
      categoryBtnActiveText: string;
    };
  }
}
