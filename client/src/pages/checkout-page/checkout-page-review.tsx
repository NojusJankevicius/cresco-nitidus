import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Mushroom starter grow kit',
    desc: 'A nice thing',
    price: '19.99 eur',
  },
  {
    name: 'Grybų auginimo kursai',
    desc: 'Another thing',
    price: '49.99 eur',
  },
  { name: 'Pristatymo išlaidos', desc: '', price: 'nemokama' },
];

const addresses = ['Verkių g. 1', 'Vilnius', '08218'];
const payments = [
  { name: 'Kortelė', detail: 'Visa' },
  { name: 'Mokėtojo vardas', detail: 'Aldona Pusytė' },
  { name: 'Kortelės Nr.', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Galiojimo data', detail: '04/2024' },
];

const CheckoutPageReview = () => (
  <>
    <Typography variant="h6" gutterBottom>
      Jūsų užsakymas
    </Typography>
    <List disablePadding>
      {products.map((product) => (
        <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={product.name} secondary={product.desc} />
          <Typography variant="body2">{product.price}</Typography>
        </ListItem>
      ))}

      <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText primary="Viso" />
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          69.98 eur
        </Typography>
      </ListItem>
    </List>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Adresas
        </Typography>
        <Typography gutterBottom>Aldona Pusytė</Typography>
        <Typography gutterBottom>{addresses.join(', ')}</Typography>
      </Grid>
      <Grid item container direction="column" xs={12} sm={6}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Payment details
        </Typography>
        <Grid container>
          {payments.map((payment) => (
            <React.Fragment key={payment.name}>
              <Grid item xs={6}>
                <Typography gutterBottom>{payment.name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{payment.detail}</Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </>
);

export default CheckoutPageReview;
