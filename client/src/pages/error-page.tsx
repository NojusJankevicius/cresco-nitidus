import { Container, Typography } from '@mui/material';
import React from 'react';

const ErrorPage: React.FC = () => (
  <Container sx={{
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }}
  >
    <img src="/error-page.jpg" alt="" />
    <Typography variant="h2" align="center">
      O ne :(
    </Typography>
    <Typography variant="h2" align="center">
      Toks puslapis neužaugintas
    </Typography>
  </Container>
);

export default ErrorPage;
