import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from '@mui/material';
import { FormikHelpers, useFormik } from 'formik';
import Category from '../../../../types/category';
import ProductData from '../../../../types/product-data';
import FileUploadField, { FileUploadFieldProps } from '../../../../components/file-upload-field';

type InitialValues = {
  title: string,
  category: string,
  description: string,
  price: number,
  images: FileUploadFieldProps['imgDataArr'],
};

type FormikOnSubmit = (values: InitialValues, formikHelpers: FormikHelpers<InitialValues>) => void | Promise<void>;

const defaultCategoryOption: Category = {
  id: '-1',
  title: 'Pasirinkti kategoriją',
  createdAt: '',
  updatedAt: '',
};

const initialValues: InitialValues = {
  title: '',
  category: defaultCategoryOption.id,
  description: '',
  price: 0,
  images: [],
};

export type ProductPanelPageFormProps = {
  initialCategories: Category[],
  onSubmit: (data: ProductData) => void,
};

const ProductPanelPageForm: React.FC<ProductPanelPageFormProps> = ({ initialCategories, onSubmit }) => {
  const [categoryOptions, setCategoryOptions] = useState<Category[]>([defaultCategoryOption]);

  const onFormikSubmit: FormikOnSubmit = async ({ title, category, description, price, images }) => {
   
    const formattedData: ProductData = {
      title,
      category,
      description,
      price,
      images: images
        .map((x) => (x.file ? x.file : undefined))
        .filter((x) => x) as File[],
    };
    if (description) formattedData.description = description;
    onSubmit(formattedData);
  };
  
  const {
    handleChange,
    setFieldValue,
    values,
    handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit: onFormikSubmit,
  });

  useEffect(() => {
    setCategoryOptions([defaultCategoryOption, ...initialCategories]);
  }, [initialCategories]);
  
  const hanldeImagesChange = (images: FileUploadFieldProps['imgDataArr']) => {
    setFieldValue('images', images, true);
  };

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
          <FormControl sx={{ m: 1, width: 300 }}>
            <TextField
              name="title"
              label="Prekė"
              onChange={handleChange}
              value={values.title}
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ m: 1, width: 300 }}>
            <TextField
              name="category"
              select
              label="Kategorija"
              value={values.category}
              onChange={handleChange}
            >
              {categoryOptions.map((category, i) => (
                <MenuItem
                  key={category.id}
                  value={category.id}
                  disabled={i === 0}
                >
                  {category.title}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ m: 1, width: 300 }}>
            <TextField
              name="price"
              label="Kaina"
              type="number"
              onChange={handleChange}
              value={values.price}
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ m: 1, width: 300 }}>
            <TextField
              name="description"
              label="Aprašymas"
              onChange={handleChange}
              value={values.description}
              inputProps={{
                sx: { height: 80 },
              }}
              fullWidth
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FileUploadField
          imgDataArr={values.images}
          onChange={hanldeImagesChange}
        />
        </Grid>
      </Grid>
      <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
        Pridėti prekę
      </Button>
    </Box>
  );
};

export default ProductPanelPageForm;
