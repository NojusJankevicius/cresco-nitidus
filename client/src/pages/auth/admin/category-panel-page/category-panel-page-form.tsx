import React from 'react';
import {
  TextField,
  Paper,
  Button,
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
  <Paper component="form" sx={{ display: 'flex' }} onSubmit={onSubmit}>
    <TextField
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      sx={{ flexGrow: 1 }}
      color={editMode ? 'warning' : 'secondary'}
      label={editMode ? 'Atnaujinti' : 'Sukurti'}
    />
    <Button
      variant="contained"
      color={editMode ? 'warning' : 'secondary'}
      type="submit">
      {editMode ? 'Atnaujinti' : 'Sukurti'}
    </Button>
  </Paper>
);

export default CategoryPanelPageForm;
