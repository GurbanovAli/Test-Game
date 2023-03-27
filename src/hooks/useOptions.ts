import { useCallback } from 'react';
import { useAppDispatch } from '../redux/redux';
import { useSelectors } from './useSelectors';
import { appActions } from '../store/App/appSlice';

type ReturnType = {
  onStart: () => void;
  onPoint: (sum: number) => { payload: number; type: string };
  onMultiplier: (sum: number) => { payload: number; type: string };
  onSpeed: (sum: number) => void;
};

export const useOptions = (): ReturnType => {
  const maxCount = 5;
  const dispatch = useAppDispatch();
  const { score, isStart } = useSelectors();
  const randomTime = +(Math.random() * maxCount).toFixed(1);

  const onStart = useCallback(() => {
    if (!isStart && score) {
      dispatch(appActions.setIsStart(true));
      dispatch(appActions.setTimer(randomTime));
    }
  }, [isStart]);

  const onPoint = useCallback((sum) => dispatch(appActions.setPoints(sum)), []);
  const onMultiplier = useCallback(
    (sum) => dispatch(appActions.setMultiplier(+sum.toFixed(2))),
    []
  );
  const onSpeed = useCallback(
    (sum) => dispatch(appActions.setSpeed(sum)),
    [isStart]
  );

  return {
    onStart,
    onPoint,
    onMultiplier,
    onSpeed,
  };
};
