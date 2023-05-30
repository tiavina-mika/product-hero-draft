import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3d5af1",
      light: "#e8ebff",
      dark: "#9eadfa",
      contrastText: "#fff"
    },
    error: {
      main: "#ff3b5f",
      light: "#fff2f5",
      dark: "#ff869c",
      contrastText: "#fff"
    },
    warning: {
      main: "#ff8246",
      light: "#fff5e7",
      dark: "#fdb44b",
      contrastText: "#fff"
    },
    info: {
      main: "#3dc4d0",
      light: "#eafcff",
      dark: "#a4e7ed",
      contrastText: "#fff"
    },
    success: {
      main: "#00ed98",
      light: "#dbfff2",
      dark: "#78ffcf",
      contrastText: "#fff"
    },
    grey: {
      50: "#ffffff",
      100: "#f3f3f3",
      300: "#c4c4c4",
      600: "#a0a0a0",
      800: "#303030",
      900: "#1f1f1f"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: 16,
          textTransform: "initial",
          backgroundColor: "#3d5af1",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
          padding: "12px 24px",
          borderRadius: 60,
          color: "white",
          border: "none"
        }
      }
    }
  }
});
