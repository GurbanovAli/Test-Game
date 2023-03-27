import { useAppSelector } from '../redux/redux';
import { isStartSelector, scoreSelector } from '../store/App/appSelectors';

type PropsType = {
  score: number;
  isStart: boolean;
};

export const useSelectors = (): PropsType => {
  const score = useAppSelector(scoreSelector);
  const isStart = useAppSelector(isStartSelector);

  return {
    score,
    isStart,
  };
};
