import {
  AUTH,
  USER,
  ADMIN,
  PUBLIC_ONLY,
} from './auth-types';

const routeStructure = [
  {
    path: '/',
    pageName: 'PageLayout',
    childRoutes: [
      { index: true, pageName: 'HomePage' },
      { path: 'shop', pageName: 'ShopPage' },
      { path: 'shop/product/:id', pageName: 'ProductPage' },
      { path: 'cart', pageName: 'CartPage' },
      { path: 'checkout', pageName: 'CheckoutPage' },
      { path: 'courses', pageName: 'CoursesPage' },
      { path: 'sign-in', pageName: 'SignInPage', auth: PUBLIC_ONLY },
      { path: 'sign-up', pageName: 'SignUpPage', auth: PUBLIC_ONLY },
      { path: '*', pageName: 'ErrorPage' },
      { path: 'profile', pageName: 'ProfilePage', auth: AUTH },
      { path: 'wishlist', pageName: 'WishlistPage', auth: USER },
    ],
  },
  {
    path: '/dashboard',
    pageName: 'DashboardLayout',
    childRoutes: [
      { path: 'admin', pageName: 'AdminPage', auth: ADMIN },
    ],
  },
];

export default routeStructure;
