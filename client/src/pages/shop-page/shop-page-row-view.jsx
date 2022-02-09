import * as React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Checkbox,
  Paper,
  CardMedia,
} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import DesktopFilters from './shop-page-desktop-filters';

const ShopPageGrid = ({ categories, items }) => (
  <Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <DesktopFilters categories={categories} />
      <Box sx={{ ml: '1.5rem' }}>
        <Grid container spacing={2}>
          <Box sx={{
            width: '100%',
            alignItems: 'center',
            margin: '8px 0px 16px 8px',
            p: 2,
          }}
          >
            {items.map(({
              id, name, subtitle, price,
            }) => (

              <Paper sx={{ mb: 2 }} key={id}>
                <Grid container sx={{ alignItems: 'center' }}>
                  <Grid item xs={12} md={2}>
                    <Box>
                      <CardMedia
                        component="img"
                        image="https://i.etsystatic.com/29278440/r/il/e9387d/3427856889/il_794xN.3427856889_ifb2.jpg"
                        alt="product"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Box sx={{ p: 2 }}>
                      <Typography gutterBottom variant="h5" component="div" sx={{ mb: 1 }}>
                        {name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {subtitle}
                      </Typography>
                    </Box>
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
                          <Typography variant="subtitle1">
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
              </Paper>
            ))}
          </Box>
        </Grid>
      </Box>
    </Box>
  </Box>
);

export default ShopPageGrid;
