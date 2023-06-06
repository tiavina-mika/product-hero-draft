import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import CreateTeamPage from "./src/containers/team/CreateTeamPage";
import { theme } from "./src/utils/theme";
// import HomeLayout from "./src/containers/home/HomeLayout";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <CreateTeamPage />
        </EmotionThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
