import { ComumProps, PasswordProps, MoneyProps, PhoneProps } from "../../types";

import { masksTemplate } from "../../templates/maskTemplate";
import { maskWithoutHash } from "../../validations/maskWithoutHash";
import { maskWithHash } from "../../validations/maskWithHash";
import { maskMoney } from "../../validations/maskMoney";
import { maskPhone } from "../../validations/maskPhone";

interface InputToMasks {
  element: HTMLInputElement;
}

type ComumPropsMask<T> = ComumProps<T> & InputToMasks;
type PasswordPropsMask<T> = PasswordProps<T> & InputToMasks;
type PhonePropsMask<T> = PhoneProps<T> & InputToMasks;
type MoneyPropsMask<T> = MoneyProps<T> & InputToMasks;

export const masks = {
  cep: <T>({ explictMask, element }: ComumPropsMask<T>) => {
    const template = masksTemplate["cep"];
    const value = element.value;

    const valueWithout = maskWithoutHash(template, value);
    const valueWith = maskWithHash(template, value);

    const finalValue = explictMask ? valueWith : valueWithout;
    element.value = finalValue;

    return finalValue;
  },

  cpf: <T>({ explictMask, element }: ComumPropsMask<T>) => {
    const template = masksTemplate["cpf"];
    const value = element.value;

    const valueWithout = maskWithoutHash(template, value);
    const valueWith = maskWithHash(template, value);

    const finalValue = explictMask ? valueWith : valueWithout;
    element.value = finalValue;

    return finalValue;
  },

  cnpj: <T>({ explictMask, element }: ComumPropsMask<T>) => {
    const template = masksTemplate["cnpj"];
    const value = element.value;

    const valueWithout = maskWithoutHash(template, value);
    const valueWith = maskWithHash(template, value);

    const finalValue = explictMask ? valueWith : valueWithout;
    element.value = finalValue;

    return finalValue;
  },

  password: <T>({ hideValue, element }: PasswordPropsMask<T>) => {
    element.type = hideValue ? "password" : "text";
    return element.value;
  },

  phone: <T>({
    showDDD,
    showPrefix,
    typePhone,
    explictMask,
    element,
  }: PhonePropsMask<T>) => {
    const value = element.value;
    const template = masksTemplate[typePhone];

    const finalValue = maskPhone(
      template,
      showDDD ?? false,
      showPrefix ?? false,
      explictMask ?? false,
      value
    );

    element.value = finalValue;
    return finalValue;
  },

  money: <T>({
    explictMask,
    explictSimbol,
    typeMoney,
    element,
  }: MoneyPropsMask<T>) => {
    const value = element.value;

    const finalValue = maskMoney(
      typeMoney,
      explictSimbol ?? false,
      value,
      explictMask ?? false
    );

    element.value = finalValue;
    return finalValue;
  },
};
