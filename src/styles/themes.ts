import type { DefaultTheme } from 'styled-components';
import {
  colorPalette,
  fontSettings,
  typographySettings,
  breakpoints
} from './variables';

export const lightTheme: DefaultTheme = {
  colors: {
    success: colorPalette.success,
    warning: colorPalette.warning,
    error: colorPalette.error,
    accent: colorPalette.accent,
    black: colorPalette.black,
    backgrounds: {
      page: colorPalette.neutral.light,
      banner: colorPalette.dark.main,
      card: colorPalette.neutral.white,
      cardInner: colorPalette.lightGrey.lighter,
      invoiceTotal: colorPalette.black.main,
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
        bg: colorPalette.black.main,
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
    success: colorPalette.success,
    warning: colorPalette.warning,
    error: colorPalette.error,
    accent: colorPalette.accent,
    black: colorPalette.black,
    backgrounds: {
      page: colorPalette.neutral.dark,
      banner: colorPalette.black.main,
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
        bg: colorPalette.black.main,
        text: colorPalette.lightGrey.light,
        hoverBg: colorPalette.dark.main
      }
    }
  },
  font: fontSettings,
  typography: typographySettings,
  breakpoints: breakpoints
};