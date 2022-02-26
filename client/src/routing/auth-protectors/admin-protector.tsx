import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from '../../store/auth';
import routes from '../routes';

const AdminProtector = ({ children }) => {
  const { pathname } = useLocation();
  const auth = useSelector(authSelector);

  if (!auth.signedIn) {
    return <Navigate to={`${routes.SignInPage}?redirectTo=${pathname}`} />;
  }

  if (auth.user.role !== 'admin') {
    return <Navigate to={routes.ProfilePage} />;
  }

  return children;
};

export default AdminProtector;
