import 'styled-components';

interface DefaultColorVariants {
  main: string;
  light: string;
};

interface ExtendedColorVariants extends DefaultColorVariants {
  lighter: string;
};

interface OpaqueColorVariants {
  main: string;
  opaque: string;
};

interface LightGreyVariants extends ExtendedColorVariants {
  lightOpaque: string;
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
  outline: string;
  background: string;
  text: string;
  optionsText: string;
  labelsText: string;
  dividers: string;
  shadow: string;
  statusFiltersBg: string;
};

interface TextButtonColorSettings {
  bg: string,
  text: string,
  hoverBg: string,
};

interface ButtonColorSettings {
  default: string;
  active: string;
};

interface ButtonColors {
  button3: TextButtonColorSettings;
  button4: TextButtonColorSettings;
  themeToggler: ButtonColorSettings;
};

interface ColorPalette {
  success: OpaqueColorVariants;
  warning: OpaqueColorVariants;
  error: DefaultColorVariants;
  accent: DefaultColorVariants;
  black: OpaqueColorVariants;
  dark: DefaultColorVariants;
  lightGrey: LightGreyVariants;
  grey: DefaultColorVariants;
  neutral: NeutralColors;
};

interface ThemeColors {
  success: OpaqueColorVariants;
  warning: OpaqueColorVariants;
  error: DefaultColorVariants;
  accent: DefaultColorVariants;
  draft: OpaqueColorVariants;
  black: OpaqueColorVariants;
  dark: DefaultColorVariants;
  lightGrey: ExtendedColorVariants;
  grey: DefaultColorVariants;
  neutral: NeutralColors;
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
  [level: number]: string;
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

type TransitionDuration = string;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColors,
    font: FontSettings;
    typography: TypographySettings;
    breakpoints: Breakpoints;
    transitionDuration: TransitionDuration;
  }
}