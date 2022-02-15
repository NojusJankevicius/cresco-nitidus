import {
  Box,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const ShopPageDesktopFilters = ({ categories }) => (
  <Box sx={{
    width: 180,
    display: { xs: 'none', md: 'block' },
  }}
  >
    <Box sx={{ mb: '1rem' }}>
      <Box>
        <Typography variant="h5" textAlign="center">Kategorijos</Typography>
      </Box>
      <Divider variant="middle" sx={{ pt: 2 }} />
      <List
        dense
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
  </Box>
);

export default ShopPageDesktopFilters;
