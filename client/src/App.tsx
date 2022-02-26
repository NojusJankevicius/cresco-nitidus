import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import store from './store';
import { customTheme } from './styles/theme';
import PageRouter from './routing/page-router';

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={customTheme}>
      <CssBaseline>
        <PageRouter />
      </CssBaseline>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
