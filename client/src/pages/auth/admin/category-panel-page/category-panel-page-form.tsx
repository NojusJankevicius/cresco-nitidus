import React from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';

export type CategoryPanelPageFormProps = {
  title: string,
  editMode: boolean,
  onSubmit: React.FormEventHandler<HTMLFormElement>,
  setTitle: (newValue: string) => void,
};

const CategoryPanelPageForm: React.FC<CategoryPanelPageFormProps> = ({
  title,
  editMode,
  onSubmit,
  setTitle
}) => (
  <>
    <Typography
      variant="h5"
      component="h2"
      sx={{ mb: 3 }}
    >
      {editMode ? 'Atnaujinti kategoriją' : 'Pridėti kategoriją'}
    </Typography>
    <Box component="form" sx={{ display: 'flex' }} onSubmit={onSubmit}>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label={editMode ? 'Atnaujinti' : 'Sukurti'}
      />
      <Button
        variant="outlined"
        sx={{ ml: 2 }}
        type="submit">
        {editMode ? 'Atnaujinti' : 'Sukurti'}
      </Button>
    </Box>
  </>

);

export default CategoryPanelPageForm;
