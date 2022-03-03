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
import OrdersPage from '../pages/auth/user/orders-page';
// admin
import ProductPanelPageEditForm from '../pages/auth/admin/product-panel-page/product-panel-page-edit-form';
import ProductPanelPage from '../pages/auth/admin/product-panel-page';
import CoursePanelPage from '../pages/auth/admin/course-panel-page';
import CategoryPanelPage from '../pages/auth/admin/category-panel-page';

import React from 'react';

export type LayoutPageName = 'PageLayout' | 'DashboardLayout';

export type DynamicPageName = 'ProductPage' | 'ErrorPage' | 'AdminPageEditProduct';

export type ConcretePageName = 'HomePage'
  | 'ShopPage'
  | 'CartPage'
  | 'CheckoutPage'
  | 'CoursesPage'
  | 'SignInPage'
  | 'SignUpPage'
  | 'ProfilePage'
  | 'WishlistPage'
  | 'OrdersPage'
  | 'ProductPanelPage'
  | 'CoursePanelPage'
  | 'CategoryPanelPage';

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
  AdminPageEditProduct: ProductPanelPageEditForm,
  OrdersPage,
  ProductPanelPage,
  CoursePanelPage,
  CategoryPanelPage,
};

export default pageRouteMap;
