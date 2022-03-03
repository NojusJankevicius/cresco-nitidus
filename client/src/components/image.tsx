import React from 'react';
import { styled } from '@mui/material';

const Image = styled('img')(({ theme, height, width }) => ({
  height: height ?? 200,
  width: width ?? 200,
  objectFit: 'cover',
  objectPosition: 'center',
}));

export default Image;
