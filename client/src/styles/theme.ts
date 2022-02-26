import { createTheme, Theme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b5e20',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export const customTheme: Theme = createTheme(theme, {
  mixins: {
    toolbar: {
      [theme.breakpoints.up('xs')]: {
        height: 64,
      },
      [theme.breakpoints.up('md')]: {
        height: 76.5,
      },
      height: 64,
    },
  },
});

export const responsiveFont = responsiveFontSizes(theme, { factor: 4 });

export default {
  customTheme,
  responsiveFont,
};
