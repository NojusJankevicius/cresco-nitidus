import { Button, ButtonProps } from '@mui/material';
import React from 'react';

type FormButtonProps = Omit<ButtonProps, 'type' | 'fullWidth' | 'variant' >;

const FormButton: React.FC<FormButtonProps>  = ({ children, sx, ...rest }) => (
  <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ height: 56, mb: 1, ...sx }}
    {...rest}
  >
    {children}
  </Button>
);

export default FormButton;
