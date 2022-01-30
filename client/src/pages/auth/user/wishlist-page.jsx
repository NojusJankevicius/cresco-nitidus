import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

const WishlistPage = () => (
  <Container>
    <Typography variant="h4" sx={{ my: 4 }}>
      Mėgstamos prekės
    </Typography>
    <Box sx={{ ml: '1.5rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={4}>
          <Card sx={{ maxWidth: { xs: 'auto', lg: 300 } }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="260"
                image="https://i.etsystatic.com/29278440/r/il/e9387d/3427856889/il_794xN.3427856889_ifb2.jpg"
                alt="product"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Grey Oyster Mushroom Grow Kit
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Grey Oyster mushroom (Pleurotus ostreatus)
                </Typography>
              </CardContent>
            </CardActionArea>
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
                <Typography variant="subtitle1"> 16.99 eur.</Typography>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

export default WishlistPage;
