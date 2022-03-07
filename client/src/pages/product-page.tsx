import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../services/product-service';
import Product from '../types/product';

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if(typeof id !== 'string') return null;
      const productData = await ProductService.getProduct(id);
      setProduct(productData as Product);
    })();
  }, [id]);

  return (
    <Container sx={{ my: 3 }}>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <Box
            component="img"
            src={product?.images[0] ?? '/error-page.jpg'}
            sx={{
              maxWidth: { xs: '100%', sm: '50vw', md: 450 },
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={5} sx={{ boxShadow: '0 0 0 1px', p: 2 }}>
          <Typography gutterBottom variant="h4" component="h1" textAlign="center">
            {product?.title}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
            >
              <Typography variant="h4" component="div" color="text.secondary">
                {product?.price}
                {' '}
                eur.
              </Typography>
            </Box>
            <Button variant="contained" sx={{ my: 2 }}>
              Į krepšelį
            </Button>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {product?.description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
