// /* eslint-disable */
import React, { useState } from 'react';

import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ViewAgendaRoundedIcon from '@mui/icons-material/ViewAgendaRounded';
import MenuIcon from '@mui/icons-material/Menu';
import ShopPageDesktop from './shop-page-desktop';
import ShopPageDrawer from './shop-page-drawer';

const categories = [
  { name: 'Starteriai' },
  { name: 'Trąšos' },
  { name: 'Matuokliai' },
  { name: 'Sėklos' },
];

const ShopPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const ToggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  return (
    <Container>

      <Typography variant="h4" sx={{ my: 4 }}>
        Parduotuvė
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: { xs: 'space-between', md: 'flex-end' }, my: 2 }}>
        <Button sx={{ display: { md: 'none' } }} onClick={ToggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <Box>
          <Button>
            <GridViewRoundedIcon />
          </Button>
          <Button>
            <ViewAgendaRoundedIcon />
          </Button>
        </Box>
      </Box>
      <ShopPageDesktop categories={categories} />
      <ShopPageDrawer
        drawerOpen={drawerOpen}
        closeDrawer={ToggleDrawer(false)}
        categories={categories}
      />
    </Container>

  );
};
export default ShopPage;
