import React from 'react';

import {
  Container,
} from '@mui/material';
import ProfilePageUserInfo from './profile-page-user-info';
import { userSelector } from '../../../store/auth';
import { useSelector } from '../../../store/hooks';

const ProfilePage: React.FC = () => {
  const user = useSelector(userSelector);

  return (
    <Container
      maxWidth="md"
    >
      <ProfilePageUserInfo user={user} />
    </Container>
  );
};
export default ProfilePage;
