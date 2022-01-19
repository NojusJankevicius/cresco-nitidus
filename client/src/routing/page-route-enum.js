import PageLayout from '../components/layouts/page-layout';
import DashboardLayout from '../components/layouts/dashboard-layout';

// no-auth
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';
import ShopPage from '../pages/shop-page';
import ProductPage from '../pages/product-page';
import ErrorPage from '../pages/error-page';
import CoursesPage from '../pages/courses-page';
import MissionPage from '../pages/mission-page';
import CheckoutPage from '../pages/checkout-page';
// public-only
import SignInPage from '../pages/public/sign-in-page';
import SignUpPage from '../pages/public/sign-up-page';
// auth
// import ProfilePage from '../pages/auth/profile-page';
// user
import UserProfilePage from '../pages/auth/user/user-profile-page';
import CoursePage from '../pages/auth/user/course-page';
import WishlistPage from '../pages/auth/user/wishlist-page';
// admin
import DashboardPage from '../pages/auth/admin/dashroad-page';
// import ProductPanelPage from '../pages/auth/admin/product-panel-page';
// import UserPanelPage from '../pages/auth/admin/user-panel-page';

export default {
  PageLayout,
  DashboardLayout,
  HomePage,
  CartPage,
  ShopPage,
  ProductPage,
  ErrorPage,
  CoursesPage,
  MissionPage,
  CheckoutPage,
  SignInPage,
  SignUpPage,
  UserProfilePage,
  CoursePage,
  WishlistPage,
  DashboardPage,
  // ProductPanelPage,
  // UserPanelPage,
};
