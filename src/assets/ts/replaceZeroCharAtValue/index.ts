import setAnMasksCharacter from "../../../data/setAnMasksCharacter";

import { removeZerosBeforeValueForMaskMoney } from "../removeZerosBeforeValueForMaskMoney";
import { firstPartMoney } from "../firstPartMoney";
import { lastPartMoney } from "../lastPartMoney";

const replaceZeroCharAtValue = (
  valueWithOnlyNumbers: string,
  template: string,
  hashMask: boolean
) => {
  const { moneyChar, char } = setAnMasksCharacter;
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
  const valueBeforeComma =
    textTemplate.match(/(\d+(?=\,|\.))/g)?.join("") ?? "";

  const valueBeforeCommaLength = valueBeforeComma.length;
  let valueTemplateForDots = "";

  for (let i = 0; i < valueBeforeCommaLength; i++) {
    valueTemplateForDots += char;

    let templateLength = valueTemplateForDots.length;
    let divisionToInserDots = templateLength > 0 && templateLength % 4 === 0;

    let firstPart = valueTemplateForDots.substring(0, templateLength - 3);
    let lastPart = valueTemplateForDots.substring(
      firstPart.length,
      templateLength
    );

    valueTemplateForDots = divisionToInserDots
      ? firstPart + "." + lastPart
      : valueTemplateForDots;

    valueTemplateForDots = valueTemplateForDots.replace(
      char,
      valueBeforeComma[i]
    );
  }

  const indexOfComma = textTemplate.indexOf(",");
  const valueAfterComma = textTemplate.substring(
    indexOfComma,
    textTemplate.length
  );

  const textValue = firstPartTemplate + valueTemplateForDots + valueAfterComma;

  const digitsValues = removeZerosBeforeValueForMaskMoney(textValue);
  const valueOnlyNumbersAndCifrao = firstPartTemplate + digitsValues;
  const valueWithoutHashMask =
    digitsValues.length <= 2 ? valueOnlyNumbersAndCifrao : textValue;

  return !hashMask ? valueWithoutHashMask : textValue;
};

export { replaceZeroCharAtValue };
