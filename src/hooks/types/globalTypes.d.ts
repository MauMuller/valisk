type TypesFunction<K> = (value: K) => void;

type TypesMaskReturn = [
  value: string,
  setValue: TypesFunction<string>,
  isValid: boolean | object,
  setKey: TypesFunction<string>
];

interface TypesValuesFromUseMask {
  inicialValue?: string | number;
  useExplictMask?: true | false;
}

interface TypesInicialObject {
  value: string;
  isValid: boolean | object;
  keyDown: boolean;
}

interface TypeChangeState {
  formatedValue?: string;
  formatedValidate?: boolean | object;
  formatedKeyDown?: boolean;
}

export {
  TypesFunction,
  TypesMaskReturn,
  TypesValuesFromUseMask,
  TypesInicialObject,
  TypeChangeState,
};
