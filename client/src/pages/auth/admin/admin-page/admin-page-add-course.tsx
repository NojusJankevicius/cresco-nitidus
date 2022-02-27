import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

const AdminPageAddCourse: React.FC = () => (

  <Box sx={{
    my: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
  >
    <Typography
      variant="h5"
      component="h2"
      sx={{ mb: 3 }}
      textAlign="center"
    >
      Pridėti kursą
    </Typography>
    <Grid container spacing={1} direction="column" alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <FormControl sx={{ m: 1, width: 200 }}>
          <TextField
            id="outlined-size-normal"
            label="kurso pavadinimas"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl sx={{ m: 1, width: 200 }}>
          <TextField
            id="outlined-size-normal"
            label="Kaina"
          />
        </FormControl>
      </Grid>
    </Grid>
    <Button
      variant="outlined"
      sx={{ mt: 2 }}
    >
      Pridėti kursą
    </Button>
  </Box>
);

export default AdminPageAddCourse;
