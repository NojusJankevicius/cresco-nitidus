import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
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

export const customTheme = createTheme(theme, {
  mixins: {
    toolbar: {
      [theme.breakpoints.up('xs')]: {
        height: 64,
      },
      [theme.breakpoints.up('md')]: {
        height: 76.5,
      },
    },
  },
});

export default customTheme;
