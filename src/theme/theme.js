import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffa040",
      main: "#ff6f00",
      dark: "#c43e00",
      contrastText: "#fff",
    },
    secondary: {
      light: "#64c1ff",
      main: "#0091ea",
      dark: "#0064b7",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto",
    htmlFontSize: 10,
    h4: {
      fontSize: "2.4rem",
      fontWeight: 500,
    },
  },
});
