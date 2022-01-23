import React from 'react';

import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import StyledNavbarLink from './navbar-link-button';

const Mobile = ({
  handleOpenNavMenu,
  handleCloseNavMenu,
  anchorElNav,
  pages,

}) => (
  <Box sx={{
    flexGrow: 1,
    width: '100%',
    display: { xs: 'flex', md: 'none' },
    justifyContent: { xs: 'space-between' },
    alignItems: { xs: 'center' },
  }}
  >
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
      color="inherit"
    >
      <MenuIcon />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      {pages.map(({ page, link }) => (
        <StyledNavbarLink
          to={link}
          key={page}
        >
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        </StyledNavbarLink>
      ))}
    </Menu>
    <StyledNavbarLink
      to="/"
    >
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2 }}
      >
        cresco - nitidus
      </Typography>
    </StyledNavbarLink>
  </Box>
);
export default Mobile;
