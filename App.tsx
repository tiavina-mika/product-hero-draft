import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { theme } from "./src/utils/theme";
// import HomeLayout from "./src/containers/home/HomeLayout";
import CreateTeam from "./src/containers/team/CreateTeam";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <CreateTeam />
        </EmotionThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
