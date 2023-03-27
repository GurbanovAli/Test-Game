import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAppStateType } from './appTypes';

const initialState: IAppStateType = {
  score: 1000,
  points: 100,
  multiplier: 1,
  isStart: false,
  speed: 4,
  timer: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setScore: (state, { payload }: PayloadAction<number>) => {
      state.score = payload;
    },

    setPoints: (state, { payload }: PayloadAction<number>) => {
      state.points = payload;
    },

    setMultiplier: (state, { payload }: PayloadAction<number>) => {
      state.multiplier = payload;
    },

    setIsStart: (state, { payload }: PayloadAction<boolean>) => {
      state.isStart = payload;
    },

    setSpeed: (state, { payload }: PayloadAction<number>) => {
      state.speed = payload;
    },

    setTimer: (state, { payload }: PayloadAction<number>) => {
      state.timer = payload;
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
