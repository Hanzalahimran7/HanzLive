import { PaletteMode, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import React from 'react';

interface ThemeModeProps {
  mode: PaletteMode;
  setMode: (mode: PaletteMode) => void;
}

const ThemeModeToggle: React.FC<ThemeModeProps> = ({ mode, setMode }) => {
  return (
    <>
      <LightModeIcon />
      <Switch
        aria-label="themeToggle"
        size="small"
        onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
        color="default"
        checked={mode === 'light' ? false : true}
      />
      <DarkModeIcon />
    </>
  );
};

export default ThemeModeToggle;
