import * as React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import Mobile from './mobile';
import Desktop from './desktop';
import UserMenu from './user-menu';
import StyledNavbarLink from './navbar-link-button';
import routes from '../../../routing/routes';
import { authSelector } from '../../../store/auth';

const pages = [
  { page: 'Kursai', link: '/courses' },
  { page: 'Parduotuvė', link: '/shop' },
  { page: 'Mūsų misija', link: '/mission' },
];
const settings = [
  { setting: 'Profile', link: '/dashboard' },
  { setting: 'Wishlist', link: '/dashboard/wishlist' },
  { setting: 'My courses', link: '/dashboard/course/1' },
  { setting: 'Logout', link: '/' },
];

const ResponsiveAppBar = () => {
  const auth = useSelector(authSelector);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Desktop
            handleCloseNavMenu={handleCloseNavMenu}
            pages={pages}
          />
          <Mobile
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            pages={pages}
            anchorElNav={anchorElNav}
          />
          {
            !auth.signedIn ? (
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <StyledNavbarLink to={routes.SignInPage}>
                  <Typography variant="button" display="block">Prisijungti</Typography>
                </StyledNavbarLink>
                <StyledNavbarLink to={routes.SignUpPage}>
                  <Typography variant="button" display="block">Registruotis</Typography>
                </StyledNavbarLink>
              </Box>
            ) : (
              <UserMenu
                handleCloseNavMenu={handleCloseNavMenu}
                settings={settings}
              />
            )
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
