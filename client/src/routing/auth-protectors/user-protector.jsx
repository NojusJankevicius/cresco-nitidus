import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from '../../store/auth';
import routes from '../routes';

const UserProtector = ({ children }) => {
  const { pathname } = useLocation();
  const auth = useSelector(authSelector);

  if (!auth.loggedIn) {
    return <Navigate to={`${routes.SinginPage}?redirectTo=${pathname}`} />;
  }

  if (auth.user.role !== 'user') {
    return <Navigate to={routes.UserProfilePage} />;
  }

  return children;
};

export default UserProtector;
