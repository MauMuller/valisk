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

import { TypesDigits } from "../../modules/InputPassaword";
import { TypesPhones } from "../../modules/InputPhone";

export type TypesValidation =
  | "cpf"
  | "cnpj"
  | "cep"
  | "money"
  | "phone"
  | "fullphone"
  | "password";

type TypesObjectProps = {
  typeValidationCheck: TypesPhones | TypesValidation;
  value: string;
  hashMask: boolean;
  keyDown: string;

  incrementDDDAndPrefix?: boolean;
  hideValue?: boolean;
  normalText?: string;
  passwordPontenciality?: TypesDigits;
};

interface AccessKeys {
  [key: string]: ({
    typeValidationCheck,
    value,
    hashMask,
    keyDown,
    hideValue,
    normalText,
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

  phoneMovel: ({ value, hashMask, keyDown, incrementDDDAndPrefix }) => {
    const maskMovel = masks.phoneMovel;
    const checkIncrementDDDandPrefix = incrementDDDAndPrefix ?? false;

    const template = checkIncrementDDDandPrefix
      ? usePrefixAndDDDToPhone(maskMovel)
      : maskMovel;

    const formatedValue = maskPhone(value, hashMask, keyDown, template);
    const isValidateValue = isPhone(formatedValue);

    return { formatedValue, isValidateValue };
  },

  phoneFixo: ({ value, hashMask, keyDown, incrementDDDAndPrefix }) => {
    const maskFixo = masks.phoneFixo;
    const checkIncrementDDDandPrefix = incrementDDDAndPrefix ?? false;

    const template = checkIncrementDDDandPrefix
      ? usePrefixAndDDDToPhone(maskFixo)
      : maskFixo;

    const formatedValue = maskPhone(value, hashMask, keyDown, template);
    const isValidateValue = isPhone(formatedValue);

    return { formatedValue, isValidateValue };
  },

  money: ({ value, hashMask }) => {
    const formatedValue = maskMoney(value, hashMask);
    return { formatedValue, isValidateValue: true };
  },

  password: ({ value, hideValue, passwordPontenciality, normalText }) => {
    const formatedValue = hideValue ? maskPassword(value) : value;
    const isValidateValue = isPassword(
      normalText,
      passwordPontenciality,
      value
    );

    return { formatedValue, isValidateValue };
  },
};

export default ValidationsType;
