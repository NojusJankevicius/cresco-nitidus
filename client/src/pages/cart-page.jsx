/* eslint-disable */
import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StyledLink from '../styles/styled-link';
import routes from '../routing/routes';

const CartPage = () => (
  <Container>
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box>
            <Box sx={{ my: 4 }}>
              <Typography variant="h4">
                Krepšelis
              </Typography>
            </Box>
            <Box>
              <Box sx={{
                display: 'flex',
                mb: '3rem',
                boxShadow: '0 0 0 1px',
                p: '1.5rem'
              }}
              >

                <Box
                  component="img"
                  src="https://i.etsystatic.com/29278440/r/il/e9387d/3427856889/il_794xN.3427856889_ifb2.jpg"
                  width="160px"
                />

                <Box sx={{ width: 'calc(100% - 230px)', pl: 2 }}>
                  <Typography gutterBottom variant="h6">
                    Grey Oyster Mushroom Grow Kit
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Grey Oyster mushroom (Pleurotus ostreatus)
                  </Typography>
                </Box>

                <Box sx={{ width: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <FormControl>
                      <TextField
                        value="1"
                        size="small"
                        // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        type="number"
                      />
                    </FormControl>
                    <Typography variant="subtitle2" color="text.secondary" textAlign="center" sx={{ my: '0.5rem' }}>
                      16.99 eur.
                    </Typography>
                  </Box>
                  <Box sx={{ alignSelf: 'flex-end', justifySelf: 'flex-end' }}>
                    <Button color="error" size="small">
                      <DeleteOutlineIcon />
                    </Button>
                  </Box>
                </Box>

              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ my: 4, display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5">
              Iš viso:
            </Typography>
            <Typography variant="h4">
              16.99 eur.
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ my: 4 }}>
            Contrary to popular belief,
            Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Typography>
          <StyledLink to={routes.CheckoutPage}>
            <Button fullWidth variant="contained">
              Patvirtinti užsakymą
            </Button>
          </StyledLink>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

export default CartPage;
