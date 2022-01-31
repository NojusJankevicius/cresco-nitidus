import React, { useState } from 'react';
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
import StyledLink from '../../../styles/styled-link';
import StyledNavbarLink from './navbar-link-button';
import routes from '../../../routing/routes';

const UserMenu = ({ settings }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0, display: 'flex' }}>
      <StyledNavbarLink to={routes.CartPage}>
        <IconButton>
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </StyledNavbarLink>
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
        {settings.map(({ setting, link, onClick }) => (
          <StyledLink key={setting} to={link}>
            <MenuItem key={setting} onClick={onClick}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          </StyledLink>
          // ? signOut onClick'ui nereikia linko
          // ! banždiau perduoti su if'ais bet reikia return statement?
          // ! <MenuItem key={setting} onClick={onClick}>
          // !  <Typography textAlign="center">{setting}</Typography>
          // ! </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default UserMenu;
