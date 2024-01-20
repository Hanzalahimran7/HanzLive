import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider,
  createTheme,
  PaletteMode,
  Box,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import ThemeModeToggle from './Coponents/ThemeModeToggle';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeMode, setThemeMode] = useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light'
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
