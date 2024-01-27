import { Box, Button } from '@mui/material';
import { appConstants } from './constants';
import ThemeModeToggle from './ThemeModeToggle';

type navBarProps = {
  currentPage: string;
  setCurrentPage: (option: string) => void;
};
const NavBar: React.FC<navBarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <Box className="flex flex-row mt-11 ml-20">
      <Box className="flex flex-row gap-x-11">
        {appConstants.nav.map((option: string) => (
          <Button
            variant={option === currentPage ? 'outlined' : 'text'}
            color="primary"
            onClick={() => setCurrentPage(option)}
            style={{ whiteSpace: 'nowrap' }}
          >
            {option}
          </Button>
        ))}
      </Box>
      <Box className="flex flex-row w-full justify-end items-center mr-24">
        <ThemeModeToggle />
      </Box>
    </Box>
  );
};

export default NavBar;
