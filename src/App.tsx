import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider,
  createTheme,
  PaletteMode,
  useMediaQuery,
  Box,
} from '@mui/material';
import { useEffect, useState } from 'react';
import ThemeModeToggle from './Coponents/ThemeModeToggle';
import Clock from './Coponents/Clock';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeMode, setThemeMode] = useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light'
  );

  useEffect(() => {
    setThemeMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeModeToggle mode={themeMode} setMode={setThemeMode} />
      <Box className="flex justify-center m-10">
        <Clock />
      </Box>
    </ThemeProvider>
  );
}

export default App;
