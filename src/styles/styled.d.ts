import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      border: string;
    };
  }
}
