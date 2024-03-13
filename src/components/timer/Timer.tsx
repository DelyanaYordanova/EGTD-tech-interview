import React, { useEffect, useState } from "react";
import {
  type RootState,
  useAppDispatch,
  useAppSelector,
  resetCountDownTimer,
  useFetchCommentsQuery,
} from "../../store";
import { CLOCK_LABEL, COUNT_DOWN_VALUE } from "../../const";
import { calculateTimerDisplayValues } from "../helpers";

import styles from "./Timer.module.css";

type DisplayValues = {
  minutes: string;
  seconds: string;
};

const Timer = () => {
  const dispatch = useAppDispatch();
  const { start: countDownStart } = useAppSelector(
    (state: RootState) => state.countDownTimer
  );
  const { refetch } = useFetchCommentsQuery();
  const [timeLeft, setTimeLeft] = useState(0);
  const [displayValues, setDisplayValues] = useState({} as DisplayValues);

  useEffect(() => {
    if (timeLeft <= 0) {
      dispatch(resetCountDownTimer());
      refetch();
    }
  }, [timeLeft]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().valueOf();
      const calculatedTimeLeft = Math.floor(
        countDownStart + COUNT_DOWN_VALUE - currentTime
      );
      if (timeLeft !== calculatedTimeLeft) {
        setTimeLeft(calculatedTimeLeft);
        setDisplayValues(
          calculateTimerDisplayValues(
            calculatedTimeLeft < 0 ? 0 : calculatedTimeLeft
          )
        );
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [countDownStart]);

  return (
    <>
      <div className={styles.clock}>
        <div>{displayValues.minutes}</div>
        <div>:</div>
        <div>{displayValues.seconds}</div>
      </div>
      <div className={styles.label}>{CLOCK_LABEL}</div>
    </>
  );
};

export default Timer;
