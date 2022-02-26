import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/product-service';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const productData = await getProduct(id);
      setProduct(productData);
    })();
  }, [id]);

  return (
    <Container sx={{ my: 3 }}>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <Box
            component="img"
            src="https://i.etsystatic.com/29278440/r/il/e9387d/3427856889/il_794xN.3427856889_ifb2.jpg"
            sx={{
              maxWidth: { xs: '100%', sm: '50vw', md: 450 },
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={5} sx={{ boxShadow: '0 0 0 1px', p: 2 }}>
          <Typography gutterBottom variant="h4" component="h1" textAlign="center">
            {product?.name}
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
