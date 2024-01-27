import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { PaletteMode, createTheme, useMediaQuery } from '@mui/material';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { ThemeContextType } from './constants';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
  themeMode: 'light',
  setThemeMode: () => console.log('initializing'),
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
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
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
