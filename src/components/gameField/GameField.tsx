import React from "react";
import { useGetNumberState } from "../hooks";
import NumberItem from "../NumberItem/NumberItem";

import styles from "./GameField.module.css";

const GameField = () => {
  const getNumberState = useGetNumberState();

  const numbersArray = Array.from(Array(80).keys()).map((i) => i + 1);

  return (
    <div className={styles.fieldContainer}>
      {numbersArray.map((num) => (
        <NumberItem key={num} id={num} numberState={getNumberState(num)} />
      ))}
    </div>
  );
};

export default GameField;
