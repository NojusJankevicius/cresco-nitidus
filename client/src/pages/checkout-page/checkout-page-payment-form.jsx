import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckoutPagePaymentForm = () => (
  <>
    <Typography variant="h6" gutterBottom>
      Mokėjimas
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="cardName"
          label="Vardas kortelėje"
          fullWidth
          autoComplete="cc-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="cardNumber"
          label="Kortelės numeris"
          fullWidth
          autoComplete="cc-number"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="expDate"
          label="Galiojimo data"
          fullWidth
          autoComplete="cc-exp"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="cvv"
          label="CVV"
          helperText="trys skaičiai kitoje kortelės pusėje"
          fullWidth
          autoComplete="cc-csc"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="saveCard" value="yes" />}
          label="Prisiminti kortelės duomenis kitam apsipirkimui"
        />
      </Grid>
    </Grid>
  </>
);

export default CheckoutPagePaymentForm;
