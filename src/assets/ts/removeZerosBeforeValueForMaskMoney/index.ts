import { onlyNumbers } from "../onlyNumbers";

const removeZerosBeforeValueForMaskMoney = (value: string) => {
  const firstValueNotBeZero = value.search(/[1-9]/);
  const valuesToCapture =
    firstValueNotBeZero === -1
      ? ""
      : value.substring(firstValueNotBeZero, value.length);

  return onlyNumbers(valuesToCapture);
};

export { removeZerosBeforeValueForMaskMoney };
