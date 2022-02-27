import React, { MouseEvent, useState } from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import routes from '../../../routing/routes';
import AuthService from '../../../services/auth-service';
import StyledLink from '../../../styles/styled-link';
import LinkButton from './navbar-link-button';

export type NavbarUserMenu = {
  settings: {
    setting: string,
    link: string,
  }[]
};

const NavbarUserMenu: React.FC<NavbarUserMenu> = ({ settings }) => {
  const [anchorElUser, setAnchorElUser] = useState<Element | null>(null);

  const handleOpenUserMenu: React.MouseEventHandler = (event: MouseEvent<Element>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = () => {
    handleCloseNavMenu();
    AuthService.signOut();
  };

  return (
    <Box sx={{ flexGrow: 0, display: 'flex' }}>
      <LinkButton to={routes.CartPage}>
        <IconButton>
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </LinkButton>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ py: 1 }}>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(({ setting, link }) => (
          <StyledLink key={setting} to={link}>
            <MenuItem key={setting} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          </StyledLink>
        ))}
        <MenuItem onClick={handleSignOut}>
          <Typography>Atsijungti</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default NavbarUserMenu;
