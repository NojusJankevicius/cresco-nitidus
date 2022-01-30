// /* eslint-disable */
import * as React from 'react';
import {
  Box,
  Checkbox,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material';
import ListItemText from '@mui/material/ListItemText';

const ShopPageDrawer = ({ drawerOpen, closeDrawer, categories }) => (
  <Drawer
    open={drawerOpen}
    onClose={closeDrawer}
  >
    <Box
      sx={{ width: 250, py: 4, pr: 2 }}
    >
      <Box sx={{ px: '16px' }}>
        <Typography variant="h5" textAlign="center">Kategorijos</Typography>
      </Box>
      <List
        sx={{ width: '100%' }}
      >
        {categories.map(({ name }) => {
          const labelId = `checkbox-list-secondary-label-${name}`;
          return (
            <ListItem
              key={name}
              secondaryAction={(
                <Checkbox
                  edge="end"
                />
              )}
              disablePadding
            >
              <ListItemButton>
                <ListItemText id={labelId} primary={name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  </Drawer>
);
export default ShopPageDrawer;
