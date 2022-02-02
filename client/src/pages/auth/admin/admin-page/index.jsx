import React from 'react';
import {
  Container,
  Grid,
} from '@mui/material';
import ProductTable from './admin-page-product-table';
import AddProduct from './admin-page-add-product';

const AdminPage = () => (
  <Container>
    <Grid container spacing={3}>
      <Grid item xs={12} md={9}>
        <ProductTable />
      </Grid>
      <Grid item xs={12} md={3}>
        <AddProduct />
      </Grid>
    </Grid>
  </Container>
);
export default AdminPage;
