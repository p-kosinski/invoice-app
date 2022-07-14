import type { DefaultTheme } from 'styled-components';

const colorPalette = {
  accent: {
    main: 'hsla(252, 94%, 67%, 1)',
    light: 'hsla(252, 100%, 73%, 1)'
  },
  error: {
    main: 'hsla(0, 80%, 63%, 1)',
    light: 'hsla(0, 100%, 80%, 1)'
  },
  dark: {
    main: 'hsla(233, 31%, 17%, 1)',
    light: 'hsla(233, 30%, 21%, 1)',
  },
  lightGrey: {
    main: 'hsla(231, 20%, 61%, 1)',
    light: 'hsla(231, 75%, 93%, 1)',
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
  status: {
    success: {
      main: 'hsla(160, 67%, 52%, 1)',
      opaque: 'hsla(160, 67%, 52%, 0.06)',
    },
    pending: {
      main: 'hsla(34, 100%, 50%, 1)',
      opaque: 'hsla(34, 100%, 50%, 0.06)'
    },
    draft: {
      main:'hsla(231, 20%, 27%, 1)',
      opaque: 'hsla(231, 20%, 27%, 0.06)'
    }
  }
};

const fontSettings = {
  family: 'League Spartan, sans-serif',
  weights: {
    medium: 500,
    bold: 700
  }
};

const typographySettings = {
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
    1: -1,
    2: -0.8,
    3: -0.63,
    4: -0.25,
    5: -0.23
  }
};

const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '375px'
};

export const lightTheme: DefaultTheme = {
  colors: {
    accent: colorPalette.accent,
    error: colorPalette.error,
    status: colorPalette.status,
    backgrounds: {
      page: colorPalette.neutral.light,
      banner: colorPalette.status.draft.main,
      card: colorPalette.neutral.white,
      cardInner: colorPalette.lightGrey.lighter,
      invoiceTotal: colorPalette.status.draft.main,
      form: colorPalette.neutral.white
    },
    text: {
      main: colorPalette.grey.main,
      secondary: colorPalette.lightGrey.main,
      highlight: colorPalette.grey.light
    },
    formElements: {
      outline: {
        default: colorPalette.lightGrey.light,
        active: colorPalette.accent.main
      },
      labelsText: colorPalette.grey.light
    },
    buttons: {
      button3: {
        bg: colorPalette.lightGrey.lighter,
        text: colorPalette.grey.light,
        hoverBg: colorPalette.lightGrey.light
      },
      button4: {
        bg: colorPalette.status.draft.main,
        text: colorPalette.lightGrey.main,
        hoverBg: colorPalette.grey.main
      }
    }
  },
  font: fontSettings,
  typography: typographySettings,
  breakpoints: breakpoints
};

export const darkTheme: DefaultTheme = {
  colors: {
    accent: colorPalette.accent,
    error: colorPalette.error,
    status: colorPalette.status,
    backgrounds: {
      page: colorPalette.neutral.dark,
      banner: colorPalette.dark.main,
      card: colorPalette.dark.main,
      cardInner: colorPalette.dark.light,
      invoiceTotal: colorPalette.grey.main,
      form: colorPalette.neutral.dark
    },
    text: {
      main: colorPalette.neutral.white,
      secondary: colorPalette.lightGrey.light,
      highlight: colorPalette.lightGrey.light
    },
    formElements: {
      outline: {
        default: colorPalette.dark.light,
        active: colorPalette.dark.light
      },
      labelsText: colorPalette.lightGrey.light,
    },
    buttons: {
      button3: {
        bg: colorPalette.dark.light,
        text: colorPalette.lightGrey.light,
        hoverBg: colorPalette.neutral.white
      },
      button4: {
        bg: colorPalette.status.draft.main,
        text: colorPalette.lightGrey.light,
        hoverBg: colorPalette.dark.main
      }
    }
  },
  font: fontSettings,
  typography: typographySettings,
  breakpoints: breakpoints
};