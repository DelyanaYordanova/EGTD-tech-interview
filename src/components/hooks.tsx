import { type RootState, useAppSelector } from "../store";
import { NumberState } from "../types";
import { checkSelectedComment, checkSelectedNumber } from "./helpers";

export const useGetNumberState = () => {
  const selectedNumbers = useAppSelector(
    (state: RootState) => state.numbers.selectedNumbers
  );
  const isMaxCountSelected = useAppSelector(
    (state: RootState) => state.numbers.maxCountSelected
  );

  return (id: number) => {
    const isSelected = checkSelectedNumber(selectedNumbers, id);

    return isSelected
      ? NumberState.Selected
      : isMaxCountSelected
      ? NumberState.Inactive
      : NumberState.Active;
  };
};

export const useCheckIsCommentSelected = () => {
  const selectedNumbers = useAppSelector(
    (state: RootState) => state.numbers.selectedNumbers
  );

  return (id: number) => checkSelectedComment(selectedNumbers, id);
};
