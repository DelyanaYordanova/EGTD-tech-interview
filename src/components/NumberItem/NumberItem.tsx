import React, { memo } from "react";
import { NumberState } from "../../types";

import styles from "./NumberItem.module.css";
import { useDispatch } from "react-redux";
import { addNumber, removeNumber, setMaxCountSelected } from "../../store";

type Props = {
  id: number;
  numberState: string;
};

const NumberItem = memo(({ id, numberState }: Props) => {
  const dispatch = useDispatch();
  const onClick = (id: number) => {
    numberState === NumberState.Selected
      ? dispatch(removeNumber(id))
      : dispatch(addNumber(id));
    dispatch(setMaxCountSelected());
  };

  const handleClick = () => onClick(id);

  const numberStyle = `${styles.numberItem} ${styles[numberState]}`;
  const disabled = numberState === NumberState.Inactive;

  return (
    <button className={numberStyle} onClick={handleClick} disabled={disabled}>
      {id}
    </button>
  );
});

export default NumberItem;
