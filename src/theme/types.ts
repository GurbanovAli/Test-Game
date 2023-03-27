interface ThemeColors {
  main: string;
  textMain: string;
  textSecondary: string;
  textTertiary: string;
  neutral: string;
  neutral2: string;
  neutral3: number;
  grayBorder: string;
  lost: string;
  win: string;
  lineFill: number;
  lineStroke: number;
  canvas: number;
  canvasString: string;
}

export interface ThemeOption {
  transition: string;
  transitionTime: string;
}

export interface ThemeType extends ThemeOption {
  colors: ThemeColors;
}
