import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider,
  createTheme,
  PaletteMode,
  Switch,
  Typography,
  Box,
} from '@mui/material';
import { useState } from 'react';

function App() {
  const [themeMode, setThemeMode] = useState<PaletteMode>('light');
  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="flex justify-center ">
        <Box className="flex flex-col justify-center items-center">
          <Typography variant="h4" component="h2">
            Toggle {themeMode === 'light' ? 'Dark' : 'Light'} Mode
          </Typography>
          <Switch
            aria-label="themeToggle"
            defaultChecked
            size="small"
            onChange={() =>
              setThemeMode(themeMode === 'light' ? 'dark' : 'light')
            }
          />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
