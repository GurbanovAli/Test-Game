import {
  CHINESE_BLACK,
  GUNMETAL,
  SONIC_SILVER,
  WHITE,
  BLUE_GRAY,
  DARK_BLUE,
  GRAY_BORDER,
  LOST,
  WIN,
  LINE_FILL,
  LINE_STROKE,
  CANVAS,
  CANVAS_STRING,
} from './colors';
import { ThemeType, ThemeOption } from './types';

const TRANSITION_TIME = '200ms';

const themeOption: ThemeOption = {
  transition: `${TRANSITION_TIME} ease-in`,
  transitionTime: TRANSITION_TIME,
};

export const Theme: ThemeType = {
  colors: {
    main: WHITE,
    textMain: GUNMETAL,
    textSecondary: CHINESE_BLACK,
    textTertiary: SONIC_SILVER,
    neutral: BLUE_GRAY,
    neutral2: DARK_BLUE,
    neutral3: CANVAS,
    grayBorder: GRAY_BORDER,
    lost: LOST,
    win: WIN,
    lineFill: LINE_FILL,
    lineStroke: LINE_STROKE,
    canvas: CANVAS,
    canvasString: CANVAS_STRING,
  },
  ...themeOption,
};
