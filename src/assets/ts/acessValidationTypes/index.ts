import ValidationsType from "../../../model/ValidationsType";
import {
  TypesDigits,
  TypesPhones,
  TypesValidation,
} from "../../../modules/InputValidation";

type ValidationsProps = {
  typeValidationCheck: TypesPhones | TypesValidation;
  valueInput: string;
  hashMaskCheck: boolean;
  keyDown: string;

  defaultValue?: string;
  hideValueCheck?: boolean;
  passwordPontencialityCheck?: TypesDigits;
  incrementDDDAndPrefix?: boolean;
};
type ValidationReturn = {
  formatedValue: string;
  isValidateValue: boolean | object;
};

const acessValidationTypes = ({
  incrementDDDAndPrefix,
  typeValidationCheck,
  valueInput,
  defaultValue,
  hashMaskCheck,
  keyDown,
  hideValueCheck,
  passwordPontencialityCheck,
}: ValidationsProps): ValidationReturn => {
  const keyPressed = keyDown ?? "";

  let objValidation = ValidationsType[typeValidationCheck]({
    value: valueInput,
    hashMask: hashMaskCheck,
    typeValidationCheck,
    keyDown: keyPressed,

    normalText: defaultValue,
    incrementDDDAndPrefix,
    hideValue: hideValueCheck,
    passwordPontenciality: passwordPontencialityCheck,
  });

  return objValidation;
};

export { acessValidationTypes };
