import { Box, useTheme } from '@mui/material';
import Logo from '../Assets/H';
import { Twitter, LinkedIn, GitHub } from '@mui/icons-material';
import { appConstants } from './constants';

const LeftBar = () => {
  const { palette } = useTheme();
  const themeMode = palette.mode;
  const color =
    themeMode === 'dark' ? palette.primary.dark : palette.primary.light;
  console.log();
  return (
    <Box
      className="h-screen flex flex-col border-r border-dotted"
      sx={{
        borderColor:
          themeMode === 'dark' ? palette.primary.dark : palette.primary.light,
      }}
    >
      <Box className="flex justify-center mt-4 social-icon text-primary transition-transform duration-300 transform hover:scale-125 cursor-pointer">
        <Logo width={37} height={67} color={color} />
      </Box>
      <Box className=" flex flex-col h-screen justify-end items-center">
        <Box className="flex flex-col mb-20 gap-7">
          <Twitter
            className="social-icon text-primary transition-transform duration-300 transform hover:scale-125 cursor-pointer"
            color="primary"
            onClick={() => window.open(appConstants.urls.twiitter)}
          />
          <LinkedIn
            className="social-icon text-primary transition-transform duration-300 transform hover:scale-125 cursor-pointer"
            color="primary"
            onClick={() => window.open(appConstants.urls.linkedin)}
          />
          <GitHub
            className="social-icon text-primary transition-transform duration-300 transform hover:scale-125 cursor-pointer"
            color="primary"
            onClick={() => window.open(appConstants.urls.github)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LeftBar;
