import React, { useState } from "react";
import {
  type RootState,
  useAppDispatch,
  useAppSelector,
  changeBet,
  decrementBet,
  incrementBet,
} from "../../store";
import { BET } from "../../const";
import { formatFloat, formatPrice } from "../helpers";
import Input from "../Input/Input";

const Bet = () => {
  const dispatch = useAppDispatch();
  const bet = useAppSelector((state: RootState) => state.inputs.bet).toString();
  const [focus, setFocus] = useState(false);

  const decrement = () => {
    Number(bet) >= BET.MIN_VALUE + BET.STEP && dispatch(decrementBet());
  };

  const increment = () => {
    dispatch(incrementBet());
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeBet(formatFloat(e.target.value)));
  };

  const toggleFocus = () => setFocus(!focus);
  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeBet(
        Number(e.target.value) >= BET.MIN_VALUE
          ? formatFloat(e.target.value)
          : BET.MIN_VALUE
      )
    );
    toggleFocus();
  };

  return (
    <Input
      value={focus ? bet : formatPrice(bet)}
      label={BET.LABEL}
      decrement={decrement}
      increment={increment}
      onChange={onChange}
      onFocus={toggleFocus}
      onBlur={onBlur}
      type={focus ? "number" : "text"}
      step="0.01"
    />
  );
};

export default Bet;
