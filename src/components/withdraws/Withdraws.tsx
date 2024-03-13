import React from "react";
import {
  type RootState,
  useAppDispatch,
  useAppSelector,
  changeWithdraws,
  decrementWithdraws,
  incrementWithdraws,
} from "../../store";

import { WITHDRAWS } from "../../const";
import Input from "../Input/Input";

const Withdraws = () => {
  const dispatch = useAppDispatch();
  const withdraws = useAppSelector(
    (state: RootState) => state.inputs.withdraws
  ).toString();

  const decrement = () => {
    Number(withdraws) >= WITHDRAWS.MIN_VALUE + WITHDRAWS.STEP &&
      dispatch(decrementWithdraws());
  };

  const increment = () => {
    dispatch(incrementWithdraws());
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    !isNaN(Number(e.target.value)) &&
      dispatch(changeWithdraws(Number(e.target.value)));
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeWithdraws(
        Number(e.target.value) >= WITHDRAWS.MIN_VALUE
          ? Number(e.target.value)
          : WITHDRAWS.MIN_VALUE
      )
    );
  };

  return (
    <Input
      value={withdraws}
      label={WITHDRAWS.LABEL}
      decrement={decrement}
      increment={increment}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Withdraws;
