import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import StyledLink from '../../styles/styled-link';

const HomePageCoursesMobile = ({ courses }) => (
  <Container sx={{
    height: '80vh',
    display: {
      xs: 'flex',
      md: 'none',
    },
    alignItems: 'center',
  }}
  >
    {courses.map(({ text, buttonText, link }) => (
      <Box
        key={text}
        sx={{
          display: {
            xs: 'flex',
            md: 'none',
          },
          alignItems: 'center',
          backgroundImage: 'url(/home-page-card-hydroponics2.jpg)',
          backgroundSize: 'cover',
          p: 4,
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          p: 4,
          margin: '8px 32px 32px 32px',
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
      </Box>
    ))}
  </Container>
);

export default HomePageCoursesMobile;
