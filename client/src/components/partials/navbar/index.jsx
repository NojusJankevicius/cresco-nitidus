import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Divider,
  Typography,
} from '@mui/material';
import Mobile from './mobile';
import Desktop from './desktop';
import UserMenu from './user-menu';
import StyledNavbarLink from './navbar-link-button';
import routes from '../../../routing/routes';
import { authSelector } from '../../../store/auth';

const pages = [
  { page: 'Kursai', link: '/courses' },
  { page: 'Parduotuvė', link: '/shop' }, //! Ar reikia pakeisti links į routes? Kaip patogiau, kai neleidžia masyve išrašyt?
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

  const settings = [
    { setting: 'Profilis', link: '/profile', onclick: { handleCloseNavMenu } },
    { setting: 'Mėgstamos prekės', link: '/dashboard/wishlist', onclick: { handleCloseNavMenu } },
    { setting: 'Mano kursai', link: '/dashboard/course/1', onclick: { handleCloseNavMenu } },
  ];
  //! Ar reikia pakeisti links į routes? Kaip?
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
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
          <Divider orientation="vertical" variant="middle" flexItem sx={{ mr: 2 }} />
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
