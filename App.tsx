import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { theme } from "./src/utils/theme";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <h1>Cool</h1>
        </EmotionThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
