import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import store from './store';
import theme from './styles/theme';
import PageRouter from './routing/page-router';

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <PageRouter />
      </CssBaseline>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
