import { onlyNumbers } from "../../../assets/ts/onlyNumbers";
import { replaceZeroCharAtValue } from "../../../assets/ts/replaceZeroCharAtValue";
import { masks } from "../../../data/masks";

const maskMoney = (value: string, hashMask: boolean) => {
  const valueWithOnlyNumbers = onlyNumbers(value);

  const formatedValue = replaceZeroCharAtValue(
    valueWithOnlyNumbers,
    masks.money,
    hashMask
  );

  return formatedValue;
};

export { maskMoney };
