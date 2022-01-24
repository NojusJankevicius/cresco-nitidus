import React from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

import {
  Container,
  Box,
  Typography,
  Button,
} from '@mui/material';
// import ProfilePagePhoto from './profile-page-photo';
import ProfilePageUserInfo from './profile-page-user-info';
import { userSelector } from '../../../store/auth';

const ProfilePage = () => {
  const user = useSelector(userSelector);
  const formik = useFormik({
    initialValues: {
      name: user.name,
      surname: user.surname,
      email: user.email,
    },
  });
  return (
    <Container
      component="form"
      maxWidth="lg"
    >
      <pre style={{
        position: 'fixed', top: 100, right: 0, width: 450,
      }}
      >
        <h2>Formik</h2>
        {JSON.stringify({
          values: formik.values,
          errors: formik.errors,
          dirty: formik.dirty,
          touched: formik.touched,
        }, null, 2)}
      </pre>
      <Box sx={{ width: 'calc(100% - 480px)', mr: 'auto' }}>
        <Typography variant="h6">Profilis</Typography>
        {/* <ProfilePagePhoto /> */}
        <ProfilePageUserInfo formik={formik} />
        <Button variant="outlined" sx={{ mt: 3 }}>
          Išsaugoti
        </Button>
      </Box>
    </Container>
  );
};
export default ProfilePage;
