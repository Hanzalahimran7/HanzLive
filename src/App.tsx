import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider,
  createTheme,
  PaletteMode,
  useMediaQuery,
} from '@mui/material';
import { useEffect, useState } from 'react';
import Home from './Coponents/Home';

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
      <Home />
      {/* <ThemeModeToggle mode={themeMode} setMode={setThemeMode} />
      <Box className="flex justify-center m-10">
        <Clock />
      </Box> */}
    </ThemeProvider>
  );
}

export default App;
