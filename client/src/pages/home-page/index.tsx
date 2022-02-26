import React from 'react';
import { ThemeProvider } from '@mui/material';
import { responsiveFont } from '../../styles/theme';

import Hero from './home-page-hero';
import Courses from './home-page-courses';

const HomePage = () => (
  <ThemeProvider theme={responsiveFont}>
    <Hero />
    <Courses />
  </ThemeProvider>
);

export default HomePage;
