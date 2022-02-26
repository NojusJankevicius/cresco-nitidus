import React from 'react';
import { Box, BoxProps } from '@mui/material';

const BackgroundImageContainer: React.FC<BoxProps> = ({ children, sx }) => (
  <Box
    sx={{
      backgroundSize: 'cover',
      height: '100%',
      backgroundPosition: 'center',
      ...sx,
    }}
  >
    {children}
  </Box>
);

export default BackgroundImageContainer;
