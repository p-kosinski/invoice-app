import 'styled-components';

interface DefaultColorVariants {
  main: string;
  light: string;
};

interface DefaultWithDarkColorVariants extends DefaultColorVariants {
  dark: string;
};

interface ExtendedColorVariants extends DefaultColorVariants {
  lighter: string;
};

interface OpaqueColorVariants {
  main: string;
  opaque: string;
};

interface OpaqueWithDarkColorVariants extends OpaqueColorVariants {
  dark: string;
};

type SeverityColorExtend<T extends {}> = T & {
  alertBg: string;
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
  skeleton: string;
};

interface TextColors {
  main: string;
  secondary: string;
  highlight: string;
  invoiceTile: {
    dueDate: string;
    clientName: string;
  },
  goBackBtnHover: string;
  invoiceItemAmount: string;
};

interface FormColors {
  outline: string;
  background: string;
  text: string;
  optionsText: string;
  labelsText: string;
  dividers: string;
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
  edit: TextButtonColorSettings;
  draft: TextButtonColorSettings;
  add: TextButtonColorSettings;
  discard: TextButtonColorSettings;
  themeToggler: ButtonColorSettings;
};

type ShadowColorSettings = {
  main: string;
  lighter: string;
};

interface ShadowColors {
  black: ShadowColorSettings;
  grey: ShadowColorSettings;
}

interface AlertColorSettings {
  success: string;
  error: string;
};

interface ColorPalette {
  success: OpaqueWithDarkColorVariants;
  warning: OpaqueColorVariants;
  error: DefaultWithDarkColorVariants;
  accent: DefaultColorVariants;
  black: OpaqueColorVariants;
  dark: DefaultColorVariants;
  lightGrey: LightGreyVariants;
  grey: DefaultColorVariants;
  neutral: NeutralColors;
  shadows: ShadowColors;
};

interface ThemeColors {
  success: OpaqueWithDarkColorVariants;
  warning: OpaqueColorVariants;
  error: DefaultWithDarkColorVariants;
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
  shadow: ShadowColorSettings;
  alerts: AlertColorSettings;
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