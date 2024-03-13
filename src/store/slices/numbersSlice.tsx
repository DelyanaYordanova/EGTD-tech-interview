import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MAX_COUNT_SELECTED } from "../../const";

type NumbersState = {
  selectedNumbers: number[];
  maxCountSelected: boolean;
};
const initialState: NumbersState = {
  selectedNumbers: [],
  maxCountSelected: false,
};

export const numbersSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<number>) => {
      state.selectedNumbers.push(action.payload);
    },
    removeNumber: (state, action: PayloadAction<number>) => {
      const index = state.selectedNumbers.indexOf(action.payload);
      state.selectedNumbers.splice(index, 1);
    },
    resetNumbers: (state) => {
      state.selectedNumbers.length = 0;
    },
    setRandomNumbers: (state, action: PayloadAction<number[]>) => {
      state.selectedNumbers.length = 0;
      state.selectedNumbers.push(...action.payload);
    },
    setMaxCountSelected: (state) => {
      state.maxCountSelected =
        state.selectedNumbers.length === MAX_COUNT_SELECTED;
    },
  },
});

export const {
  addNumber,
  removeNumber,
  resetNumbers,
  setRandomNumbers,
  setMaxCountSelected,
} = numbersSlice.actions;
export const numbersReducer = numbersSlice.reducer;
