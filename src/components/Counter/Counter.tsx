import React, { ReactElement } from 'react';

import * as PIXI from 'pixi.js';
import { Text, useTick } from '@inlet/react-pixi';
import { WinnerType } from '../../types';
import { Theme } from '../../theme/themeConfig';

type PropsType = {
  isStart: boolean;
  speed: number;
  count: number;
  setCount: (item: number) => void;
  winner: string;
};

const Counter = ({
  isStart,
  speed,
  count,
  setCount,
  winner,
}: PropsType): ReactElement => {
  const textStyle = new PIXI.TextStyle({
    align: 'center',
    fontFamily: 'sans-serif',
    fontSize: 70,
    fontWeight: '700',
    fill: winner
      ? winner === WinnerType.Win
        ? [Theme.colors.win]
        : [Theme.colors.lost]
      : [Theme.colors.main],
    letterSpacing: 2,
    wordWrap: true,
    wordWrapWidth: 440,
  });

  let i = 0;

  useTick((delta: number) => {
    if (isStart) {
      i += +`0.00${speed}` * delta;
      setCount(i + count);
    }
  });

  const roundedCount = parseFloat(`${count}`).toFixed(2);

  return (
    <Text
      text={`${roundedCount}x`}
      anchor={0.5}
      x={400}
      y={150}
      style={textStyle}
    />
  );
};

export default Counter;
