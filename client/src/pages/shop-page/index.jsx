// /* eslint-disable */
import React, { useState, useEffect } from 'react';

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
import { getCategories, getProducts } from '../../services/product-service';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedProductsData = await getProducts();
      const productsArray = Object.values(fetchedProductsData);
      setProducts(productsArray[0]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const fetchedCategoriesData = await getCategories();
      const categoriesArray = Object.values(fetchedCategoriesData);
      setCategories(categoriesArray[0]);
    })();
  }, []);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [productViewType, setProductViewType] = useState('grid');
  const ToggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleProductViewChange = (_, nextView) => {
    setProductViewType(nextView);
  };

  const ProductView = productViewType === 'row' ? (
    <RowView categories={categories} products={products} />
  ) : (
    <GridView categories={categories} products={products} />
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
            color="primary"
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
      <Drawer
        drawerOpen={drawerOpen}
        closeDrawer={ToggleDrawer(false)}
        categories={categories}
      />
    </Container>

  );
};
export default ShopPage;
