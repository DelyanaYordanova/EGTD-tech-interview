import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BET, WITHDRAWS } from "../../const";

const initialState = {
  withdraws: 1,
  bet: 1,
};
export const inputsSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    incrementWithdraws: (state) => {
      state.withdraws += WITHDRAWS.STEP;
    },
    decrementWithdraws: (state) => {
      state.withdraws -= WITHDRAWS.STEP;
    },
    changeWithdraws: (state, action: PayloadAction<number>) => {
      state.withdraws = action.payload;
    },
    incrementBet: (state) => {
      state.bet = parseFloat((state.bet + BET.STEP).toPrecision(3));
    },
    decrementBet: (state) => {
      state.bet = parseFloat((state.bet - BET.STEP).toPrecision(3));
    },
    changeBet: (state, action: PayloadAction<number>) => {
      state.bet = action.payload;
    },
  },
});

export const {
  incrementWithdraws,
  decrementWithdraws,
  changeWithdraws,
  incrementBet,
  decrementBet,
  changeBet,
} = inputsSlice.actions;

export const inputsReducer = inputsSlice.reducer;
