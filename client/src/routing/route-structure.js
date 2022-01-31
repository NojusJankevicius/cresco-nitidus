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
      { path: 'product/:id', pageName: 'ProductPage' },
      { path: 'cart', pageName: 'CartPage' },
      { path: 'checkout', pageName: 'CheckoutPage' },
      { path: 'courses', pageName: 'CoursesPage' },
      { path: 'sign-in', pageName: 'SignInPage', auth: PUBLIC_ONLY },
      { path: 'sign-up', pageName: 'SignUpPage', auth: PUBLIC_ONLY },
      { path: '*', pageName: 'ErrorPage' },
    ],
  },
  {
    path: '/dashboard',
    pageName: 'DashboardLayout',
    childRoutes: [
      { index: true, pageName: 'ProfilePage', auth: AUTH },
      { path: 'course/:id', pageName: 'CoursePage', auth: USER },
      { path: 'wishlist', pageName: 'WishlistPage', auth: USER },
      { path: 'admin', pageName: 'AdminPage', auth: ADMIN },
      // { path: 'admin/products', pageName: 'ProductPanelPage', auth: ADMIN },
      // { path: 'admin/users', pageName: 'UserPanelPage', auth: ADMIN },
    ],
  },
];

export default routeStructure;
