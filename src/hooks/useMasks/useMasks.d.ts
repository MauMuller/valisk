type TypesBasicsProperties = {
  useExplictMask?: boolean;
  inicialValue?: string;
};

interface TypesKeyProperties extends TypesBasicsProperties {
  keyDown?: boolean;
}

interface TypesMasks {
  cpf?: TypesKeyProperties;
  cnpj?: TypesKeyProperties;
  cep?: TypesKeyProperties;
  money?: TypesBasicsProperties;
}

type TypesHooks = [
  value: string,
  setValue: Function,
  isValid: boolean,
  setKey: boolean
];

export { TypesMasks, TypesHooks };
