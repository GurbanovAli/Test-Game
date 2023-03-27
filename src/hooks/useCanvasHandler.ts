import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/redux';
import {
  isStartSelector,
  multiplierSelector,
  pointsSelector,
  scoreSelector,
  speedSelector,
  timerSelector,
} from '../store/App/appSelectors';
import { appActions } from '../store/App/appSlice';
import { WinnerType } from '../types';

type ReturnType = {
  isStart: boolean;
  speed: number;
  winner: string;
  count: number;
  setCount: (count: number) => void;
  handleGameRound: () => void;
};

export const useCanvasHandler = (): ReturnType => {
  const score = useAppSelector(scoreSelector);
  const points = useAppSelector(pointsSelector);
  const multiplier = useAppSelector(multiplierSelector);
  const isStart = useAppSelector(isStartSelector);
  const speed = useAppSelector(speedSelector);
  const timer = useAppSelector(timerSelector);

  const dispatch = useAppDispatch();
  const startCount = 0.0;

  const [count, setCount] = useState(startCount);
  const [winner, setWinner] = useState('');

  const handleWinner = useCallback((winnerType: string): void => {
    setWinner(winnerType);
    setTimeout(() => setWinner(''), 1000);
  }, []);

  const handleGameRound = (): void => {
    if (timer < count) {
      dispatch(appActions.setIsStart(false));
      dispatch(appActions.setTimer(0));

      if (multiplier === timer) {
        dispatch(appActions.setScore(score + points));
        handleWinner(WinnerType.Win);
      } else {
        dispatch(appActions.setScore(score - points));
        handleWinner(WinnerType.Lost);
      }
      setCount(startCount);
    }
  };

  return {
    isStart,
    speed,
    winner,
    count,
    setCount,
    handleGameRound,
  };
};
