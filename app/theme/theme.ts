'use client';

import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    mobile: true;
    tablet: true;
    lg: true;
    xl: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 600,
      lg: 1440,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: '__Public_Sans_6f95b7, sans-serif',
  },
});

export default theme;
