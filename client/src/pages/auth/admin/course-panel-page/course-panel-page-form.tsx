import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

export type CoursePanelPageFormProps = {
  title: string,
  descLine1: string,
  descLine2: string,
  descLine3: string,
  descLine4: string,
  price: number,
  editMode: boolean,
  onSubmit: React.FormEventHandler<HTMLFormElement>,
  setTitle: (newValue: string) => void,
  setDescLine1: (newValue: string) => void,
  setDescLine2: (newValue: string) => void,
  setDescLine3: (newValue: string) => void,
  setDescLine4: (newValue: string) => void,
  setPrice: (newValue: number) => void,
};

const CoursePanelPageForm: React.FC<CoursePanelPageFormProps> = ({
  title,
  descLine1,
  descLine2,
  descLine3,
  descLine4,
  price,
  editMode,
  onSubmit,
  setTitle,
  setDescLine1,
  setDescLine2,
  setDescLine3,
  setDescLine4,
  setPrice,
}) => (

  <Box
    component="form"
    onSubmit={onSubmit}
    sx={{
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
      {editMode ? 'Atnaujinti kursą' : 'Pridėti kursą'}
    </Typography>
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <FormControl sx={{ width: 200 }}>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            label="kurso pavadinimas"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl sx={{ width: 200 }}>
          <TextField
            value={descLine1}
            onChange={(e) => setDescLine1(e.target.value)}
            id="line1"
            label="pirma aprašymo eilutė"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl sx={{ width: 200 }}>
          <TextField
            value={descLine2}
            onChange={(e) => setDescLine2(e.target.value)}
            id="line2"
            label="antra aprašymo eilutė"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl sx={{ width: 200 }}>
          <TextField
            value={descLine3}
            onChange={(e) => setDescLine3(e.target.value)}
            id="line3"
            label="trečia aprašymo eilutė"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl sx={{ width: 200 }}>
          <TextField
            value={descLine4}
            onChange={(e) => setDescLine4(e.target.value)}
            id="line4"
            label="ketvirta aprašymo eilutė"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl sx={{ width: 200 }}>
          <TextField
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            id="price"
            label="Kaina"
          />
        </FormControl>
      </Grid>
    </Grid>
    <Button
      variant="outlined"
      sx={{ mt: 2 }}
      type="submit"
    >
      {editMode ? 'Atnaujinti kursą' : 'Pridėti kursą'}
    </Button>
  </Box>
);

export default CoursePanelPageForm;
