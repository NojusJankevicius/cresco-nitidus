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

const UserMenu = ({ handleCloseNavMenu, settings }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0, display: 'flex' }}>
      <IconButton>
        <ShoppingCartOutlinedIcon />
      </IconButton>
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
      </Menu>
    </Box>
  );
};

export default UserMenu;
