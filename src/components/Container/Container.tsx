import React from 'react';
import { Stage } from '@inlet/react-pixi';
import LineGraph from '../LineGraph/LineGraph';
import Counter from '../Counter/Counter';
import { Theme } from '../../theme/themeConfig';
import { StyledCanvasWrapper } from './StyledComponent';
import { useCanvasHandler } from '../../hooks/useCanvasHandler';

const Container = (): JSX.Element => {
  const { isStart, speed, winner, count, setCount, handleGameRound } =
    useCanvasHandler();

  handleGameRound();

  return (
    <StyledCanvasWrapper>
      <Stage
        width={800}
        height={500}
        options={{ autoDensity: true, backgroundColor: Theme.colors.neutral3 }}
      >
        <Counter
          isStart={isStart}
          speed={speed}
          count={count}
          setCount={setCount}
          winner={winner}
        />
        <LineGraph isStart={isStart} />
      </Stage>
    </StyledCanvasWrapper>
  );
};

export default Container;
