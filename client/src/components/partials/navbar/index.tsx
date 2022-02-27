import React, { MouseEvent, MouseEventHandler, SetStateAction, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Divider,
  Typography,
  MenuItemProps,
} from '@mui/material';
import routes from '../../../routing/routes';
import { authSelector } from '../../../store/auth';
import Mobile from './navbar-mobile';
import Desktop from './navbar-desktop';
import UserMenu from './navbar-user-menu';
import LinkButton from './navbar-link-button';
import { useSelector } from '../../../store/hooks';

const pages = [
  { page: 'Kursai', link: '/courses' },
  { page: 'Parduotuvė', link: '/shop' },
];

const Navbar: React.FC = () => {

  const auth = useSelector(authSelector);
  const [anchorElNav, setAnchorElNav] = useState<Element | null>(null);

  const handleOpenNavMenu: React.MouseEventHandler = (event: MouseEvent<Element>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu: MenuItemProps['onClick'] = () => {
    setAnchorElNav(null);
  };

  const settings = [
    { setting: 'Profilis', link: '/profile' },
    { setting: 'Mėgstamos prekės', link: '/wishlist' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Desktop
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
                <LinkButton to={routes.SignInPage}>
                  <Typography variant="button" display="block">Prisijungti</Typography>
                </LinkButton>
                <LinkButton to={routes.SignUpPage}>
                  <Typography variant="button" display="block">Registruotis</Typography>
                </LinkButton>
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
export default Navbar;
