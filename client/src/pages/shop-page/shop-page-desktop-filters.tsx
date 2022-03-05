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
import Category from '../../types/category';

type ShopPageDesktopFiltersProps = {
  categories: Category[]
};

const ShopPageDesktopFilters: React.FC<ShopPageDesktopFiltersProps> = ({ categories }) => (
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
  </Box>
);

export default ShopPageDesktopFilters;
