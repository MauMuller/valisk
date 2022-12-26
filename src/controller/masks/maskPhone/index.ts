import { onlyNumbers } from "../../../assets/ts/onlyNumbers";
import { replaceTemplateCharByValueChar } from "../../../assets/ts/replaceTemplateCharByValueChar";

const maskPhone = (
  value: string,
  hashMask: boolean,
  keyDown: boolean,
  template: string
): string => {
  const valueWithOnlyNumbers = onlyNumbers(value);
  const formatedValue = replaceTemplateCharByValueChar(
    template,
    valueWithOnlyNumbers,
    hashMask,
    keyDown
  );

  return formatedValue;
};

export { maskPhone };
