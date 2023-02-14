import {
  MoneyProps,
  PasswordProps,
  PhoneProps,
  ComumProps,
  MaskTypesParams,
} from "../../types";

export const defaultProps = <T>(keyMask: keyof MaskTypesParams<T>) => {
  const explictMask = false;
  const name = "" as keyof T;

  const comumProps: ComumProps<T> = {
    explictMask,
    name,
  };
  const moneyProps: MoneyProps<T> = {
    ...comumProps,
    typeMoney: "real",
    explictMask: false,
    explictSimbol: false,
  };
  const passwordProps: PasswordProps<T> = { ...comumProps, hideValue: true };

  const phoneProps: PhoneProps<T> = {
    ...comumProps,
    showDDD: false,
    showPrefix: false,
    explictMask: false,
    typePhone: "phoneMovel",
  };

  switch (keyMask) {
    case "cep":
    case "cnpj":
    case "cpf":
      return comumProps;

    case "money":
      return moneyProps;

    case "password":
      return passwordProps;

    case "phone":
      return phoneProps;
  }
};
