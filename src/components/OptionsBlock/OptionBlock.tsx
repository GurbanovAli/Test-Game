import React from 'react';
import Button from '../Button/Button';
import Indicator from '../Indicator/Indicator';
import {
  StyledIndicatorBlock,
  StyledOptionBlock,
  StyledScore,
} from './StyledComponent';
import { ButtonType, IndicatorType } from '../../types';
import { useOptions } from '../../hooks/useOptions';
import { useAppSelector } from '../../redux/redux';
import {
  multiplierSelector,
  pointsSelector,
  scoreSelector,
  speedSelector,
} from '../../store/App/appSelectors';
import { StyledText } from '../Indicator/StyledComponent';

const OptionBlock = (): JSX.Element => {
  const score = useAppSelector(scoreSelector);
  const points = useAppSelector(pointsSelector);
  const multiplier = useAppSelector(multiplierSelector);
  const speed = useAppSelector(speedSelector);
  const { onPoint, onMultiplier, onStart, onSpeed } = useOptions();

  return (
    <StyledOptionBlock>
      <StyledIndicatorBlock>
        <StyledScore>
          <StyledText>{IndicatorType.Score}</StyledText>
          {score}
        </StyledScore>
        <Indicator
          text={IndicatorType.Points}
          increment={points - 25}
          decrement={points + 25}
          sum={points}
          onClick={onPoint}
          min={0}
          max={score}
        />
      </StyledIndicatorBlock>

      <StyledIndicatorBlock>
        <Indicator
          text={IndicatorType.Multiplier}
          increment={multiplier - 0.1}
          decrement={multiplier + 0.1}
          sum={parseFloat(`${multiplier}`).toFixed(2)}
          onClick={onMultiplier}
          min={0}
          max={5}
        />
        <Indicator
          text={IndicatorType.Speed}
          increment={speed - 1}
          decrement={speed + 1}
          sum={speed}
          onClick={onSpeed}
          min={1}
          max={5}
        />
      </StyledIndicatorBlock>
      <Button
        type={ButtonType.Submit}
        text={IndicatorType.Start}
        onClick={() => onStart()}
      />
    </StyledOptionBlock>
  );
};

export default OptionBlock;
