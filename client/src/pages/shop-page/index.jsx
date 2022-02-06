/* eslint-disable */
import React, { useState } from 'react';

import {
  Box,
  Button,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ViewAgendaRoundedIcon from '@mui/icons-material/ViewAgendaRounded';
import MenuIcon from '@mui/icons-material/Menu';
import GridView from './shop-page-grid-view';
import Drawer from './shop-page-drawer';
import RowView from './shop-page-row-view';

const categories = [
  { name: 'Starteriai' },
  { name: 'Trąšos' },
  { name: 'Matuokliai' },
  { name: 'Sėklos' },
];

const ShopPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [productViewType, setProductViewType] = useState('grid')
  const ToggleDrawer = (open) => () => {
    setDrawerOpen(open);

  };

  const handleProductViewChange = (_, nextView) => {
    setProductViewType(nextView)
  };

  const ProductView = productViewType === 'row' ? (
    <RowView categories={categories} />
  ) : (
    <GridView categories={categories} />
  );

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
          <ToggleButtonGroup
          color='primary'
          value={productViewType}
          exclusive
          size="small"
          onChange={handleProductViewChange}
          sx={{ pr: 2 }}
          >
            <ToggleButton value="grid">
              <GridViewRoundedIcon />
            </ToggleButton>
            <ToggleButton value="row">
              <ViewAgendaRoundedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      {ProductView}
      {/* <RowView categories={categories} /> */}
      <Drawer
        drawerOpen={drawerOpen}
        closeDrawer={ToggleDrawer(false)}
        categories={categories}
      />
    </Container>

  );
};
export default ShopPage;
