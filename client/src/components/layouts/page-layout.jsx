import React from 'react';
import {
  Box,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar';

const PageLayout = () => (
  <Box>
    <Navbar />
    <Box
      component="main"
      sx={(theme) => ({
        height: {
          xs: `calc(100vh - ${theme.mixins.toolbar[theme.breakpoints.up('xs')].height}px)`,
          md: `calc(100vh - ${theme.mixins.toolbar[theme.breakpoints.up('md')].height}px)`,
        },
      })}
    >
      <Outlet />
    </Box>
  </Box>
);

export default PageLayout;
