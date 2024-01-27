import { Box, Grid, Typography, useTheme } from '@mui/material';

const AboutMe = () => {
  const { palette } = useTheme();
  const color =
    palette.mode === 'dark' ? palette.primary.dark : palette.primary.light;
  const secondaryColor =
    palette.mode === 'dark' ? palette.secondary.dark : palette.secondary.light;
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Box className="w-auto flex flex-col ml-20 mt-48">
          <Typography variant="body1">Hi there,</Typography>
          <Box className="flex flex-row">
            <Typography variant="h1">I am </Typography>
            <Typography variant="h1" color={color}>
              &nbsp;H
            </Typography>
            <Typography variant="h1">anzalah </Typography>
          </Box>
          <Box className="flex flex-row">
            {/* <Typography variant="h3">I am a</Typography> */}
            <Typography variant="h3" color={secondaryColor}>
              S/W &nbsp;
            </Typography>
            <Typography variant="h3">Engineer</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4}>
        h
      </Grid>
    </Grid>
  );
};

export default AboutMe;
