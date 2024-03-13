import { createSlice } from "@reduxjs/toolkit";

type TimerState = { start: number };

const initialState: TimerState = {
  start: 0,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    resetCountDownTimer: (state) => {
      state.start = new Date().valueOf();
    },
  },
});

export const { resetCountDownTimer } = timerSlice.actions;
export const timerReducer = timerSlice.reducer;
