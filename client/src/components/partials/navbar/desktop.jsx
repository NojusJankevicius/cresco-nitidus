import React from 'react';

import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import StyledNavbarLink from './navbar-link-button';

const Desktop = ({
  handleCloseNavMenu,
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
    <Box sx={{
      flexGrow: 1,
      width: '100%',
      display: { xs: 'none', md: 'flex' },
      justifyContent: 'space-around',
    }}
    >
      {pages.map(({ page, link }) => (
        <StyledNavbarLink
          to={link}
          key={page}
        >
          <Button
            onClick={handleCloseNavMenu}
            sx={{ color: 'inherit', display: 'block' }}
          >
            {page}
          </Button>
        </StyledNavbarLink>
      ))}
    </Box>
  </>
);

export default Desktop;
