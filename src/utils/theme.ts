import { createTheme } from "@mui/material";

const palette = {
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
};

export const theme = createTheme({
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: 16,
          textTransform: "initial",
          backgroundColor: palette.primary.main,
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
          padding: "12px 24px",
          borderRadius: 60,
          color: "white",
          border: "none"
        }
      }
    }
  },
  typography: {
    h1: {
      fontSize: 32,
      lineHeight: 1,
      fontWeight: 500,
      fontStyle: "normal",
      fontFamily: "Product Sans Regular"
    },
    h2: {
      fontSize: 22,
      lineHeight: 1.3,
      fontWeight: 400,
      fontStyle: "normal",
      fontFamily: "Product Sans Regular"
    },
    h3: {
      fontSize: 14,
      lineHeight: 1,
      fontWeight: 700,
      fontStyle: "normal",
      fontFamily: "Product Sans Regular"
    },
    h4: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400,
      fontStyle: "normal",
      fontFamily: "Product Sans Regular"
    },
    h5: {
      fontSize: 12,
      lineHeight: 1,
      fontWeight: 400,
      fontStyle: "normal",
      fontFamily: "Product Sans Regular"
    },
    caption: {
      fontSize: 10,
      color: palette.grey[300],
      fontStyle: "normal",
      fontFamily: "Product Sans Regular"
    }
  }
});
