import { PaletteMode } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

export const appConstants = {
  urls: {
    twiitter: 'https://www.x.com/hnzlak9',
    github: 'https://www.github.com/hanzalahimran7',
    linkedin: 'https://www.linkedin.com/in/hanzalah-imran-ab8703151/',
  },
  nav: ['Home', 'About me', 'My Blog', 'Contact'],
};

export interface ThemeContextType {
  themeMode: PaletteMode;
  setThemeMode: Dispatch<SetStateAction<PaletteMode>>;
}
