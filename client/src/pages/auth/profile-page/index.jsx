import React from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
} from '@mui/material';
import ProfilePageUserInfo from './profile-page-user-info';
import { userSelector } from '../../../store/auth';

const ProfilePage = () => {
  const user = useSelector(userSelector);
  return (
    <Container
      maxWidth="lg"
    >
      <ProfilePageUserInfo user={user} />
    </Container>
  );
};
export default ProfilePage;
