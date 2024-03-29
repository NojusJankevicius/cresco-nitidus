import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const CheckoutPageAddressForm: React.FC = () => (
  <>
    <Typography variant="h6" gutterBottom>
      Užsakymo gavimo adresas
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="Vardas"
          fullWidth
          autoComplete="given-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Pavardė"
          fullWidth
          autoComplete="family-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="address1"
          name="address1"
          label="Adresas"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="city"
          name="city"
          label="Miestas"
          fullWidth
          autoComplete="shipping address-level2"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="zip"
          name="zip"
          label="Pašto kodas"
          fullWidth
          autoComplete="shipping postal-code"
          variant="standard"
        />
      </Grid>
    </Grid>
  </>
);

export default CheckoutPageAddressForm;
