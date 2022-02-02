import React from 'react';
import {
  Container,
  Divider,
  Grid,
} from '@mui/material';
import ProductTable from './admin-page-product-table';
import AddProduct from './admin-page-add-product';
import CourseTable from './admin-page-course-table';
import AddCourse from './admin-page-add-course';

const AdminPage = () => (
  <Container sx={{ my: 4, width: '100%' }}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={9}>
        <ProductTable />
        <CourseTable />
      </Grid>
      <Grid item xs={12} md={3}>
        <AddProduct />
        <Divider variant="middle" />
        <AddCourse />
      </Grid>
    </Grid>
  </Container>
);
export default AdminPage;
