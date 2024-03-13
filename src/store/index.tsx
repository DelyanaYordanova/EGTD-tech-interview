import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { commentsApi } from "./apis/commentsApi";
import {
  numbersReducer,
  addNumber,
  removeNumber,
  resetNumbers,
  setRandomNumbers,
  setMaxCountSelected,
} from "./slices/numbersSlice";
import {
  inputsReducer,
  incrementBet,
  decrementBet,
  changeBet,
  incrementWithdraws,
  decrementWithdraws,
  changeWithdraws,
} from "./slices/inputsSlice";
import { timerReducer, resetCountDownTimer } from "./slices/timerSlice";

const store = configureStore({
  reducer: {
    numbers: numbersReducer,
    // isMaxCountSelected: isMaxCountSelectedReducer,
    inputs: inputsReducer,
    countDownTimer: timerReducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(commentsApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  store,
  addNumber,
  removeNumber,
  resetNumbers,
  setRandomNumbers,
  setMaxCountSelected,
  incrementBet,
  decrementBet,
  changeBet,
  incrementWithdraws,
  decrementWithdraws,
  changeWithdraws,
  resetCountDownTimer,
};

export { useFetchCommentsQuery } from "./apis/commentsApi";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { useAppDispatch, useAppSelector } from './hooks';

