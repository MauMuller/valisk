import { onlyNumbers } from "../../../assets/ts/onlyNumbers";
import { replaceTemplateCharByValueChar } from "../../../assets/ts/replaceTemplateCharByValueChar";
import { masks } from "../../../data/masks";

const maskCNPJ = (value: string, hashMask: boolean, keyDown: boolean) => {
  const template = masks.cnpj;
  const valueWithOnlyNumbers = onlyNumbers(value);
  const formatedValue = replaceTemplateCharByValueChar(
    template,
    valueWithOnlyNumbers,
    hashMask,
    keyDown
  );

  return formatedValue;
};

export { maskCNPJ };
