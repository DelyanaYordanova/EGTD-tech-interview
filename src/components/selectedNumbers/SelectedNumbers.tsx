import React from "react";
import {
  type RootState,
  useAppDispatch,
  useAppSelector,
  setRandomNumbers,
  resetNumbers,
  setMaxCountSelected,
} from "../../store";
import {
  GENERATE_NUMBERS_LABEL,
  RESET_NUMBERS_LABEL,
  SELECTED_NUMBERS_LABEL,
} from "../../const";
import { NumberState } from "../../types";
import { getRandomNumbers } from "../helpers";
import NumberItem from "../NumberItem/NumberItem";

import styles from "./SelectedNumbers.module.css";

const SelectedNumbers = () => {
  const dispatch = useAppDispatch();

  const selectedNumbers = useAppSelector(
    (state: RootState) => state.numbers.selectedNumbers
  );

  const generateNumbers = () => {
    dispatch(setRandomNumbers(getRandomNumbers()));
    dispatch(setMaxCountSelected());
  };

  const resetSelectedNumbers = () => {
    dispatch(resetNumbers());
    dispatch(setMaxCountSelected());
  };

  return (
    <>
      <div className={styles.numbersContainer}>
        {selectedNumbers.map((num) => (
          <NumberItem key={num} id={num} numberState={NumberState.Selected} />
        ))}
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={generateNumbers}>
          {GENERATE_NUMBERS_LABEL}
        </button>
        <div className={styles.label}>{SELECTED_NUMBERS_LABEL}</div>
        <button className={styles.button} onClick={resetSelectedNumbers}>
          {RESET_NUMBERS_LABEL}
        </button>
      </div>
    </>
  );
};

export default SelectedNumbers;
