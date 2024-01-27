import { Box, Grid } from '@mui/material';
import LeftBar from './LeftBar';
import NavBar from './NavBar';
import { useState } from 'react';
import AboutMe from './AboutMe';

const Home = () => {
  const [currentPage, setCurrentPage] = useState<string>('Home');
  return (
    <Grid container spacing={0}>
      <Grid item xs={1}>
        <LeftBar />
      </Grid>
      <Grid item xs={11}>
        <Box className="h-screen flex flex-col">
          <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <AboutMe />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
