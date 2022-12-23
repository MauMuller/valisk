import { maskCPF } from "../../controller/masks/maskCPF";
import { maskCNPJ } from "../../controller/masks/maskCNPJ";
import { maskCEP } from "../../controller/masks/maskCEP";
import { maskPhone } from "../../controller/masks/maskPhone";
import { maskMoney } from "../../controller/masks/maskMoney";
import { maskPassword } from "../../controller/masks/maskPassword";

import { isCPF } from "../../controller/validations/isCPF";
import { isCNPJ } from "../../controller/validations/isCNPJ";
import { isCEP } from "../../controller/validations/isCEP";
import { isPhone } from "../../controller/validations/isPhone";
import { isPassword } from "../../controller/validations/isPassword";

import { masks } from "../../data/masks";
import { usePrefixAndDDDToPhone } from "../../assets/ts/usePrefixAndDDDToPhone";

import {
  TypesDigits,
  TypesPhones,
  TypesValidation,
} from "../../types/globalTypes";

type TypesObjectProps = {
  typeValidationCheck: TypesPhones | TypesValidation;
  value: string;
  hashMask: boolean;
  keyDown: boolean;

  incrementDDDAndPrefix?: boolean;
  hideValue?: boolean;
  sourceValue?: string;
  passwordPontenciality?: TypesDigits;
};

interface AccessKeys {
  [key: string]: ({
    typeValidationCheck,
    value,
    hashMask,
    keyDown,
    hideValue,
    sourceValue,
  }: TypesObjectProps) => {
    formatedValue: string;
    isValidateValue: boolean | object;
  };
}

const ValidationsType: AccessKeys = {
  cpf: ({ value, hashMask, keyDown }) => {
    const formatedValue = maskCPF(value, hashMask, keyDown);
    const isValidateValue = isCPF(formatedValue);

    return { formatedValue, isValidateValue };
  },

  cnpj: ({ value, hashMask, keyDown }) => {
    const formatedValue = maskCNPJ(value, hashMask, keyDown);
    const isValidateValue = isCNPJ(formatedValue);

    return { formatedValue, isValidateValue };
  },

  cep: ({ value, hashMask, keyDown }) => {
    const formatedValue = maskCEP(value, hashMask, keyDown);
    const isValidateValue = isCEP(formatedValue);

    return { formatedValue, isValidateValue };
  },

  phoneMovel: ({
    value,
    hashMask,
    keyDown,
    incrementDDDAndPrefix,
    typeValidationCheck,
  }) => {
    const maskMovel = masks.phoneMovel;
    const checkIncrementDDDandPrefix = incrementDDDAndPrefix ?? false;

    const template = checkIncrementDDDandPrefix
      ? usePrefixAndDDDToPhone(maskMovel)
      : maskMovel;

    const formatedValue = maskPhone(value, hashMask, keyDown, template);
    const isValidateValue = isPhone(formatedValue, typeValidationCheck);

    return { formatedValue, isValidateValue };
  },

  phoneFixo: ({
    value,
    hashMask,
    keyDown,
    incrementDDDAndPrefix,
    typeValidationCheck,
  }) => {
    const maskFixo = masks.phoneFixo;
    const checkIncrementDDDandPrefix = incrementDDDAndPrefix ?? false;

    const template = checkIncrementDDDandPrefix
      ? usePrefixAndDDDToPhone(maskFixo)
      : maskFixo;

    const formatedValue = maskPhone(value, hashMask, keyDown, template);
    const isValidateValue = isPhone(formatedValue, typeValidationCheck);

    return { formatedValue, isValidateValue };
  },

  money: ({ value, hashMask }) => {
    const formatedValue = maskMoney(value, hashMask);
    return { formatedValue, isValidateValue: true };
  },

  password: ({ value, hideValue, passwordPontenciality, sourceValue }) => {
    const formatedValue = hideValue ? maskPassword(value) : value;
    const isValidateValue = isPassword(
      sourceValue,
      passwordPontenciality,
      value
    );

    return { formatedValue, isValidateValue };
  },
};

export default ValidationsType;
