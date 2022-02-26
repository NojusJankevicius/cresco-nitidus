import React from 'react';
import {
  Box,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar';

const PageLayout = () => (
  <Box>
    <Navbar />
    <Box component="main">
      <Outlet />
    </Box>
  </Box>
);

export default PageLayout;
