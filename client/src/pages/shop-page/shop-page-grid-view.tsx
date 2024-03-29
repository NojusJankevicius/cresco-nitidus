import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  Checkbox,
} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import DesktopFilters from './shop-page-desktop-filters';
import { Link } from 'react-router-dom';
import Category from '../../types/category';
import Product from '../../types/product';

type ShopPageGridViewProps = {
  categories: Category[],
  products: Product[],
};

const ShopPageGridView: React.FC<ShopPageGridViewProps> = ({ categories, products }) => (
  <Box>
    <Grid container >
      <Grid item md={3}>
        <DesktopFilters categories={categories} />
      </Grid>
      <Grid item md={9} >
        <Grid container spacing={2}>
          {products.map(({
            id, title, price, description, images
          }) => (
            <Grid item xs={12} sm={6} lg={4} sx={{ pr: 2, mb: 2 }} key={id}>
              <Card sx={{
                maxWidth: { xs: '85vw', sm: '80vw', md: '40vw', lg: 280 },
                borderRadius: 0,
              }}
              >
                <Link to={`product/:${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="260"
                      image={images[0] ?? '/error-page.jpg'}
                      alt="product"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
                <CardActions>
                  <Box sx={{
                    display: 'flex',
                    width: '100%',
                    wrap: 'no-wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Button variant="outlined" size="small" color="primary">
                        Į krepšelį
                      </Button>
                      <Checkbox icon={<FavoriteBorder fontSize="small" />} checkedIcon={<Favorite fontSize="small" />} />
                    </Box>
                    <Typography variant="h6">
                      {price}
                      {' '}
                      eur.</Typography>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Box >
);

export default ShopPageGridView;
