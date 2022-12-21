type TypesFunction<K> = (value: K) => void;

type TypesBasicReturn = [
  value: string,
  setValue: TypesFunction<string>,
  isValid: boolean | object,
  setKey: TypesFunction<string>
];

type TypesMaskReturn = TypesBasicReturn;

type TypesMaskPasswordReturn = [
  value: string,
  setValue: TypesFunction<string>,
  isValid: boolean | object,
  setKey: TypesFunction<string>,
  sourceValue: string
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
interface TypesInicialPassword extends TypesInicialObject {
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

interface TypesChangePasswordState extends TypeChangeState {
  sourceValue?: string;
}
interface TypesMaskObject {
  maskName: string;
  properties: TypesBasicsProperties;
}

type TypesHooks = [
  value: string,
  setValue: Function,
  isValid: boolean,
  setKey: Function
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
};
