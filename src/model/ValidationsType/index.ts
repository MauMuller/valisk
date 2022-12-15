import { maskCPF } from "../../controller/masks/maskCPF";
import { maskCNPJ } from "../../controller/masks/maskCNPJ";
import { maskCEP } from "../../controller/masks/maskCEP";
import { maskPhone } from "../../controller/masks/maskPhone";
import { maskFullphone } from "../../controller/masks/maskFullphone";
import { maskMoney } from "../../controller/masks/maskMoney";
import { maskPassword } from "../../controller/masks/maskPassword";

import { isCPF } from "../../controller/validations/isCPF";
import { isCNPJ } from "../../controller/validations/isCNPJ";
import { isCEP } from "../../controller/validations/isCEP";
import { isPhone } from "../../controller/validations/isPhone";
import { isFullphone } from "../../controller/validations/isFullphone";
import { isPassword } from "../../controller/validations/isPassword";

import { TypesDigits } from "../../modules/InputValidation";

type TypesObjectProps = {
  value: string;
  hashMask: boolean;
  keyDown: string;
  hideValue: boolean;
  normalText: string;
  passwordPontenciality: TypesDigits;
};

interface AccessKeys {
  [key: string]: ({
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
  default: ({ value }) => {
    return { formatedValue: value, isValidateValue: true };
  },

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

  phone: ({ value, hashMask, keyDown }) => {
    const formatedValue = maskPhone(value, hashMask, keyDown);
    const isValidateValue = isPhone(formatedValue);

    return { formatedValue, isValidateValue };
  },

  fullphone: ({ value, hashMask, keyDown }) => {
    const formatedValue = maskFullphone(value, hashMask, keyDown);
    const isValidateValue = isFullphone(formatedValue);

    return { formatedValue, isValidateValue };
  },

  money: ({ value }) => {
    const formatedValue = maskMoney(value);
    // console.log(formatedValue);
    return { formatedValue: value, isValidateValue: true };
  },

  password: ({ value, hideValue, passwordPontenciality, normalText }) => {
    const formatedValue = hideValue ? maskPassword(value) : value;
    const isValidateValue = isPassword(normalText, passwordPontenciality);

    return { formatedValue, isValidateValue: isValidateValue };
  },
};

export default ValidationsType;
