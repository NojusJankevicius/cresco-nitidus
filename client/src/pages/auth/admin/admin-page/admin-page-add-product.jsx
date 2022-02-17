/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { getCategories } from '../../../../services/product-service';

const AdminPageAddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [selectedValue, setSelectedValue] = useState({
    category: null,
  });

  useEffect(() => {
    (async () => {
      const fecthedCategoriesData = await getCategories();
      const categoriesArray = Object.values(fecthedCategoriesData);
      setCategories(categoriesArray[0]);
    })();
  }, []);
  
  const handleChange = (option, name) => {
    setSelectedValue({
      ...selectedValue,
      [name]: option,
    });
  };
  
  const data = [
    {
      name: 'category',
      title: 'kategorija',
      // categories,
      options: [
        { id: '1', label: ' starteriai ' },
        { id: '2', label: ' sėklos ' },
        { id: '3', label: ' sodinukai ' },
        { id: '4', label: ' matuokliai ' },
      ],
    },
  ];
  console.log(categories);

  return (

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
  );
};

export default AdminPageAddProduct;
