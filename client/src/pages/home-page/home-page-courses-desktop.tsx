import React from 'react';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import StyledLink from '../../styles/styled-link';
import { HomePageCourseProps } from './home-page-courses';

const HomePageCoursesDesktop: React.FC<HomePageCourseProps> = ({ courses }) => (
  <Container sx={{
    height: '80vh',
    display: {
      xs: 'none', md: 'flex',
    },
    alignItems: { md: 'center' },
  }}
  >
    {courses.map(({ text, buttonText, link }) => (
      <Grid key={text} container gap={15}>
        <Grid item md={5}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              image="/home-page-card-hydroponics2.jpg"
              alt=""
              sx={{ height: '100%' }}
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
            <Typography variant="h5" component="h3" align="center">
              {text}
            </Typography>
            <Button variant="contained" sx={{ mt: 5 }}>
              <StyledLink to={link}>
                {buttonText}
              </StyledLink>
            </Button>
          </Box>
        </Grid>
      </Grid>
    ))}
  </Container>
);

export default HomePageCoursesDesktop;
