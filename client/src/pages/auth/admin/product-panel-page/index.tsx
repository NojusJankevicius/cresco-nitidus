import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CategoryService from '../../../../services/category-service';
import ProductService from '../../../../services/product-service';
import Category from '../../../../types/category';
import Product from '../../../../types/product';
import ProductPanelPageForm from './product-panel-page-form';
import ProductPanelPageTable from './product-panel-page-table';

const ProductPanelPage: React.FC = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     const fetchedProducts = await ProductService.getProducts();
  //     const productsArray = Object.values(fetchedProducts);
  //     if (typeof fetchedProducts === 'string') {
  //       console.log(fetchedProducts);

  //       return;
  //     }
  //     setProducts(productsArray[0]);
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      const fetchedCategories = await CategoryService.getCategories();
      const categoryArray = Object.values(fetchedCategories);
      if (typeof fetchedCategories === 'string') {
        console.error(fetchedCategories);

        return;
      }
      setCategories(categoryArray[0]);
    })();
  }, []);

  return (
    <Container
      maxWidth="md">
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
          <ProductPanelPageTable products={products} />
        </Grid> */}
        {
          categories.length > 0 && (
            <Grid item xs={12}>
              <ProductPanelPageForm
                initialCategories={categories}
              />
            </Grid>
          )
        }
      </Grid>
    </Container>
  );
};

export default ProductPanelPage;
