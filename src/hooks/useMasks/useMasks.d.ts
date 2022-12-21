type TypesBasicsProperties = {
  useExplictMask?: boolean;
  inicialValue?: string;
};
interface TypesMasks {
  cpf?: TypesBasicsProperties;
  cnpj?: TypesBasicsProperties;
  cep?: TypesBasicsProperties;
  money?: TypesBasicsProperties;
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

export { TypesMasks, TypesHooks, TypesMaskObject };
