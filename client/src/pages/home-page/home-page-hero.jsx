import React from 'react';
import { Typography, Container } from '@mui/material';

import BackgroundImageContainer from '../../components/containers/background-image-container';

const Hero = () => (

  <BackgroundImageContainer sx={{
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/home-page.jfif)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  }}
  >
    <Container sx={{ width: { sm: '90%', md: '50%' } }}>
      <Typography variant="h5" component="h2" align="center" color="common.white">
        Jei mėgstate sodinti, bet nemėgstate purvo, jūs vis dar galite turėti sodą
      </Typography>
    </Container>
    <Container sx={{ width: { sm: '90%', md: '50%' } }}>
      <Typography variant="h3" component="h1" align="center" color="common.white">
        Auginkite daržoves ir grybus namuose be jokios žemės
      </Typography>
    </Container>
  </BackgroundImageContainer>
);

export default Hero;
