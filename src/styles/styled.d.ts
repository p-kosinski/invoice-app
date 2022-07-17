import 'styled-components';

interface DefaultColorVariants {
  main: string;
  light: string;
};

interface ExtendedColorVariants extends DefaultColorVariants {
  lighter: string;
}

interface OpaqueColorVariants {
  main: string;
  opaque: string;
};

interface NeutralColors {
  dark: string;
  light: string;
  white: string;
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

interface ColorPalette {
  success: OpaqueColorVariants;
  warning: OpaqueColorVariants;
  error: DefaultColorVariants;
  accent: DefaultColorVariants;
  black: OpaqueColorVariants;
  dark: DefaultColorVariants;
  lightGrey: ExtendedColorVariants;
  grey: DefaultColorVariants;
  neutral: NeutralColors;
};

interface ThemeColors {
  success: OpaqueColorVariants;
  warning: OpaqueColorVariants;
  error: DefaultColorVariants;
  accent: DefaultColorVariants;
  black: OpaqueColorVariants;
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
    colors: ThemeColors,
    font: FontSettings;
    typography: TypographySettings;
    breakpoints: Breakpoints;
  }
}