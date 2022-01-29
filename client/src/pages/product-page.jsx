import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

const ProductPage = () => (
  <Container sx={{ my: 3 }}>
    <Grid container>
      <Grid item xs={12} sm={7}>
        <Box
          component="img"
          src="https://i.etsystatic.com/29278440/r/il/e9387d/3427856889/il_794xN.3427856889_ifb2.jpg"
          sx={{
            maxWidth: { xs: '90vw', sm: '50vw', md: 450 },
          }}
        />
      </Grid>
      <Grid item xs={12} sm={5} sx={{ boxShadow: '0 0 0 1px', p: 2 }}>
        <Typography gutterBottom variant="h4" component="h1" textAlign="center">
          Grey Oyster Mushroom Grow Kit
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          >
            <Typography variant="h4" component="div" color="text.secondary">
              16.99 eur.
            </Typography>
          </Box>
          <Button variant="contained" sx={{ my: 2 }}>
            Į krepšelį
          </Button>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Grey Oyster mushroom (Pleurotus ostreatus)
        </Typography>
      </Grid>
    </Grid>
  </Container>
);

export default ProductPage;
