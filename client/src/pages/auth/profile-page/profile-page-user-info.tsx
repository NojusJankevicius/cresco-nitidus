import React, { useState, useMemo } from 'react';
import * as yup from 'yup';
import { FormikHelpers, useFormik } from 'formik';
import {
  Box,
  Typography,
  TextField,
  CircularProgress,
  InputAdornment,
  Button,
  TextFieldProps,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import AuthService from '../../../services/auth-service';
import ProfileService from '../../../services/profile-service';
import User from '../../../types/User';
import UserPatch from '../../../types/user-patch';

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
  emailChecked: yup.boolean().oneOf([true]),
  emailAvailable: yup.boolean().oneOf([true]),
});

type ProfilePageUserInfoProps = {
  user: User | null
};

type InitialValues = UserPatch & {

  emailChecked: boolean,
  emailAvailable: boolean,
};

type FormikOnSubmit = (values: InitialValues, formikHelpers: FormikHelpers<InitialValues>) => void | Promise<void>;

const ProfilePageUserInfo: React.FC<ProfilePageUserInfoProps> = ({ user }) => {
  const [emailCheckLoading, setEmailCheckLoading] = useState(false);

  const initialValues = useMemo(() => ({
    name: user ? user.name : '',
    surname: user ? user.surname : '',
    email: user ? user.email : '',
    emailChecked: true,
    emailAvailable: true,
  }), [user]);

  const onSubmit: FormikOnSubmit = async ({name, surname, email }) => {
    
    await ProfileService.updateUserData({name, surname, email });
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    dirty,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const handleEmailChange: TextFieldProps['onChange'] = (e) => {
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

  const handleEmailBlur: TextFieldProps['onBlur'] = (e) => {
    if (e.target.value === initialValues.email) {
      setValues({
        ...values,
        email: initialValues.email,
        emailChecked: true,
        emailAvailable: true,
      }, true);
      
      return;
    }
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
    <Box component="form" onSubmit={handleSubmit}>
      <Box sx={{ py: 5 }}>
        <Typography variant="h6">Vartotojo informacija</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        gap: 3,
        flexDirection: 'column',
      }}
      >
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
      </Box>
      <Box>
        <Button variant="outlined" sx={{ mt: 3 }} type="submit" disabled={!dirty || !isValid}>
          Išsaugoti
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePageUserInfo;
