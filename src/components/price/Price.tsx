import React from "react";
import { type RootState, useAppSelector } from "../../store";
import { formatPrice } from "../helpers";
import { PRICE_LABEL } from "../../const";

import styles from "./Price.module.css";

const Price = () => {
  const selectedNumbers = useAppSelector(
    (state: RootState) => state.numbers.selectedNumbers
  );
  const bet = useAppSelector((state: RootState) => state.inputs.bet);
  const withdraws = useAppSelector(
    (state: RootState) => state.inputs.withdraws
  );

  const price = (selectedNumbers.length * bet * withdraws).toString();

  return (
    <>
      <div className={styles.container}>{formatPrice(price)}</div>
      <div className={styles.label}>{PRICE_LABEL}</div>
    </>
  );
};

export default Price;
