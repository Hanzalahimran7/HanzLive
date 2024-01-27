import { Box, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeModeToggle = () => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  return (
    <Box className="flex flex-row justify-center items-center">
      <LightModeIcon color="primary" />
      <Switch
        aria-label="themeToggle"
        size="small"
        onChange={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
        color="default"
        checked={themeMode === 'light' ? false : true}
      />
      <DarkModeIcon color="primary" />
    </Box>
  );
};

export default ThemeModeToggle;
