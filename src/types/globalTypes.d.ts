type TypesFunction<K> = (value: K) => void;

type TypesMaskReturn = [
  value: string,
  setValue: TypesFunction<string>,
  isValid: boolean,
  setKey: TypesFunction<string>
];

type TypesMaskMoneyReturn = [
  value: string,
  setValue: TypesFunction<string>,
  isValid: boolean
];

type TypesPasswordValuesReturn = [value: string, sourceValue: string];

type TypesMaskPasswordReturn = [
  value: TypesPasswordValuesReturn,
  setValue: TypesFunction<string>,
  isValid: TypesDigits
];

type TypesPhones = "phoneMovel" | "phoneFixo";

type TypesValidation =
  | "cpf"
  | "cnpj"
  | "cep"
  | "money"
  | "phone"
  | "fullphone"
  | "password";

type TypesPropertiesArray = [number, string?];

interface TypesDigits {
  specialChars?: TypesPropertiesArray;
  numbers?: TypesPropertiesArray;
  words?: TypesPropertiesArray;
}

interface TypesBasicsProperties {
  inicialValue?: string;
  useExplictMask?: boolean;
}

interface TypesPhoneMask extends TypesBasicsProperties {
  typePhone?: TypesPhones;
  incrementDDDAndPrefix?: boolean;
}

interface TypesPasswordMask {
  passwordPontenciality?: TypesDigits;
  inicialValue?: string;
  hideValue?: boolean;
}
interface TypesInicialObject {
  value: string;
  isValid: boolean | object;
  keyDown: boolean;
}

interface TypesInicialWithoutKey {
  value: string;
  isValid: boolean | TypesDigits;
}

interface TypesInicialPassword extends TypesInicialWithoutKey {
  sourceValue: string;
}

interface TypesMasks {
  cpf?: TypesBasicsProperties;
  cnpj?: TypesBasicsProperties;
  cep?: TypesBasicsProperties;
  money?: TypesBasicsProperties;
  phone?: TypesPhoneMask;
  password?: TypesPasswordMask;
}
interface TypeChangeState {
  formatedValue?: string;
  formatedValidate?: boolean | object;
  formatedKeyDown?: boolean;
}

type TypesChangeStateProperties = Omit<TypeChangeState, "formatedValidate">;

interface TypesChangeBoolean extends TypesChangeStateProperties {
  formatedValidate?: boolean;
}
interface TypesChangeObject extends TypesChangeStateProperties {
  formatedValidate?: TypesDigits;
}

interface TypesChangePasswordState {
  formatedSourceValue?: string;
  formatedValue?: string;
  formatedValidate?: TypesDigits;
}
interface TypesMaskObject {
  maskName: string;
  properties: TypesBasicsProperties;
}

type TypesHooks = [
  value: string | TypesPasswordValuesReturn,
  setValue: Function,
  isValid: boolean,
  setKey?: Function
];

export {};

export {
  TypesChangePasswordState,
  TypesFunction,
  TypesMaskReturn,
  TypesBasicsProperties,
  TypesInicialObject,
  TypeChangeState,
  TypesMasks,
  TypesHooks,
  TypesPhones,
  TypesMaskObject,
  TypesDigits,
  TypesValidation,
  TypesPhoneMask,
  TypesPasswordMask,
  TypesInicialPassword,
  TypesMaskPasswordReturn,
  TypesMaskMoneyReturn,
  TypesPasswordValuesReturn,
  TypesInicialWithoutKey,
  TypesChangeBoolean,
  TypesChangeObject,
};
