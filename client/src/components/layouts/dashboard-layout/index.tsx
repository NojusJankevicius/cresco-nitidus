import React, { useState } from 'react';
import {
  Box, IconButton, Theme, useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from 'react-router-dom';
import Navbar from '../../partials/navbar';
import DashboardLayoutDrawer from './dashboard-layout-drawer';
import DashboardLayoutMain from './dashboard-layout-main';

const PageLayout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery(({ breakpoints }: Theme) => breakpoints.down('lg'));

  const handleDrawerToggle = () => setOpen(!open);

  return (
    <Box>
      <Navbar />
      <DashboardLayoutDrawer
        open={open}
        isSmallScreen={isSmallScreen}
      />
      <DashboardLayoutMain open={open}>
        <Outlet />
      </DashboardLayoutMain>
      {isSmallScreen && (
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          size="large"
          sx={(theme) => ({
            position: 'fixed',
            bottom: 30,
            right: 30,
            mr: 2,
            bgcolor: 'primary.light',
            borderRadius: theme.shape.borderRadius,
            ':hover': {
              bgcolor: 'primary.dark',
            },
          })}
        >
          <MenuIcon sx={{ color: 'common.white' }} />
        </IconButton>
      )}
    </Box>
  );
};

export default PageLayout;
