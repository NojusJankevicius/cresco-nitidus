import React from 'react';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../../store/auth';
import { useSelector } from '../../store/hooks';
import routes from '../routes';

const PublicOnlyProtector: React.FC = ({ children }) => {
  const auth = useSelector(authSelector);

  if (auth.signedIn) {
    return <Navigate to={auth.redirectTo ?? routes.HomePage} />;
  }

  return <>{children}</>;
};

export default PublicOnlyProtector;
