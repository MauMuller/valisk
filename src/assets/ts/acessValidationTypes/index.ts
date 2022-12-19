import ValidationsType from "../../../model/ValidationsType";

import { TypesValidation } from "../../../model/ValidationsType";
import { TypesDigits } from "../../../modules/InputPassword";
import { TypesPhones } from "../../../modules/InputPhone";

type ValidationsProps = {
  typeValidationCheck: TypesPhones | TypesValidation;
  valueInput: string;
  hashMaskCheck?: boolean;
  keyDown?: string;

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
  const hashMask = hashMaskCheck ?? false;

  let objValidation = ValidationsType[typeValidationCheck]({
    value: valueInput,
    hashMask,
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
