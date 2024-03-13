import React, { InputHTMLAttributes } from "react";

import styles from "./Input.module.css";
type InputProps = {
  value: string;
  label: string;
  decrement: () => void;
  increment: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  value,
  label,
  decrement,
  increment,
  onChange,
  ...props
}: InputProps) => {
  return (
    <>
      <div className={styles.container}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={decrement}
        >
          -
        </button>
        <input
          className={styles.textBox}
          aria-label="number of withdraws"
          value={value}
          onChange={onChange}
          {...props}
        />
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div className={styles.label}>{label}</div>
    </>
  );
};

export default Input;
