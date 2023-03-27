import { Graphics, useTick } from '@inlet/react-pixi';
import { ComponentProps, useCallback, useState } from 'react';
import { Theme } from '../theme/themeConfig';

type Draw = ComponentProps<typeof Graphics>['draw'];

type ReturnType = {
  xPos: number;
  yPos: number;
  ticker: () => void;
  drawLine: Draw;
};

let xIndicator = 0;
let yIndicator = 0;

export const useLineGraph = (isStart: boolean): ReturnType => {
  const startXPosition = 10;
  const startYPosition = 480;
  const speedX = 1;
  const speedY = 0.002;
  const yPosRegulator = 4;
  const initialLineWidth = [5, 10];

  const [xPos, setXPos] = useState(startXPosition);
  const [yPos, setYPos] = useState(startYPosition);
  const [lineWidth, setLineWidth] = useState(initialLineWidth[0]);

  const containerBorders = {
    x: [350, 760],
    y: [140],
  };

  const ticker = () =>
    useTick((delta: number) => {
      if (isStart) {
        yIndicator += speedY / delta;

        if (xPos > containerBorders.x[1]) {
          xIndicator -= delta;
        } else if (xPos > containerBorders.x[0]) {
          xIndicator += delta;

          if (lineWidth > initialLineWidth[1]) {
            setLineWidth(initialLineWidth[1]);
          }
        } else {
          xIndicator += speedX + delta;
        }

        setXPos(xIndicator);

        if (yPos < containerBorders.y[0]) {
          setYPos(yPos + delta);
        } else {
          setYPos(yPos - yIndicator);
        }
      } else {
        xIndicator = 0;
        yIndicator = 0;
        setLineWidth(initialLineWidth[0]);
        setXPos(startXPosition);
        setYPos(startYPosition);
      }
    });

  const drawLine = useCallback(
    (g) => {
      if (isStart) {
        g.lineStyle(lineWidth, Theme.colors.lineFill)
          .moveTo(xPos, yPos)
          .lineTo(xPos, yPos + yPosRegulator);
        g.width = xPos;
      } else {
        g.clear();
      }
    },
    [xPos, yPos]
  );

  return {
    xPos,
    yPos,
    ticker,
    drawLine,
  };
};
