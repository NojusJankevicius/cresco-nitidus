import React, { MouseEventHandler } from 'react';

import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkButton from './navbar-link-button';
import routes from '../../../routing/routes';

export type NavbarMobileProps = {

  handleOpenNavMenu: MouseEventHandler<HTMLButtonElement>,
  handleCloseNavMenu: MouseEventHandler<HTMLLIElement>,
  anchorElNav: Element | null,
  pages: {
    page: string,
    link: string,
  }[]
};

const NavbarMobile: React.FC<NavbarMobileProps> = ({
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
      aria-label="menu"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
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
        <LinkButton
          to={link}
          key={page}
        >
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        </LinkButton>
      ))}
    </Menu>
    <LinkButton
      to={routes.HomePage}
    >
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2 }}
      >
        cresco - nitidus
      </Typography>
    </LinkButton>
  </Box>
);
export default NavbarMobile;
