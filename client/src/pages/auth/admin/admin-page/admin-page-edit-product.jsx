/* eslint-disable */
import React, { useEffect, useMemo, useState } from 'react';
import * as yup from 'yup';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { getProduct, updateProduct } from '../../../../services/product-service';

const validationSchema = yup.object({
  name: yup.string()
    .required('Privalomas laukas')
    .min(2, 'Pavadinimas negali būti trumpesnis nei 2 raidės')
    .max(45, 'Pavadiniams negali būti ilgesnis nei 45 raidės'),
  price: yup.number()
    .required('Privalomas Laukas'),
  description: yup.string(),
});

const AdminPageEditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const productData = await getProduct(id);
      setProduct(productData);
    })();
  }, []);

  const initialValues = useMemo(() => ({
    name: product.name,
    price: product.price,
    description: product.description,
  }), [product]);

  const onSubmit = async (values) => {
    await updateProduct(id, values);
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    dirty,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });


  return (
    <>
      {
        product
          ?
          <Container sx={{ my: 3 }}>
            <Grid container>
              <Grid item xs={12} sm={7}>
                <Box
                  component="img"
                  src="https://i.etsystatic.com/29278440/r/il/e9387d/3427856889/il_794xN.3427856889_ifb2.jpg"
                  sx={{
                    maxWidth: { xs: '100%', sm: '50vw', md: 450 },
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={5} sx={{ boxShadow: '0 0 0 1px', p: 2 }}>

                <Box component="form" onSubmit={handleSubmit}>
                  <Box sx={{
                    display: 'flex',
                    gap: 3,
                    flexDirection: 'column',
                  }}
                  >
                    <TextField
                      name="name"
                      label="Pavadinimas"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                      disabled={isSubmitting}
                      fullWidth
                      variant="outlined"
                    />
                    
                    <TextField
                      name="price"
                      label="Kaina"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      error={touched.price && Boolean(errors.price)}
                      helperText={touched.price && errors.price}
                      disabled={isSubmitting}
                      fullWidth
                      variant="outlined"
                    />
                    <TextField
                      name="description"
                      label="Aprašymas"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      error={touched.description && Boolean(errors.description)}
                      helperText={touched.description && errors.description}
                      disabled={isSubmitting}
                      fullWidth
                      variant="outlined"
                    />
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ textTransform: 'none' }}
                      onClick={() => { }}
                    >
                      Įkelti Nuotraukas
                    </Button>
                    <Button variant="outlined" size="large" type="submit" disabled={!dirty || !isValid}>
                      Išsaugoti pakeitimus
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
          : null
      }
    </>
  );
};

export default AdminPageEditProduct;
