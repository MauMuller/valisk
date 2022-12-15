import { onlyNumbers } from "../../../assets/ts/onlyNumbers";
import { replaceValueToMask } from "../../../assets/ts/replaceValueToMask";
import { replaceValueForLastsTemplate } from "../../../assets/ts/replaceValueForLastsTemplate";
import { masks } from "../../../data/masks";

const maskMoney = (value: string) => {
  let stringAuxiliar = replaceValueToMask(masks.money);
  const valueWithOnlyNumbers = onlyNumbers(value);
  const formatedValue = replaceValueForLastsTemplate(
    valueWithOnlyNumbers,
    stringAuxiliar
  );
};

export { maskMoney };
