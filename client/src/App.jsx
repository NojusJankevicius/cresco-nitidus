import React from 'react';

import {
  BrowserRouter as RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme';
import PageLayout from './components/layouts/page-layout';
import HomePage from './pages/home-page';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <RouterProvider>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </RouterProvider>
    </CssBaseline>
  </ThemeProvider>
);

export default App;
