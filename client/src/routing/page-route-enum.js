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
// import ProductPanelPage from '../pages/auth/admin/product-panel-page';
// import UserPanelPage from '../pages/auth/admin/user-panel-page';

export default {
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
  // ProductPanelPage,
  // UserPanelPage,
};
