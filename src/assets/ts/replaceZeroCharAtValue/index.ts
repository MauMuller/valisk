import setAnMasksCharacter from "../../../data/setAnMasksCharacter";
import { firstPartMoney } from "../firstPartMoney";
import { lastPartMoney } from "../lastPartMoney";

const replaceZeroCharAtValue = (
  value: string,
  template: string,
  hashMask: boolean
) => {
  const { moneyChar } = setAnMasksCharacter;
  let cont = 0;

  const firstPartTemplate = firstPartMoney(template);
  const lastPartTemplate = lastPartMoney(template);
  const lastLength = lastPartTemplate.length - 1;

  const valuesRest = value.length > lastLength ? value.length - lastLength : 0;
  const arrayWithChars = [];

  for (let i = 0; i < valuesRest; i++) {
    arrayWithChars.push(moneyChar);
  }

  const modifiedTemplate =
    firstPartTemplate + arrayWithChars.join("") + lastPartTemplate;

  const reverseTemplate = modifiedTemplate.split("").reverse();
  const reverseValue = value.split("").reverse().join("");

  const formatedTemplateArr = reverseTemplate
    .map((value) =>
      value === moneyChar ? reverseValue[cont++] ?? moneyChar : value
    )
    .reverse();

  const textTemplate = formatedTemplateArr.join("");
  const lastPartFormatedTemplate = lastPartMoney(textTemplate);
  const existZeroChar = lastPartFormatedTemplate.search(moneyChar) != -1;
  const valueWithoutHashMask = (
    existZeroChar ? textTemplate.replace(",", moneyChar) : textTemplate
  ).replaceAll(moneyChar, "");

  return !hashMask ? valueWithoutHashMask : textTemplate;
};

export { replaceZeroCharAtValue };
