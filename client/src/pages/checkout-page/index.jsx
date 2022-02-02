import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Check from '@mui/icons-material/Check';
import { styled } from '@mui/material';
import AddressForm from './checkout-page-address-form';
import PaymentForm from './checkout-page-payment-form';
import Review from './checkout-page-review';

const steps = ['Adresas', 'Mokėjimo duomenys', 'Užsakymo peržiūra'];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
};

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .StepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .StepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

const QontoStepIcon = (props) => {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="StepIcon-completedIcon" />
      ) : (
        <div className="StepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
};

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          Prekių užsakymas
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Dėkojame už jūsų užsakymą.
              </Typography>
              <Typography variant="subtitle1">
                Jūsų užsakymao numeris yra #2001539. Išsiuntėme elektroninį užsakymo patvirtinimą
                į jūsų el. paštą. Greitu metu atsiųsime ir prekių perdavimo
                kurjeriui patvirtinimą.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} color="inherit" sx={{ mt: 3, ml: 1 }}>
                    Atgal
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  color="success"
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'patvirtiniti užsakymą' : 'Toliau'}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default CheckoutPage;
