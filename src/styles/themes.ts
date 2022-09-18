import type { DefaultTheme } from 'styled-components';
import {
  colorPalette,
  fontSettings,
  typographySettings,
  breakpoints,
  transitionDuration
} from './variables';

export const lightTheme: DefaultTheme = {
  colors: {
    success: colorPalette.success,
    warning: colorPalette.warning,
    error: colorPalette.error,
    accent: colorPalette.accent,
    draft: {
      main: colorPalette.black.main,
      opaque: colorPalette.black.opaque,
    },
    black: colorPalette.black,
    dark: colorPalette.dark,
    lightGrey: colorPalette.lightGrey,
    grey: colorPalette.grey,
    neutral: colorPalette.neutral,
    backgrounds: {
      page: colorPalette.neutral.light,
      banner: colorPalette.black.main,
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
      outline: colorPalette.lightGrey.light,
      background: colorPalette.neutral.white,
      text: colorPalette.grey.main,
      optionsText: colorPalette.grey.main,
      labelsText: colorPalette.grey.light,
      dividers: colorPalette.lightGrey.light,
      shadow: 'hsla(231, 38%, 45%, 0.25)',
      statusFiltersBg: colorPalette.neutral.white
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
      },
      themeToggler: {
        default: colorPalette.grey.light,
        active: colorPalette.lightGrey.light
      }
    }
  },
  font: fontSettings,
  typography: typographySettings,
  breakpoints: breakpoints,
  transitionDuration: transitionDuration
};

export const darkTheme: DefaultTheme = {
  colors: {
    success: colorPalette.success,
    warning: colorPalette.warning,
    error: colorPalette.error,
    accent: colorPalette.accent,
    draft: {
      main: colorPalette.lightGrey.light,
      opaque: colorPalette.lightGrey.lightOpaque,
    },
    black: colorPalette.black,
    dark: colorPalette.dark,
    lightGrey: colorPalette.lightGrey,
    grey: colorPalette.grey,
    neutral: colorPalette.neutral,
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
      outline: colorPalette.dark.light,
      background: colorPalette.dark.light,
      text: colorPalette.neutral.white,
      optionsText: colorPalette.lightGrey.light,
      labelsText: colorPalette.lightGrey.light,
      dividers: colorPalette.dark.main,
      shadow: 'hsla(0, 0%, 0%, 0.25)',
      statusFiltersBg: colorPalette.dark.light
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
      },
      themeToggler: {
        default: colorPalette.lightGrey.main,
        active: colorPalette.lightGrey.light
      }
    }
  },
  font: fontSettings,
  typography: typographySettings,
  breakpoints: breakpoints,
  transitionDuration: transitionDuration
};