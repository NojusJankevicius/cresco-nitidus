import React from 'react';
import {
  Drawer,
  IconButton,
  List,
  Divider,
  useTheme,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import routes from '../../../routing/routes';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CategoryIcon from '@mui/icons-material/Category';
import { authSelector } from '../../../store/auth';
import { useSelector } from '../../../store/hooks';

import DashboardLayoutDrawerLink from './dashboard-layout-drawer-link';

const navigationItems = {
  common: [
    { title: 'Profilis', path: routes.ProfilePage, Icon: PersonIcon },
  ],
  user: [
    { title: 'Patinkantys Produktai', path: routes.WishlistPage, Icon: HistoryIcon },
  ],
  admin: [
    { title: 'Produktai', path: routes.ProductPanelPage, Icon: Inventory2Icon },
    { title: 'Kategorijos', path: routes.CategoryPanelPage, Icon: CategoryIcon },
    { title: 'Kursai', path: routes.CoursePanelPage, Icon: LocalActivityIcon },
  ],
};

export type DashboardLayoutDrawerProps = {
  open: boolean,
  isSmallScreen: boolean,
};

const DashboardLayoutDrawer: React.FC<DashboardLayoutDrawerProps> = ({
  open,
  isSmallScreen,
}) => {
  const theme = useTheme();
  const { user } = useSelector(authSelector);

  return (
    <Drawer
      sx={{
        width: theme.mixins.drawer.width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: theme.mixins.drawer.width,
          boxSizing: 'border-box',
        },
      }}
      variant={isSmallScreen ? 'persistent' : 'permanent'}
      anchor="left"
      open={open}
    >

      <List sx={{mt: 8 }}>
        {navigationItems.common.map(({ path, title, Icon }) => (
          <DashboardLayoutDrawerLink
            key={path}
            path={path}
            title={title}
            Icon={Icon}
          />
        ))}
        <Divider />
        {user?.role === 'admin' && navigationItems.admin.map(({ path, title, Icon }) => (
          <DashboardLayoutDrawerLink
            key={path}
            path={path}
            title={title}
            Icon={Icon}
          />
        ))}

        {user?.role === 'user' && navigationItems.user.map(({ path, title, Icon }) => (
          <DashboardLayoutDrawerLink
            key={path}
            path={path}
            title={title}
            Icon={Icon}
          />
        ))}

      </List>

    </Drawer>
  );
};

export default DashboardLayoutDrawer;
