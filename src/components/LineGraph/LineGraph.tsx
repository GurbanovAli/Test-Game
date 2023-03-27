import { Graphics } from '@inlet/react-pixi';
import React, { ReactElement, useRef } from 'react';
import { Circle } from '../Circle/Circle';
import { useLineGraph } from '../../hooks/useLineGraph';
import { Theme } from '../../theme/themeConfig';

type PropsType = {
  isStart: boolean;
};

const LineGraph = ({ isStart }: PropsType): ReactElement => {
  const graphics = useRef(null);
  const { xPos, yPos, ticker, drawLine } = useLineGraph(isStart);

  ticker();

  return (
    <>
      <Circle
        x={xPos}
        y={yPos}
        radius={12}
        fill={Theme.colors.lineFill}
        stroke={Theme.colors.lineStroke}
      />
      <Graphics draw={drawLine} ref={graphics.current} />
    </>
  );
};

export default LineGraph;
