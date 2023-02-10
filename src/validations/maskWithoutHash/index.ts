import { masksTemplate } from "../../templates/maskTemplate";
import { onlyNumbers } from "../../functions/onlyNumbers";

export const maskWithoutHash = (template: string, value: string) => {
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

  const lastNumberIndex = getValueAsArray.findLastIndex((letter) =>
    /(\d)/g.test(letter)
  );

  return getValueAsArray.slice(0, lastNumberIndex + 1).join("");
};
