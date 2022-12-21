import ValidationsType from "../../../model/ValidationsType";

import {
  TypesValidation,
  TypesPhones,
  TypesDigits,
} from "../../../hooks/types/globalTypes";

interface ValidationsProps {
  typeValidationCheck: TypesPhones | TypesValidation;
  valueInput: string;
  hashMaskCheck?: boolean;
  keyDown?: boolean;
  defaultValue?: string;
  hideValueCheck?: boolean;
  passwordPontencialityCheck?: TypesDigits;
  incrementDDDAndPrefix?: boolean;
}
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
  const keyPressed = keyDown ?? false;
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
