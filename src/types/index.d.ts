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

export interface ValiskEntryType<T> {
  cpf?: ArrayWithMinTwoItens<ComumProps<T>>;
  cnpj?: ArrayWithMinTwoItens<ComumProps<T>>;
  cep?: ArrayWithMinTwoItens<ComumProps<T>>;
  money?: ArrayWithMinTwoItens<MoneyProps<T>>;
  password?: ArrayWithMinTwoItens<PasswordProps<T>>;
  phone?: ArrayWithMinTwoItens<PhoneProps<T>>;
}

interface ListWithoutNameProp<T> {
  cpf?: Omit<ComumProps<T>, "name">;
  cnpj?: Omit<ComumProps<T>, "name">;
  cep?: Omit<ComumProps<T>, "name">;
  money?: Omit<MoneyProps<T>, "name">;
  password?: Omit<PasswordProps<T>, "name">;
  phone?: Omit<PhoneProps<T>, "name">;
}
export interface ConfigEntryType<T> {
  name: keyof T;
  props?: ListWithoutNameProp<T>;
}

export interface ForceObject<T> {
  inputName: keyof T;
  inputType: DefaultTypes | "react_hook_form";
  dispatchSetValue?: any;
}

export type ForceUpdateEntryType<T> = ArrayWithMinTwoItens<ForceObject<T>>;

export type GetValuesType<T> = (
  func: (data: T) => void
) => (
  evt: React.FormEvent<HTMLFormElement>
) => React.FormEvent<HTMLFormElement>;

export type MasksType<T> = (key: keyof T) => DetailsHTML;
export type ForceUpdateType<T> = (props: ForceUpdateEntryType<T>) => void;
export type CleanValuesType<T> = (props: T) => T;

export type ReturnValisk<T> = {
  _masks: MasksType<T>;
  _forceUpdate: ForceUpdateType<T>;
  _cleanValues: CleanValuesType<T>;
  _getValues: GetValuesType<T>;
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

export type MaskFormated<T> = {
  key: keyof ValiskEntryType<T>;
} & ComumProps<T> &
  MoneyProps<T> &
  PasswordProps<T> &
  PhoneProps<T>;

export interface GlobalVariables {
  password: Array<GlobalObject>;
}
