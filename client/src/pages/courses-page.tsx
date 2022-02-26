import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const tiers = [
  {
    title: 'Hidroponika',
    price: '39.99',
    description: [
      'Kaip pasidaryti savo sistemą',
      'Kaip prižiūrėti',
      '"Micro greens"',
      'Privati konsultacija',
    ],
    buttonText: 'Registruotis',
    buttonVariant: 'outlined',
    buttonColor: 'inherit',
  },
  {
    title: 'Visi kursai',
    subheader: 'Populiariausias pasiūlymas',
    price: '69.99',
    description: [
      'Hidroponika',
      '"Micro greens"',
      'Grybų auginimas',
      'Viskas kartu už mažesnę kainą',
    ],
    buttonText: 'Registruotis',
    buttonVariant: 'contained',
    buttonColor: 'primary',
  },
  {
    title: 'Grybų auginimas',
    price: '49.99',
    description: [
      'Sterilizacija',
      'Ciklo ir vietos planas',
      'Verslo planas',
      'Privati konsultacija',
    ],
    buttonText: 'Registruotis',
    buttonVariant: 'outlined',
    buttonColor: 'inherit',
  },
];

const CoursesPage = () => (
  <>
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
    {/* Hero unit */}
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Kursai
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p">
        Greitai ir efektyviai išnaudokite laisvą namų erdvę nuosavų žalumynų auginimui
        ir gaukite veslo planus užauginto pertekliaus pardavimui.
      </Typography>
    </Container>
    {/* End hero unit */}
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map((tier) => (
          // Enterprise card is full width at sm breakpoint
          <Grid
            item
            key={tier.title}
            xs={12}
            md={4}
          >
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                action={tier.title === 'Visi kursai' ? <StarIcon /> : null}
                subheaderTypographyProps={{
                  align: 'center',
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    mb: 2,
                  }}
                >
                  <Typography component="h2" variant="h3" color="text.primary">
                    {tier.price}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    eur.
                  </Typography>
                </Box>
                <ul>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant={tier.buttonVariant} color={tier.buttonColor}>
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </>
);
export default CoursesPage;
