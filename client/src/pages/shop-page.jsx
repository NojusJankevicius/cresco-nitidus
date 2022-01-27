import * as React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  Checkbox,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ViewAgendaRoundedIcon from '@mui/icons-material/ViewAgendaRounded';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const categories = [
  { name: 'Starteriai' },
  { name: 'Trąšos' },
  { name: 'Matuokliai' },
  { name: 'Sėklos' },
];

const ShopPage = () => (
  <Container>
    <Typography variant="h4" sx={{ my: 4 }}>
      Parduotuvė
    </Typography>
    <Box>
      <Box sx={{ display: 'flex', justifyContent: { xs: 'space-between', md: 'flex-end' }, my: 2 }}>
        <Button sx={{ display: { md: 'none' } }}>
          <MenuIcon />
        </Button>
        <Box>
          <Button>
            <GridViewRoundedIcon />
          </Button>
          <Button>
            <ViewAgendaRoundedIcon />
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{
          width: 180,
          display: { xs: 'none', md: 'block' },
          boxShadow: '0 0 0 1px',
        }}
        >
          <Box sx={{ p: '1rem 0', mb: '1rem' }}>
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
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: { xs: 'auto', md: 300 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image="https://i.etsystatic.com/29278440/r/il/e9387d/3427856889/il_794xN.3427856889_ifb2.jpg"
                    alt="green iguana"
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
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: { xs: 'auto', md: 300 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image="https://i.etsystatic.com/29278440/r/il/e9387d/3427856889/il_794xN.3427856889_ifb2.jpg"
                    alt="green iguana"
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
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: { xs: 'auto', md: 300 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image="https://i.etsystatic.com/29278440/r/il/e9387d/3427856889/il_794xN.3427856889_ifb2.jpg"
                    alt="green iguana"
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
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: { xs: 'auto', md: 300 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image="https://i.etsystatic.com/29278440/r/il/e9387d/3427856889/il_794xN.3427856889_ifb2.jpg"
                    alt="green iguana"
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
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: { xs: 'auto', md: 300 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image="https://i.etsystatic.com/29278440/r/il/e9387d/3427856889/il_794xN.3427856889_ifb2.jpg"
                    alt="green iguana"
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
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: { xs: 'auto', md: 300 } }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image="https://i.etsystatic.com/29278440/r/il/e9387d/3427856889/il_794xN.3427856889_ifb2.jpg"
                    alt="green iguana"
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
      </Box>
    </Box>
  </Container>
);

export default ShopPage;
