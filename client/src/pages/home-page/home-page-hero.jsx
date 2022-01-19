import React from 'react';
import { Typography, Box } from '@mui/material';

const Hero = () => (
  <Box sx={(theme) => ({
    height: {
      xs: `calc(100vh - ${theme.mixins.toolbar[theme.breakpoints.up('xs')].height}px)`,
      md: `calc(100vh - ${theme.mixins.toolbar[theme.breakpoints.up('md')].height}px)`,
    },
  })}
  >
    <Box sx={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/home-page.jfif)',
      backgroundSize: 'cover',
      height: '100%',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}
    >
      <Box sx={{ width: { sm: '90%', md: '50%' } }}>
        <Typography variant="h5" component="h2" align="center" color="common.white">
          Jei mėgstate sodinti, bet nemėgstate purvo, jūs vis dar galite turėti sodą
        </Typography>
      </Box>
      <Box sx={{ width: { sm: '90%', md: '50%' } }}>
        <Typography variant="h3" component="h1" align="center" color="common.white">
          Auginkite daržoves ir grybus namuose be jokios žemės
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default Hero;
