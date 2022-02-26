import React from 'react';
import {
  ADMIN,
  AUTH,
  PUBLIC_ONLY,
  USER,
} from '../auth-types';

import AdminProtector from './admin-protector';
import AuthProtector from './auth-protector';
import PublicOnlyProtector from './public-only-protector';
import UserProtector from './user-protector';

const protectPageEnum = {
  [ADMIN]: (Page) => <AdminProtector><Page /></AdminProtector>,
  [AUTH]: (Page) => <AuthProtector><Page /></AuthProtector>,
  [PUBLIC_ONLY]: (Page) => <PublicOnlyProtector><Page /></PublicOnlyProtector>,
  [USER]: (Page) => <UserProtector><Page /></UserProtector>,
};

export default protectPageEnum;
