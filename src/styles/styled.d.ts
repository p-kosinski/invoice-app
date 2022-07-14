import 'styled-components';

interface Color {
  dark?: string;
  light?: string;
  main?: string;
  opaque?: string;
  lighter? : string;
};

interface StatusColor {
  [key: string]: Color;
};

interface BackgroundColors {
  page: string;
  banner: string;
  card: string;
  cardInner: string;
  invoiceTotal: string;
  form: string;
};

interface TextColors {
  main: string;
  secondary: string;
  highlight: string;
};

interface FormColors {
  outline: {
    default: string;
    active: string;
  };
  labelsText: string;
};

interface ButtonColorSettings {
  bg: string,
  text: string,
  hoverBg: string,
};

interface ButtonColors {
  [key: string]: ButtonColorSettings;
};

interface Colors {
  accent: Color;
  error: Color;
  status: StatusColor;
  backgrounds: BackgroundColors;
  text: TextColors;
  formElements: FormColors;
  buttons: ButtonColors;
};

interface FontWeights {
  [weight: string]: number;
};

interface FontSizes {
  [weight: string]: string;
};

interface FontLineHeights {
  [level: number]: string;
};

interface FontLetterSpacings {
  [level: number]: number;
};

interface FontSettings {
  family: string;
  weights: FontWeights,
};

interface TypographySettings {
  fontSizes: FontSizes;
  lineHeights: FontLineHeights,
  letterSpacings: FontLetterSpacings
};

interface Breakpoints {
  [key: string]: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors,
    font: FontSettings;
    typography: TypographySettings;
    breakpoints: Breakpoints;
  }
}