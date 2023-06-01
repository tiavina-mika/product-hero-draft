import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { theme } from "./src/utils/theme";
import SettingsLayout from "./src/containers/settings/SettingsLayout";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <SettingsLayout />
        </EmotionThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
