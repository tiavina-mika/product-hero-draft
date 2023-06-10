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

const defaultTypographyStyles = {
  lineHeight: 1,
  fontWeight: 400,
  fontStyle: "normal",
  fontFamily: "Product Sans Regular"
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
      ...defaultTypographyStyles,
      fontSize: 32,
      fontWeight: 500
    },
    h2: {
      ...defaultTypographyStyles,
      fontSize: 22,
      lineHeight: 1.3
    },
    h3: {
      ...defaultTypographyStyles,
      fontSize: 14,
      fontWeight: 700
    },
    h4: {
      ...defaultTypographyStyles,
      fontSize: 14,
      lineHeight: 1.5
    },
    h5: {
      ...defaultTypographyStyles,
      fontSize: 12
    },
    h6: {
      ...defaultTypographyStyles,
      fontSize: 10
    },
    body2: {
      ...defaultTypographyStyles,
      fontSize: 10,
      color: palette.grey[600]
    },
    caption: {
      ...defaultTypographyStyles,
      fontSize: 10,
      color: palette.grey[300]
    }
  }
});
