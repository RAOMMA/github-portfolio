import { ThemeProvider as ReactThemeProvider } from "styled-components";
import palette from "./palette.js";

const ThemeProvider = ({ children }) => {
  const theme = {
    name: "defualt",
    colors: palette,
  };

  return <ReactThemeProvider theme={theme}>{children}</ReactThemeProvider>;
};

export default ThemeProvider;
