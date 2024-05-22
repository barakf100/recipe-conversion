import { createTheme } from "@mui/material/styles";

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                  primary: {
                      main: "#1976d2",
                  },
                  secondary: {
                      main: "#dc004e",
                  },
                  background: {
                      default: "#ffffff",
                      paper: "#ffffff",
                  },
                  text: {
                      primary: "#000000",
                      secondary: "#333333",
                  },
              }
            : {
                  primary: {
                      main: "#90caf9",
                  },
                  secondary: {
                      main: "#f48fb1",
                  },
                  background: {
                      default: "#121212",
                      paper: "#1e1e1e",
                  },
                  text: {
                      primary: "#ffffff",
                      secondary: "#cccccc",
                  },
              }),
    },
    typography: {
        fontFamily: "Roboto, Arial, sans-serif",
    },
});

const theme = (isDarkTheme) => createTheme(getDesignTokens(isDarkTheme ? "dark" : "light"));

export default theme;
