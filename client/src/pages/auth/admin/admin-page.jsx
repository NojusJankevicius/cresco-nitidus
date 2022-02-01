import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Autocomplete,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  // InputLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const createData = (id, product, category, price) => ({
  id,
  product,
  category,
  price,
});

const rows = [
  createData(
    0,
    'oyster mushroom starter kit',
    'starter kit',
    '16.99',
  ),
];

const data = [
  {
    name: 'category',
    title: 'kategorija',
    options: [
      { id: '1', label: ' starteriai ' },
      { id: '2', label: ' sėklos ' },
      { id: '3', label: ' sodinukai ' },
      { id: '4', label: ' matuokliai ' },
    ],
  },
];

const AdminPage = () => {
  const [selectedValue, setSelectedValue] = useState({
    category: null,
  });

  const handleChange = (option, name) => {
    setSelectedValue({
      ...selectedValue,
      [name]: option,
    });
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Paper>
            <TableContainer sx={{ my: 4 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Prekė</TableCell>
                    <TableCell>Kategorija</TableCell>
                    <TableCell align="right">Kaina</TableCell>
                    <TableCell align="right">Veiksmai</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.product}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell align="right">{`${row.price}`}</TableCell>
                      <TableCell align="right">
                        <EditOutlinedIcon />
                        <DeleteOutlineIcon color="error" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
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
              Pridėti prekę
            </Typography>
            <Grid container spacing={1} direction="column" alignItems="center" justifyContent="center">
              {data
                .map(({ name, title, options }) => (
                  <Grid key={uuidv4()} item xs={12}>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                      <Autocomplete
                        disablePortal
                        name={name}
                        label={title}
                        options={options}
                        value={selectedValue[name]}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} label={title} />}
                      />
                    </FormControl>
                  </Grid>
                ))}
              <Grid item xs={12}>
                <FormControl sx={{ m: 1, width: 200 }}>
                  <TextField
                    id="outlined-size-normal"
                    label="Prekė"
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
              Pridėti prekę
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default AdminPage;
