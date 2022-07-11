import 'styled-components';

interface Color {
  dark: string;
  light: string;
};

interface Colors {
  [key: string]: Color;
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
  weights : FontWeights,
  sizes: FontSizes,
  lineHeights: FontLineHeights,
  letterSpacings: FontLetterSpacings
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors,
    font: FontSettings;
  }
}