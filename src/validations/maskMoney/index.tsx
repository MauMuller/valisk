import { onlyNumbers } from "../../functions/onlyNumbers";
import { coins } from "../../options/coins";
import { MoneyProps } from "../../types";

const maskMoney = <T,>(
  typeMoney: MoneyProps<T>["typeMoney"],
  explictSimbol: boolean,
  value: string,
  explictMask: boolean
) => {
  const officialObjectMoney = coins[typeMoney];
  const {
    symbol,
    inicial: templateByType,
    numberSeparator,
  } = officialObjectMoney;

  const numbersValues = onlyNumbers(value);
  const indexFirstNonZeroValue = numbersValues.search(/([1-9])/);
  const getValueWithFirstValueNonZero =
    indexFirstNonZeroValue != -1
      ? numbersValues.substring(indexFirstNonZeroValue, numbersValues.length)
      : "";

  const valueAsArray = getValueWithFirstValueNonZero.split("").reverse();
  const templateAsArrayReversed = templateByType.split("").reverse();

  const getValueAsArray = templateAsArrayReversed.map((letter) => {
    const firstChar = valueAsArray.at(0) ?? "0";
    const isLetterAnNumber = /(\d)/.test(letter);
    const formatedLetter = letter.replace(/\d/, firstChar);
    if (isLetterAnNumber) valueAsArray.shift();
    return formatedLetter;
  });

  const valueWithSeparators = valueAsArray.map((value, indValue) =>
    (indValue + 1) % 3 === 0 ? value + numberSeparator : value
  );

  if (valueAsArray.length > 0) getValueAsArray.push(...valueWithSeparators);

  const valueWithMask = getValueAsArray.reverse().join("");
  const indexFirstNonZerovalueWithMask = valueWithMask.search(/([1-9])/);
  const valueWithoutMask =
    indexFirstNonZerovalueWithMask != -1
      ? valueWithMask.slice(
          indexFirstNonZerovalueWithMask,
          valueWithMask.length
        )
      : "";

  const formatedValue = explictMask ? valueWithMask : valueWithoutMask;
  const valueWithSymbol = `${symbol} ${formatedValue}`;

  return explictSimbol ? valueWithSymbol : formatedValue;
};

export { maskMoney };
