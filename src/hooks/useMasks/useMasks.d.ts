type TypesBasicsProperties = {
  useExplictMask?: boolean;
  inicialValue?: string;
};

type TypesStringWithOption = "cpf" | "cnpj" | "cep" | "money";

interface TypesMasks {
  cpf?: TypesBasicsProperties;
  cnpj?: TypesBasicsProperties;
  cep?: TypesBasicsProperties;
  money?: TypesBasicsProperties;
}

interface TypesMasksForKeysObject {
  [key?: string]: TypesKeyProperties | TypesBasicsProperties;
}

interface TypesMaskObject {
  maskName: string;
  properties: object;
}

type TypesHooks = [
  value: string,
  setValue: Function,
  isValid: boolean,
  setKey: Function
];

export { TypesMasks, TypesHooks, TypesMaskObject, TypesMasksForKeysObject };
