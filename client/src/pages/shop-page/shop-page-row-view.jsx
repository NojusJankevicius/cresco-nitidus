import * as React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Checkbox,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  CardMedia,
} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const ShopPageGrid = ({ categories }) => (
  <Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{
        width: 180,
        display: { xs: 'none', md: 'block' },
      }}
      >
        <Box sx={{ mb: '1rem' }}>
          <Box sx={{ px: '16px' }}>
            <Typography variant="h5">Kategorijos</Typography>
          </Box>
          <List
            dense
            sx={{ width: '100%' }}
          >
            {categories.map(({ name }) => {
              const labelId = `checkbox-list-secondary-label-${name}`;
              return (
                <ListItem
                  key={name}
                  secondaryAction={(
                    <Checkbox
                      edge="end"
                    />
                  )}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText id={labelId} primary={name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
      <Box sx={{ ml: '1.5rem' }}>
        <Grid container spacing={2}>
          <Box sx={{
            width: '100%',
            alignItems: 'center',
            margin: '8px, 8px, 16px',
            p: 2,
          }}
          >
            <Paper>
              <Grid container sx={{ alignItems: 'center' }}>
                <Grid item xs={12} md={3}>
                  <Box>
                    <CardMedia
                      component="img"
                      image="https://i.etsystatic.com/29278440/r/il/e9387d/3427856889/il_794xN.3427856889_ifb2.jpg"
                      alt="product"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 2 }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ mb: 1 }}>
                      Grey Oyster Mushroom Grow Kit
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Grey Oyster mushroom (Pleurotus ostreatus)
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
                      <Box>
                        <Typography variant="subtitle1"> 16.99 eur.</Typography>
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
          </Box>
        </Grid>
      </Box>
    </Box>
  </Box>
);

export default ShopPageGrid;
