import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Alert, Grid, TextField } from '@mui/material';
import AuthForm from '../../components/auth-form';
import routes from '../../routing/routes';
import ApiService from '../../services/api-service';
import { signIn } from '../../store/auth';

const validationSchema = yup.object({
  email: yup
    .string()
    .required('Privalomas laukas')
    .email('Neteisingas pašto formatas'),
  password: yup
    .string()
    .required('Privalommas laukas'),
});

const initialValues = {
  email: '',
  password: '',
};

const SignInPage = () => {
  const [urlSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const onSubmit = async ({ email, password }) => {
    setError(null);
    try {
      const { user, token } = await ApiService.signIn({
        email,
        password,
      });
      const redirectTo = urlSearchParams.get('redirectTo');
      const signInSuccessAction = signIn({
        user,
        token,
        redirectTo,
      });
      dispatch(signInSuccessAction);
    } catch (err) {
      setError(err.message);
    }
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    isValid,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <AuthForm
      title="Prisijungti"
      linkTo={routes.SignUpPage}
      linktTitle="Neturite paskyros? Registruokitės"
      loading={isSubmitting}
      isValid={isValid && dirty}
      onSubmit={handleSubmit}
    >
      <Alert severity="error" sx={{ my: 2, visibility: error ? 'visible' : 'hidden' }}>
        {error}
      </Alert>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            name="email"
            variant="outlined"
            label="El. paštas"
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            fullWidth
            autoComplete="email"
            autoFocus
            color="success"
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="password"
            variant="outlined"
            label="slaptažodis"
            type="password"
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            fullWidth
            autoComplete="current-password"
            color="success"
          />
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default SignInPage;
