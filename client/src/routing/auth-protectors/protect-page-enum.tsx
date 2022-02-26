import React from 'react';
import {
  ADMIN,
  AUTH,
  AuthType,
  PUBLIC_ONLY,
  USER,
} from '../auth-types';

import AdminProtector from './admin-protector';
import AuthProtector from './auth-protector';
import PublicOnlyProtector from './public-only-protector';
import UserProtector from './user-protector';

export type ProtectPageEnum = {
  [Key in AuthType]: (Page: React.FC) => React.ReactNode
};

const protectPageEnum: ProtectPageEnum = {
  [ADMIN]: (Page) => <AdminProtector><Page /></AdminProtector>,
  [AUTH]: (Page) => <AuthProtector><Page /></AuthProtector>,
  [PUBLIC_ONLY]: (Page) => <PublicOnlyProtector><Page /></PublicOnlyProtector>,
  [USER]: (Page) => <UserProtector><Page /></UserProtector>,
};

export default protectPageEnum;
