export type DetailsHTML = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type DefaultTypes = "controlled" | "uncontrolled";

interface InicialValue<T> {
  name: keyof T;
}

interface ExplictMask {
  explictMask?: boolean;
}

export type ComumProps<T> = InicialValue<T> & ExplictMask;

export interface MoneyProps<T> extends ComumProps<T> {
  typeMoney: "dollar" | "real" | "euro";
  explictSimbol?: boolean;
}

export interface PasswordProps<T> extends InicialValue<T> {
  hideValue?: boolean;
}

type PhoneTypes = "phoneMovel" | "phoneFixo";

export interface PhoneProps<T> extends ComumProps<T> {
  typePhone: PhoneTypes;
  showDDD?: boolean;
  showPrefix?: boolean;
}

type ArrayWithMinTwoItens<T> = T | [T, T, ...T[]];

export interface MaskTypes<T> {
  cpf?: ArrayWithMinTwoItens<ComumProps<T>>;
  cnpj?: ArrayWithMinTwoItens<ComumProps<T>>;
  cep?: ArrayWithMinTwoItens<ComumProps<T>>;
  money?: ArrayWithMinTwoItens<MoneyProps<T>>;
  password?: ArrayWithMinTwoItens<PasswordProps<T>>;
  phone?: ArrayWithMinTwoItens<PhoneProps<T>>;
}

export interface ForceObject<T> {
  inputName: keyof T;
  inputType: DefaultTypes | "react_hook_form";
  dispatchSetValue?: any;
}

export type ForceUpdateParams<T> = ArrayWithMinTwoItens<ForceObject<T>>;

export type GetValuesEvent<T> = (
  func: (data: T) => void
) => (
  evt: React.FormEvent<HTMLFormElement>
) => React.FormEvent<HTMLFormElement>;

export type ReturnType<T> = {
  _masks: (key: keyof T) => DetailsHTML;
  _forceUpdate: (props: ForceUpdateParams<T>) => void;
  _cleanVal: (props: T) => T;
  _getValues: GetValuesEvent<T>;
};

interface InputParams<T> {
  elementInput: HTMLInputElement | null;
  objectToInput: MaskFormated<T>;
  inputName: keyof T;
  dispatchSetValue?: (...props: any) => void;
}

export interface InputTypes<T> {
  controlled: (props: Omit<InputParams<T>, "inputName">) => void;
  react_hook_form: (props: InputParams<T>) => void;
  uncontrolled: (
    props: Omit<InputParams<T>, "dispatchSetValue" | "inputName">
  ) => void;
}

export interface GlobalObject {
  name: any;
  value?: string;
}

export type MaskFormated<T> = { key: keyof MaskTypes<T> } & ComumProps<T> &
  MoneyProps<T> &
  PasswordProps<T> &
  PhoneProps<T>;

type TypesMasks = "cpf" | "cnpj" | "cep" | "password" | "phone" | "money";

export interface GlobalVariables {
  password: Array<GlobalObject>;
}
