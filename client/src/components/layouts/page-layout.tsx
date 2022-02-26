import React from 'react';
import {
  Box, Theme,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar';

const PageLayout: React.FC = () => (
  <Box>
    <Navbar />
    <Box
      component="main"
      sx={(theme: Theme) => ({
        height: {
          // xs: `calc(100vh - ${theme.mixins.toolbar[theme.breakpoints.up('xs')].height}px)`,
          // md: `calc(100vh - ${theme.mixins.toolbar[theme.breakpoints.up('md')].height}px)`,
          xs: `calc(100vh - ${theme.mixins.toolbar.height}px)`,
        },
      })}
    >
      <Outlet />
    </Box>
  </Box>
);

export default PageLayout;
