import { BIGGEST_NUMBER, MAX_COUNT_SELECTED, MINUTE, SECOND } from "../const";

export const checkSelectedNumber = (selected: number[], id: number) =>
  selected.some((el) => el === id);

export const checkSelectedComment = (selectedNumbers: number[], id: number) =>
  selectedNumbers.length === id;

export const getRandomNumbers = () => {
  const set = new Set();
  while (set.size < MAX_COUNT_SELECTED) {
    set.add(Math.floor(Math.random() * BIGGEST_NUMBER) + 1);
  }
  return Array.from(set) as number[];
};

const priceFormatter = new Intl.NumberFormat("bg-BG", {
  style: "currency",
  currency: "BGN",
});

export const formatPrice = (num: string) =>
  priceFormatter.format(parseFloat(num));

export const formatFloat = (num: string) => parseFloat(Number(num).toFixed(2));

export const calculateTimerDisplayValues = (time: number) => {
  const minutes = Math.floor(time / MINUTE);
  const seconds = Math.floor((time - minutes * MINUTE) / SECOND);

  return {
    minutes: `0${minutes}`,
    seconds: `${seconds.toString().length < 2 ? "0" : ""}${seconds}`,
  };
};
