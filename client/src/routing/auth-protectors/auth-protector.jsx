import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from '../../store/auth';
import routes from '../routes';

const AuthProtector = ({ children }) => {
  const { pathname } = useLocation();
  const auth = useSelector(authSelector);

  if (!auth.signedIn) {
    return <Navigate to={`${routes.SignInPage}?redirectTo=${pathname}`} />;
  }

  return children;
};

export default AuthProtector;
