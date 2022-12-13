import ValidationsType from "../../../model/ValidationsType";
import { TypesDigits } from "../../../modules/InputValidation";

type ValidationsProps = {
  typeValidationCheck: string;
  valueInput: string;
  defaultValue?: string;
  hashMaskCheck: boolean;
  keyDown?: string;
  hideValueCheck: boolean;
  passwordPontencialityCheck: TypesDigits;
};
type ValidationReturn = {
  formatedValue: string;
  isValidateValue: boolean | object;
};

const acessValidationTypes = ({
  typeValidationCheck,
  valueInput,
  defaultValue,
  hashMaskCheck,
  keyDown,
  hideValueCheck,
  passwordPontencialityCheck,
}: ValidationsProps): ValidationReturn => {
  const keyPressed = keyDown ?? "";
  const defaultValueCheck = defaultValue ?? valueInput;

  let objValidation = ValidationsType[typeValidationCheck]({
    value: valueInput,
    hashMask: hashMaskCheck,
    keyDown: keyPressed,
    hideValue: hideValueCheck,
    normalText: defaultValueCheck,
    passwordPontenciality: passwordPontencialityCheck,
  });

  return objValidation;
};

export { acessValidationTypes };
