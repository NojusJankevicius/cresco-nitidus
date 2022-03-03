import { ConcretePageName, DynamicPageName, PageName } from './page-route-map';
import {
  AUTH,
  USER,
  ADMIN,
  PUBLIC_ONLY,
  AuthType,
} from './auth-types';

export type RoutePageData = {
  index?: true,
  path?: string,
  auth?: AuthType
};

export type ConcreteRoutePageData = RoutePageData & {
  pageName: ConcretePageName,
};

export type DynamicRoutePageData = RoutePageData & {
  pageName: DynamicPageName,
};

export type RouteData = RouteLayoutData | ConcreteRoutePageData | DynamicRoutePageData;

export type RouteLayoutData = {
  path: string,
  pageName: PageName,
  childRoutes: Array<RouteData>
};

const dynamicSymbols = ['*', ':'];

export const isConcretePath = (path?: RoutePageData['path']): boolean => {
  if (path) {
    return dynamicSymbols.every((dynamicSymbol) => !path.includes(dynamicSymbol));
  }

  return false;
};

export const isIndexPage = (index: RoutePageData['index']): boolean => Boolean(index);

const routeStructure: Array<RouteData> = [
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
    ],
  },
  {
    path: '/dashboard',
    pageName: 'DashboardLayout',
    childRoutes: [
      { path: 'profile', pageName: 'ProfilePage', auth: AUTH },
      { path: 'wishlist', pageName: 'WishlistPage', auth: USER },
      { path: 'orders', pageName: 'OrdersPage', auth: USER },
      { path: 'admin/products', pageName: 'ProductPanelPage', auth: ADMIN },
      { path: 'admin/courses', pageName: 'CoursePanelPage', auth: ADMIN },
      { path: 'admin/categories', pageName: 'CategoryPanelPage', auth: ADMIN },
      { path: 'admin/product/:id', pageName: 'AdminPageEditProduct', auth: ADMIN },
    ],
  },
];

export default routeStructure;
