/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
} from '@mui/material';
import { useFormik } from 'formik';
import { addProduct, getCategories } from '../../../../services/product-service';

const initialValues = {
  name: '',
  category: '',
  description: '',
  price: '',
  files: '',
};

const unselectedCategory = {
  id: '-1',
  name: 'Pasirinkti kategoriją',
  disabled: true,
};

const AdminPageAddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(unselectedCategory);
  const fileUploadRef = useRef(null);

  const onSubmit = async (values) => {
    console.log(JSON.stringify(values, null, 2));
    const files = Array.from(fileUploadRef.current.files);
    console.log(files);
    if (files.length === 0) {
      throw new Error('klaida būsiu matyt, rėksiu kad reikia nuotraukos');
    }
    const addedProduct = await addProduct({
      ...values,
      files,
    });
    // return addedProduct
  };

  const {
    handleChange,
    values,
    handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit,
  });

  const handleCategoryChange = (e) => {
    const newSelectedCategory = e.target.value;
    setSelectedCategory(newSelectedCategory);
    handleChange(e);
  };

  const handleUploadFiles = () => {
    fileUploadRef.current.click();
  };

  useEffect(() => {
    (async () => {
      const fetchedCategoriesData = await getCategories();
      const categoriesArray = Object.values(fetchedCategoriesData);
      setCategories(categoriesArray[0]);
    })();
  }, []);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" textAlign="center" component="h2" sx={{ mb: 3 }}>
        Pridėti prekę
      </Typography>
      <Grid container spacing={1} direction="column" alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <FormControl sx={{ m: 1, width: 200 }}>
            <TextField
              name="name"
              label="Prekė"
              onChange={handleChange}
              value={values.name}
              fullWidth
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel id="category">Kategorija</InputLabel>
            <Select
              name="category"
              labelId="category"
              id="category"
              value={selectedCategory}
              label="Kategorija"
              onChange={handleCategoryChange}
            >
              {[unselectedCategory, ...categories].map((category) => (
                <MenuItem
                  key={category.id}
                  value={category}
                  disabled={category.disabled}
                >
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ m: 1, width: 200 }}>
            <TextField
              name="price"
              label="Kaina"
              onChange={handleChange}
              value={values.price}
              fullWidth
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ m: 1, width: 200 }}>
            <TextField
              name="description"
              label="Aprašymas"
              onChange={handleChange}
              value={values.description}
              fullWidth
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="file"
            name="files"
            hidden
            value={values.files}
            inputRef={fileUploadRef}
            onChange={handleChange}
            accept=".jpg, .jpeg, .png"
            inputProps={{ multiple: true }}
            sx={{ m: 1, width: 200 }}
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
        Pridėti prekę
      </Button>
    </Box>
  );
};

export default AdminPageAddProduct;
