import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './styles/theme';
import PageRouter from './routing/page-router';

const App: React.FC = () => (
  <ThemeProvider theme={customTheme}>
    <CssBaseline>
      <PageRouter />
    </CssBaseline>
  </ThemeProvider>
);

export default App;
