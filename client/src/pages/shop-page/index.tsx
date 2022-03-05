// /* eslint-disable */
import React, { useState, useEffect } from 'react';

import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
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
import ProductService from '../../services/product-service';
import Product from '../../types/product';
import CategoryService from '../../services/category-service';
import Category from '../../types/category';

const options = [
  { title: 'A - Z', value: 'a-z' },
  { title: 'Z - A', value: 'z-a' },
  { title: 'Price ↑', value: 'price-asc' },
  { title: 'Price ↓', value: 'price-desc' },
];

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [productViewType, setProductViewType] = useState<'grid' | 'row'>('grid');

  useEffect(() => {
    (async () => {
      const fetchedProductsData = await ProductService.getProducts();
      const productsArray = Object.values(fetchedProductsData);
      setProducts(productsArray[0]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const fetchedCategoriesData = await CategoryService.getCategories();
      const categoriesArray = Object.values(fetchedCategoriesData);
      if (typeof fetchedCategoriesData === 'string') {
        console.error(fetchedCategoriesData);

        return;
      }
      setCategories(categoriesArray[0]);
    })();
  }, []);

  const ToggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleProductViewChange = (_: any, nextView: ((prevState: 'grid' | 'row') => 'grid' | 'row')) => {
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
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: { xs: 'space-between', md: 'flex-end' },
        my: 2,
      }}
      >
        <Button sx={{ display: { md: 'none' } }} onClick={ToggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ pr: 2 }}>
            <TextField
              select
              value={options[0].value}
              size="small"
            >
              {options.map((option) => (
                <MenuItem key={option.title} value={option.value}>{option.title}</MenuItem>
              ))}
            </TextField>
          </Box>
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
