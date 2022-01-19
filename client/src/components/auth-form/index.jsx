import React from 'react';
import {
  Box,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import FormButton from './auth-form-button';

const AuthForm = ({
  children,
  title,
  linkTo,
  linkTitle,
  loading,
  onSubmit,
  isValid,
}) => (
  <Container
    maxWidth="xs"
    component="main"
    sx={{ pt: '7vh' }}
  >
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Box component="form" onSubmit={onSubmit}>
        <Box sx={{
          mb: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
        </Box>
        {children}
        <FormButton disabled={!isValid} color="success">
          {
            loading
              ? <CircularProgress color="inherit" />
              : title
          }
        </FormButton>
        <Link to={linkTo}>
          {linkTitle}
        </Link>
      </Box>
    </Paper>
  </Container>
);

export default AuthForm;
