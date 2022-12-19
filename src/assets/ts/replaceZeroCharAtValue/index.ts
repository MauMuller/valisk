import setAnMasksCharacter from "../../../data/setAnMasksCharacter";

import { removeZerosBeforeValueForMaskMoney } from "../removeZerosBeforeValueForMaskMoney";
import { firstPartMoney } from "../firstPartMoney";
import { lastPartMoney } from "../lastPartMoney";

const replaceZeroCharAtValue = (
  valueWithOnlyNumbers: string,
  template: string,
  hashMask: boolean
) => {
  const { moneyChar } = setAnMasksCharacter;
  let cont = 0;

  const firstPartTemplate = firstPartMoney(template);
  const lastPartTemplate = lastPartMoney(template);
  const lastLength = lastPartTemplate.length - 1;

  const valuesRest =
    valueWithOnlyNumbers.length > lastLength
      ? valueWithOnlyNumbers.length - lastLength
      : 0;

  const arrayWithChars = [];

  for (let i = 0; i < valuesRest; i++) {
    arrayWithChars.push(moneyChar);
  }

  const modifiedTemplate =
    firstPartTemplate + arrayWithChars.join("") + lastPartTemplate;

  const reverseTemplate = modifiedTemplate.split("").reverse();
  const reverseValue = valueWithOnlyNumbers.split("").reverse().join("");

  const formatedTemplateArr = reverseTemplate
    .map((value) =>
      value === moneyChar ? reverseValue[cont++] ?? moneyChar : value
    )
    .reverse();

  const textTemplate = formatedTemplateArr.join("");
  const digitsValues = removeZerosBeforeValueForMaskMoney(textTemplate);
  const valueOnlyNumbersAndCifrao = firstPartTemplate + digitsValues;
  const valueWithoutHashMask =
    digitsValues.length <= 2 ? valueOnlyNumbersAndCifrao : textTemplate;

  return !hashMask ? valueWithoutHashMask : textTemplate;
};

export { replaceZeroCharAtValue };
