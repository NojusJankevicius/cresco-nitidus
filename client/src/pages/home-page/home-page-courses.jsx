import React from 'react';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Typography,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Container,
} from '@mui/material';

let theme = createTheme();
theme = responsiveFontSizes(theme, { factor: 10 });

const HomePageCourses = () => (
  <>
    <Container sx={{
      height: '80vh',
      display: {
        xs: 'none', md: 'flex',
      },
      alignItems: { md: 'center' },
    }}
    >
      <Grid container gap={15}>
        <Grid item md={5}>
          <Card>
            <CardMedia
              component="img"
              image="/home-page-card-hydroponics2.jpg"
              alt=""
            />
          </Card>
        </Grid>
        <Grid
          item
          md={5}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 0 0 1px',
            p: 4,
            margin: '8px 0px 32px ',
          }}
          >
            <ThemeProvider theme={theme}>
              <Typography variant="h5" component="h3" align="center">
                Viskas ką reikia žinoti apie hidroponinį daržovių
                auginimą savo namuose ir paprasti būdai pradėti.
              </Typography>
            </ThemeProvider>
            <Button variant="contained" sx={{ mt: 5 }}>
              Sužinoti webinare
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
    <Container sx={{
      height: '80vh',
      display: {
        xs: 'flex',
        md: 'none',
      },
      alignItems: 'center',
    }}
    >

      <Box sx={{
        display: {
          xs: 'flex',
          md: 'none',
        },
        alignItems: 'center',
        backgroundImage: 'url(/home-page-card-hydroponics2.jpg)',
        backgroundSize: 'cover',
        // height: '100%',
        p: 4,
      }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          // boxShadow: '0 0 0 1px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          p: 4,
          margin: '8px 32px 32px 32px',
        }}
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h5" component="h3" align="center">
              Viskas ką reikia žinoti apie hidroponinį daržovių
              auginimą savo namuose ir paprasti būdai pradėti.
            </Typography>
          </ThemeProvider>
          <Button variant="contained" sx={{ mt: 5 }}>
            Sužinoti webinare
          </Button>
        </Box>
      </Box>
    </Container>
  </>

);

export default HomePageCourses;
