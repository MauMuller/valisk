import { onlyNumbers } from "../../../assets/ts/onlyNumbers";
import { replaceZeroCharAtValue } from "../../../assets/ts/replaceZeroCharAtValue";
import { removeZerosBeforeValueForMaskMoney } from "../../../assets/ts/removeZerosBeforeValueForMaskMoney";
import { masks } from "../../../data/masks";

const maskMoney = (value: string, hashMask: boolean) => {
  const valueWithOnlyNumbers = removeZerosBeforeValueForMaskMoney(value);

  const formatedValue = replaceZeroCharAtValue(
    valueWithOnlyNumbers,
    masks.money,
    hashMask
  );

  return formatedValue;
};

export { maskMoney };
