import { onlyNumbers } from "../../../assets/ts/onlyNumbers";
import { replaceTemplateCharByValueChar } from "../../../assets/ts/replaceTemplateCharByValueChar";
import { masks } from "../../../data/masks";

const maskCEP = (value: string, hashMask: boolean, keyDown: string): string => {
  //79004-041
  const template = masks.cep;
  const valueWithOnlyNumbers = onlyNumbers(value);
  const formatedValue = replaceTemplateCharByValueChar(
    template,
    valueWithOnlyNumbers,
    hashMask,
    keyDown
  );

  return formatedValue;
};

export { maskCEP };
