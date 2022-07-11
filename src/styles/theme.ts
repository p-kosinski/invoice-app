import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: {
      dark: 'hsla(252, 94%, 67%, 1)',
      light: 'hsla(252, 100%, 73%, 1)'
    },
    error: {
      dark: 'hsla(0, 80%, 63%, 1)',
      light: 'hsla(0, 100%, 80%, 1)'
    },
    dark: {
      dark: 'hsla(233, 31%, 17%, 1)',
      light: 'hsla(233, 30%, 21%, 1)'
    },
    lightGrey: {
      dark: 'hsla(231, 20%, 61%, 1)',
      light: 'hsla(231, 75%, 93%, 1)'
    },
    gray: {
      dark: 'hsla(231, 28%, 7%, 1)',
      light: 'hsla(231, 36%, 63%, 1)'
    },
    neutral: {
      dark: 'hsla(233, 30%, 11%, 1)',
      light: 'hsla(240, 27%, 98%, 1)'
    }
  },
  font: {
    family: 'League Spartan, sans-serif',
    weights: {
      medium: 500,
      bold: 700
    },
    sizes: {
      xs: '11px',
      s: '12px',
      m: '16px',
      l: '20px',
      xl: '32px'
    },
    lineHeights: {
      1: '15px',
      2: '18px',
      3: '22px',
      4: '24px',
      5: '36px'
    },
    letterSpacings: {
      1: -1,
      2: -0.8,
      3: -0.63,
      4: -0.25,
      5: -0.23
    },
  }
};