import React, { useState } from 'react';
import {
  TextField,
  Grid,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { signIn } from '../../store/auth';
import AuthForm from '../../components/auth-form';
import AuthService from '../../services/auth-service';
import routes from '../../routing/routes';
import BackgroundImageContainer from '../../components/containers/background-image-container';

const validationSchema = yup.object({
  name: yup.string()
    .required('Privalomas laukas')
    .min(2, 'Vardas negali būti trumpesnis nei 2 raidės')
    .max(32, 'Vardas negali būti ilgesnis nei 32 raidės')
    .matches(/^[A-ZĄČĘĖĮŠŲŪŽ]+[a-ząčęėįšųūž]*$/, 'Vardas privalo būti iš didžiosios raidės'),
  surname: yup.string()
    .required('Privalomas laukas')
    .min(2, 'Pavardė negali būti trumpesnė nei 2 raidės')
    .max(32, 'Pavardė negali būti ilgesnė nei 32 raidės')
    .matches(/^[A-ZĄČĘĖĮŠŲŪŽ]+[a-ząčęėįšųūž]*$/, 'Pavardė privalo būti iš didžiosios raidės'),
  email: yup.string()
    .required('Privalomas laukas')
    .email('Neteisingas pašto formatas')
    .test('email-validator', 'Paštas jau užimtas', (_, context) => {
      const { emailChecked, emailAvailable } = context.parent;
      if (!emailChecked) return true;

      return emailAvailable;
    }),
  password: yup.string()
    .required('Privalomas laukas')
    .min(6, 'Slaptažodis negali būti trumpesnis nei 6 simboliai')
    .max(32, 'Slaptažodis negali būti ilgesnis nei 32 simboliai')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Privalo būti bent viena didžioji raidė')
    .matches(/^.*\d+.*$/, 'Privalo būti bent vienas skaičius'),
  passwordConfirmation: yup.string()
    .required('Privalomas laukas')
    .oneOf([yup.ref('password')], 'Slaptažodžai turi sutapti'),
  emailChecked: yup.boolean().oneOf([true]),
  emailAvailable: yup.boolean().oneOf([true]),
});

const initialValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  subscribed: true,
  emailChecked: false,
  emailAvailable: false,
};

const SignUpPage = () => {
  const dispatch = useDispatch();
  const [emailCheckLoading, setEmailCheckLoading] = useState(false);

  const onSubmit = async ({
    email, name, surname, password, passwordConfirmation,
  }) => {
    const user = await AuthService.signUp({
      email,
      name,
      surname,
      password,
      repeatPassword: passwordConfirmation,
    });
    dispatch(signIn({ user }));
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
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
          setFieldValue('emailChecked', true, true);
          setEmailCheckLoading(false);
        }
      })();
    }
  };

  let emailEndornment;
  if (emailCheckLoading) {
    emailEndornment = <CircularProgress size={24} />;
  } else if (!values.emailChecked) {
    emailEndornment = null;
  } else if (values.emailAvailable) {
    emailEndornment = <CheckCircleIcon color="success" />;
  } else {
    emailEndornment = <ErrorIcon color="error" />;
  }

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
        title="Registruotis"
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
              autoFocus
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
                    {emailEndornment}
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
              label="Slaptažodžio pakartojimas"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordConfirmation}
              error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
              helperText={touched.passwordConfirmation && errors.passwordConfirmation}
              disabled={isSubmitting}
              fullWidth
              variant="outlined"
              type="password"
            />
          </Grid>
        </Grid>
      </AuthForm>
    </BackgroundImageContainer>
  );
};

export default SignUpPage;
