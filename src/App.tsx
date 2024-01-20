import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme, PaletteMode, Box } from '@mui/material';
import { useState } from 'react';
import ThemeModeToggle from './Coponents/ThemeModeToggle';

function App() {
  const getCurrentTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [themeMode, setThemeMode] = useState<PaletteMode>(
    getCurrentTheme() ? 'dark' : 'light'
  );

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="flex flex-row justify-center items-center">
        <ThemeModeToggle mode={themeMode} setMode={setThemeMode} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
