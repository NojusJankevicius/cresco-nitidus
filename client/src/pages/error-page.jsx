import { Box, Typography } from '@mui/material';
import React from 'react';

const ErrorPage = () => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }}
  >
    <Typography>
      Oops
    </Typography>
    <Typography>
      Page not found
    </Typography>
    <img src="/error-page.jpg" alt="" />
  </Box>
);

export default ErrorPage;
