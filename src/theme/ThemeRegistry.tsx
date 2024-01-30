'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const typographyOptions = {
  fontSize: 12,
  fontFamily: roboto.style.fontFamily,
};

const paletteOptions = {
  primary: {
    main: '#002147',
  },
  secondary: {
    main: '#ffdf00',
  },
  success: {
    main: '#39ff14',
  },
  error: {
    main: '#ff2800',
  },
  warning: {
    main: '#ff6700',
  },
  info: {
    main: '#bf00ff',
  },
};

const darkThemeOptions: ThemeOptions = {
  typography: typographyOptions,
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
    text: {
      primary: '#f5f5f5',
    },
    ...paletteOptions,
  },
};

const lightThemeOptions: ThemeOptions = {
  typography: typographyOptions,
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#343434',
    },
    ...paletteOptions,
  },
};

const darkTheme = createTheme(darkThemeOptions);
const lightTheme = createTheme(lightThemeOptions);
