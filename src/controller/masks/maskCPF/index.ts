import { onlyNumbers } from "../../../assets/ts/onlyNumbers";
import { replaceTemplateCharByValueChar } from "../../../assets/ts/replaceTemplateCharByValueChar";
import { masks } from "../../../data/masks";

const maskCPF = (value: string, hashMask: boolean, keyDown: string): string => {
  const template = masks.cpf;
  const valueWithOnlyNumbers = onlyNumbers(value);
  const formatedValue = replaceTemplateCharByValueChar(
    template,
    valueWithOnlyNumbers,
    hashMask,
    keyDown
  );

  return formatedValue;
};

export { maskCPF };
