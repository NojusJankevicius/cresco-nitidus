import * as React from 'react';
import {
  Box,
  Checkbox,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import Category from '../../types/category';

type ShopPageDrawerProps = {
  drawerOpen: boolean,
  closeDrawer: () => void,
  categories: Category[]
};

const ShopPageDrawer: React.FC<ShopPageDrawerProps> = ({ drawerOpen, closeDrawer, categories }) => (
  <Drawer
    open={drawerOpen}
    onClose={closeDrawer}
  >
    <Box
      sx={{ width: 250, py: 4, pr: 2 }}
    >
      <Box sx={{ px: 2 }}>
        <Typography variant="h5" textAlign="center">Kategorijos</Typography>
      </Box>
      <Divider variant="middle" sx={{ pt: 2 }} />
      <List
        sx={{ width: '100%' }}
      >
        {categories.map(({ title }) => {
          const labelId = `checkbox-list-secondary-label-${title}`;

          return (
            <ListItem
              key={title}
              secondaryAction={(
                <Checkbox
                  edge="end"
                />
              )}
              disablePadding
            >
              <ListItemButton>
                <ListItemText id={labelId} primary={title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  </Drawer>
);
export default ShopPageDrawer;
