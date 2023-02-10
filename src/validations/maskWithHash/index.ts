import { masksTemplate } from "../../templates/maskTemplate";
import { onlyNumbers } from "../../functions/onlyNumbers";

export const maskWithHash = (template: string, value: string) => {
  const { char } = masksTemplate;

  const numbersValue = onlyNumbers(value);
  const templateLikeArray = template.split("");
  const valueLikeArray = numbersValue.split("");

  const getValueAsArray = templateLikeArray.map((letter) => {
    const firstChar = valueLikeArray.at(0) ?? "";
    const isFirstCharAnNumber = /(\d)/g.test(firstChar);
    const charToInsert = isFirstCharAnNumber ? firstChar : letter;
    const formatedLetter = letter.replace(char, charToInsert);
    if (letter === char) valueLikeArray.shift();
    return formatedLetter;
  });

  const valueAsString = getValueAsArray.join("");

  const lengthToStartToRemove = valueAsString.length - value.length;
  const valueWithMaskAsArray = valueAsString.split("") ?? [""];
  const indexOfFirstNumber = valueWithMaskAsArray.findLastIndex((letter) =>
    /(\d)/g.test(letter)
  );
  const valueWithRemovedCharAsArray = valueWithMaskAsArray.map(
    (letter, indLetter) =>
      lengthToStartToRemove === 1 && indLetter === indexOfFirstNumber
        ? letter.replace(letter, char)
        : letter
  );

  return valueWithRemovedCharAsArray.join("");
};
