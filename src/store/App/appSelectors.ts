import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';

import { IAppStateType } from './appTypes';

const appSelector = (state: RootState): IAppStateType => state.app;

export const scoreSelector = createSelector(appSelector, (app) => app.score);

export const pointsSelector = createSelector(appSelector, (app) => app.points);

export const multiplierSelector = createSelector(
  appSelector,
  (app) => app.multiplier
);

export const isStartSelector = createSelector(
  appSelector,
  (app) => app.isStart
);

export const speedSelector = createSelector(appSelector, (app) => app.speed);

export const timerSelector = createSelector(appSelector, (app) => app.timer);
