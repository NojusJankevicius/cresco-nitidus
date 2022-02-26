import React from 'react';

import {
  Box,
  Typography,
} from '@mui/material';
import LinkButton from './navbar-link-button';
import routes from '../../../routing/routes';

const NavbarDesktop = ({
  pages,
}) => (
  <>
    <Box sx={{
      display: { xs: 'none', md: 'flex' },
      width: '100%',
      justifyContent: { md: 'space-between' },
      alignItems: { md: 'center' },
    }}
    >
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
    <Box sx={{
      flexGrow: 1,
      width: '40%',
      display: { xs: 'none', md: 'flex' },
      justifyContent: 'space-around',
    }}
    >
      {pages.map(({ page, link }) => (
        <LinkButton
          to={link}
          key={page}
        >
          <Typography
            variant="button"
            sx={{ color: 'inherit', display: 'block' }}
          >
            {page}
          </Typography>
        </LinkButton>
      ))}
    </Box>
  </>
);

export default NavbarDesktop;
