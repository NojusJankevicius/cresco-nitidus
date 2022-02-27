import React, { useState, useEffect } from 'react';
import {
  Container,
  Divider,
  Grid,
} from '@mui/material';
import ProductTable from './admin-page-product-table';
import AddProduct from './admin-page-add-product';
import CourseTable from './admin-page-course-table';
import AddCourse from './admin-page-add-course';
import { getCourses, getProducts } from '../../../../services/product-service';

const AdminPage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedProductsData = await getProducts();
      const productsArray = Object.values(fetchedProductsData);
      setProducts(productsArray[0]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const fetchedCoursesData = await getCourses();
      const coursesArray = Object.values(fetchedCoursesData);
      setCourses(coursesArray[0]);
    })();
  }, []);

  return (
    <Container sx={{ my: 4, width: '100%' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <ProductTable products={products} />
          <CourseTable courses={courses} />
        </Grid>
        <Grid item xs={12} md={3}>
          <AddProduct />
          <Divider variant="middle" />
          <AddCourse />
        </Grid>
      </Grid>
    </Container>
  );
};
export default AdminPage;
