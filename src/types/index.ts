export type Icon = {
  width?: number;
  height?: number;
  fill?: string;
};

export enum ButtonType {
  Submit = 'submit',
  Button = 'button',
}

export enum WinnerType {
  Win = 'win',
  Lost = 'lost',
}

export enum IndicatorType {
  Start = 'Start',
  Points = 'Points',
  Multiplier = 'Multiplier',
  Speed = 'Speed',
  Score = 'Score',
}
