import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from '../../store/auth';
import { useSelector } from '../../store/hooks';
import routes from '../routes';

const UserProtector: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  const auth = useSelector(authSelector);

  if (!auth.signedIn) {
    return <Navigate to={`${routes.SignInPage}?redirectTo=${pathname}`} />;
  }

  if (auth.user?.role !== 'user') {
    return <Navigate to={routes.ProfilePage} />;
  }

  return <>{children}</>;
};

export default UserProtector;
