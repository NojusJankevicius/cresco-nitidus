import PageLayout from '../components/layouts/page-layout';
import DashboardLayout from '../components/layouts/dashboard-layout';

// no-auth
import HomePage from '../pages/home-page';
import ShopPage from '../pages/shop-page';
import ProductPage from '../pages/product-page';
import CartPage from '../pages/cart-page';
import CheckoutPage from '../pages/checkout-page';
import CoursesPage from '../pages/courses-page';
import ErrorPage from '../pages/error-page';
// public-only
import SignInPage from '../pages/public-only/sign-in-page';
import SignUpPage from '../pages/public-only/sign-up-page';
// auth
import ProfilePage from '../pages/auth/profile-page';
// user
import WishlistPage from '../pages/auth/user/wishlist-page';
// admin
import AdminPage from '../pages/auth/admin/admin-page';
import AdminPageEditProduct from '../pages/auth/admin/admin-page/admin-page-edit-product';
import React from 'react';

export type LayoutPageName = 'PageLayout' | 'DashboardLayout';

export type DynamicPageName = 'ProductPage' | 'ErrorPage';

export type ConcretePageName = 'HomePage'
  | 'ShopPage'
  | 'CartPage'
  | 'CheckoutPage'
  | 'CoursesPage'
  | 'SignInPage'
  | 'SignUpPage'
  | 'ProfilePage'
  | 'WishlistPage'
  | 'AdminPage'
  | 'AdminPageEditProduct';

export type PageName = LayoutPageName | ConcretePageName | DynamicPageName;

export type PageRouteMap = {
  [key in PageName]: React.FC
};

const pageRouteMap: PageRouteMap = {
  PageLayout,
  DashboardLayout,
  HomePage,
  ShopPage,
  ProductPage,
  CartPage,
  CheckoutPage,
  CoursesPage,
  ErrorPage,
  SignInPage,
  SignUpPage,
  ProfilePage,
  WishlistPage,
  AdminPage,
  AdminPageEditProduct,
};

export default pageRouteMap;
