import { Button } from '@mui/material';
import React from 'react';

const FormButton = ({ children, ...rest }) => (
  <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    sx={{ height: 56, mb: 1 }}
    {...rest}
  >
    {children}
  </Button>
);

export default FormButton;
