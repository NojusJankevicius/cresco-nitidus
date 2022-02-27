import React, { useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import * as yup from 'yup';
import { useSearchParams } from 'react-router-dom';

import { Alert, Grid, TextField } from '@mui/material';
import AuthForm from '../../components/auth-form';
import routes from '../../routing/routes';
import AuthService from '../../services/auth-service';
import { signIn } from '../../store/auth';
import BackgroundImageContainer from '../../components/containers/background-image-container';
import { useDispatch } from '../../store/hooks';

type InitialValues = {
  email: string,
  password: string,
};

type FormikOnSubmit = (values: InitialValues, formikHelpers: FormikHelpers<InitialValues>) => void | Promise<void>;

const validationSchema = yup.object({
  email: yup
    .string()
    .required('Privalomas laukas')
    .email('Neteisingas pašto formatas'),
  password: yup
    .string()
    .required('Privalomas laukas'),
});

const initialValues: InitialValues = {
  email: '',
  password: '',
};

const SignInPage = () => {
  const [urlSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);

  const onSubmit: FormikOnSubmit = async ({ email, password }) => {
    setError(null);
      const fetchedUser = await AuthService.signIn({
        email,
        password,
      });
      if(typeof fetchedUser === 'string'){
        setError(fetchedUser);
        
        return;
      }
      const redirectTo = urlSearchParams.get('redirectTo');
      const signInSuccessAction = signIn({
        user: fetchedUser,
        redirectTo,
      });
      dispatch(signInSuccessAction);
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
    <BackgroundImageContainer sx={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/home-page.jfif)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}
    >

      <AuthForm
        title="Prisijungti"
        linkTo={routes.SignUpPage}
        linkTitle="Neturite paskyros? Registruokitės"
        onSubmit={handleSubmit}
        isValid={isValid && dirty}
        loading={isSubmitting}
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
            />
          </Grid>
        </Grid>
      </AuthForm>
    </BackgroundImageContainer>
  );
};

export default SignInPage;
