import * as React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Checkbox,
  // Paper,
  Card,
  // CardMedia,
} from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import DesktopFilters from './shop-page-desktop-filters';

const ShopPageGrid = ({ categories, products }) => (
  <Box>
    <Grid container>
      <Grid item md={3}>
        <DesktopFilters categories={categories} />
      </Grid>
      <Grid item md={9}>
        <Grid container spacing={2}>
          <Box sx={{
            width: '100%',
            alignItems: 'center',
            margin: '8px 0px 16px 8px',
            p: 2,
          }}
          >
            {products.map(({
              id, name, description, price,
            }) => (

              <Card sx={{ mb: 2, borderRadius: 0 }} key={id}>
                <Grid container sx={{ alignItems: 'center' }}>
                  <Grid
                    item
                    xs={12}
                    md={3}
                    sx={{
                      height: { md: '20vh' },
                    }}
                  >
                    <Link to={`product/:${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Box
                        component="img"
                        src="https://i.etsystatic.com/29278440/r/il/e9387d/3427856889/il_794xN.3427856889_ifb2.jpg"
                        alt="product"
                        sx={{
                          height: '100%',
                          width: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Link to={`product/:${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Box sx={{ p: 2 }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ mb: 1 }}>
                          {name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '3',
                            WebkitBoxOrient: 'vertical',
                          }}
                        >
                          {description}
                        </Typography>
                      </Box>
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Box sx={{
                      display: 'flex',
                      p: 2,
                      alignItems: 'flex-end',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                    }}
                    >
                      <Box>
                        <Checkbox icon={<FavoriteBorder fontSize="small" />} checkedIcon={<Favorite fontSize="small" />} />
                      </Box>
                      <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1.5 }}>
                          <Typography variant="h6">
                            {price}
                            {' '}
                            eur.
                          </Typography>
                        </Box>
                        <Box>
                          <Button variant="outlined" size="small" color="primary">
                            Į krepšelį
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

export default ShopPageGrid;
