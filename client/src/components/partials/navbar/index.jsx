import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StyledNavLink from './styled-nav-link';

const pages = [
  { page: 'Kursai', link: '/courses' },
  { page: 'Parduotuvė', link: '/shop' },
  { page: 'Mūsų misija', link: '/mission' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            width: '100%',
            justifyContent: { md: 'space-between' },
            alignItems: { md: 'center' },
          }}
          >
            <StyledNavLink
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
            </StyledNavLink>
            <Box>
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
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
                <StyledNavLink
                  to={link}
                  key={page}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </StyledNavLink>
              ))}
            </Menu>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2 }}
            >
              cresco - nitidus
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
          <Box sx={{
            flexGrow: 1,
            width: '100%',
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'space-around',
          }}
          >
            {pages.map(({ page, link }) => (
              <StyledNavLink
                to={link}
                key={page}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ color: 'inherit', display: 'block' }}
                >
                  {page}
                </Button>
              </StyledNavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
