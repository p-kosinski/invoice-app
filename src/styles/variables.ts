import type {
  ColorPalette,
  FontSettings,
  TypographySettings,
  Breakpoints,
  TransitionDuration
} from './styled';

export const colorPalette: ColorPalette = {
  success: {
    main: 'hsla(160, 67%, 52%, 1)',
    dark: 'hsla(160, 67%, 39%, 1)',
    opaque: 'hsla(160, 67%, 52%, 0.06)',
  },
  warning: {
    main: 'hsla(34, 100%, 50%, 1)',
    opaque: 'hsla(34, 100%, 50%, 0.06)'
  },
  error: {
    main: 'hsla(0, 80%, 63%, 1)',
    dark: 'hsla(0, 80%, 57%, 1)',
    light: 'hsla(0, 100%, 80%, 1)',
  },
  accent: {
    main: 'hsla(252, 94%, 67%, 1)',
    light: 'hsla(252, 100%, 73%, 1)',
  },
  black: {
    main:'hsla(231, 20%, 27%, 1)',
    opaque: 'hsla(231, 20%, 27%, 0.06)'
  },
  dark: {
    main: 'hsla(233, 31%, 17%, 1)',
    light: 'hsla(233, 30%, 21%, 1)',
  },
  lightGrey: {
    main: 'hsla(231, 20%, 61%, 1)',
    light: 'hsla(231, 75%, 93%, 1)',
    lightOpaque: 'hsla(231, 75%, 93%, 0.06)',
    lighter: 'hsla(231, 67%, 99%, 1)',
  },
  grey: {
    main: 'hsla(231, 28%, 7%, 1)',
    light: 'hsla(231, 36%, 63%, 1)'
  },
  neutral: {
    dark: 'hsla(233, 30%, 11%, 1)',
    light: 'hsla(240, 27%, 98%, 1)',
    white: 'hsla(0, 0%, 100%, 1)'
  },
  shadows: {
    black: {
      main: 'hsla(0, 0%, 0%, 0.25)',
      lighter: 'hsla(0, 0%, 0%, 0.1)'
    },
    grey: {
      main: 'hsla(231, 38%, 45%, 0.25)',
      lighter: 'hsla(231, 38%, 45%, 0.1)'
    },
  }
};

export const fontSettings: FontSettings = {
  family: 'League Spartan, sans-serif',
  weights: {
    medium: 500,
    semiBold: 600,
    bold: 700
  }
};

export const typographySettings: TypographySettings = {
  fontSizes: {
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
    1: '-1px',
    2: '-0.8px',
    3: '-0.625px',
    4: '-0.25px',
    5: '-0.23px'
  }
};

export const breakpoints: Breakpoints = {
  xl: '1200px',
  lg: '1024px',
  md: '768px',
  sm: '600px',
  xs: '375px'
};

export const transitionDuration: TransitionDuration = '0.15s';