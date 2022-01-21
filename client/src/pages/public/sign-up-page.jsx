import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import {
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import AuthForm from '../../components/auth-form';
import routes from '../../routing/routes';
import AuthService from '../../services/auth-service';
import { signIn } from '../../store/auth';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Privalomas laukas')
    .min(2, 'Vardui reikalingos mažiausiai dvi raidės')
    .max(32, 'Vardas negali būti ilgesnis nei 32 raidės')
    .matches(/^[A-ZĄČĘĖĮŠŲŪŽ]+[a-ząčęėįšųūž]*$/, 'Vardas privalo būti iš didžiosios raidės'),
  surname: yup
    .string()
    .required('Privalomas laukas')
    .min(2, 'Pavardei reikalingos mažiausiai dvi raidės')
    .max(32, 'Pavardė negali būti ilgesnis nei 32 raidės')
    .matches(/^[A-ZĄČĘĖĮŠŲŪŽ]+[a-ząčęėįšųūž]*$/, 'Pavardė privalo būti iš didžiosios raidės'),
  email: yup
    .string()
    .required('Privalomas laukas')
    .email('Netinkamas pašto formatas')
    .test('email-validator', 'Paštas negalimas', (_, context) => {
      const { emailChecked, emailAvailable } = context.parent;
      if (!emailChecked) return true;
      return emailAvailable;
    }),
  password: yup
    .string()
    .required('Privalomas laukas')
    .min(6, 'Slaptažodžio reikalingi mažiausiai 6 charakteriai')
    .max(32, 'Slaptažodis negali būti ilgesnis nei 32 charakteriai')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Privalo būti bent viena didžioji raidė')
    .matches(/^.*\d+.*$/, 'Privalo būti bent vienas skaičius'),
  passwordConfirmation: yup
    .string()
    .required('Privalomas laukas')
    .oneOf([yup.ref('password')], 'Nesutampa slaptažodžiai'),
  emailChecked: yup.boolean().oneOf([true]),
  emailAvailable: yup.boolean().oneOf([true]),
});

const initialValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  repeatPassword: '',
  emailChecked: false,
  emailAvailable: false,
};

const SignUpPage = () => {
  const dispatch = useDispatch;
  const [emailCheckLoading, setEmailCheckLoading] = useState(false);

  const onSubmit = async ({
    name, surname, email, password, repeatPassword,
  }) => {
    const user = await AuthService.signUp({
      name,
      surname,
      email,
      password,
      repeatPassword,
    });
    dispatch(signIn({ user }));
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values,
    isSubmitting,
    isValid,
    dirty,
    setFieldValue,
    setValues,
  } = useFormik({
    validateOnMount: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleEmailChange = (e) => {
    if (values.emailChecked) {
      setValues({
        ...values,
        email: e.target.value,
        emailChecked: false,
        emailAvailable: false,
      }, true);
    } else {
      handleChange(e);
    }
  };

  const handleEmailBlur = (e) => {
    handleBlur(e);
    if (!errors.email) {
      (async () => {
        try {
          setEmailCheckLoading(true);
          const emailAvailable = await AuthService.checkEmail(values.email);
          setFieldValue('emailAvailable', emailAvailable);
        } catch (error) {
          setFieldValue('emailAvailable', false);
        } finally {
          setFieldValue('emailCheked', true, true);
          setEmailCheckLoading(false);
        }
      })();
    }
  };

  let emailEndorment;
  if (emailCheckLoading) {
    emailEndorment = <CircularProgress size={24} />;
  } else if (!values.emailChecked) {
    emailEndorment = null;
  } else if (values.emailAvailable) {
    emailEndorment = <CheckCircleIcon color="success" />;
  } else {
    emailEndorment = <ErrorIcon color="error" />;
  }

  return (
    <AuthForm
      title="Registracija"
      linkTo={routes.SignInPage}
      linkTitle="Jau turite paskyrą? Prisijunkite"
      onSubmit={handleSubmit}
      isValid={isValid && dirty}
      loading={isSubmitting}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="name"
            label="Vardas"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="surname"
            label="Pavardė"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.surname}
            error={touched.surname && Boolean(errors.surname)}
            helperText={touched.surname && errors.surname}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="El. paštas"
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {emailEndorment}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="password"
            label="Slaptažodis"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            type="password"
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 2 }}>
          <TextField
            name="passwordConfirmation"
            label="Pakartokite slaptažodį"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.repeatPassword}
            error={touched.repeatPassword && Boolean(errors.repeatPassword)}
            helperText={touched.repeatPassword && errors.repeatPassword}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            type="password"
          />
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default SignUpPage;
