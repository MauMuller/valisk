import { onlyNumbers } from "../../../assets/ts/onlyNumbers";
import { replaceValueForLastsTemplate } from "../../../assets/ts/replaceValueForLastsTemplate";
import { masks } from "../../../data/masks";

const maskMoney = (value: string, keyDown: string) => {
  console.log(value);
  const valueWithOnlyNumbers = onlyNumbers(value);
  const valueLimited = valueWithOnlyNumbers.substring(
    valueWithOnlyNumbers.length - 1
  );

  const formatedValue = replaceValueForLastsTemplate(valueLimited, masks.money);

  return formatedValue;
};

export { maskMoney };
