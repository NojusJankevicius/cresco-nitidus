import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../../store/auth';
import routes from '../routes';

const PublicOnlyProtector = ({ children }) => {
  const auth = useSelector(authSelector);

  if (auth.signedIn) {
    return <Navigate to={auth.redirectTo ?? routes.HomePage} />;
  }

  return children;
};

export default PublicOnlyProtector;
