import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

const CoursePanelPageForm: React.FC = () => (

  <Box sx={{
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
        <FormControl sx={{ width: 200 }}>
          <TextField
            id="title"
            label="kurso pavadinimas"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl sx={{ width: 200 }}>
          <TextField
            id="line1"
            label="pirma aprašymo eilutė"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl sx={{ width: 200 }}>
          <TextField
            id="line2"
            label="antra aprašymo eilutė"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl sx={{ width: 200 }}>
          <TextField
            id="line3"
            label="trečia aprašymo eilutė"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl sx={{ width: 200 }}>
          <TextField
            id="line4"
            label="ketvirta aprašymo eilutė"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl sx={{ width: 200 }}>
          <TextField
            id="price"
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

export default CoursePanelPageForm;
