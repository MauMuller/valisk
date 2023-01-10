import {
  TypesMasks,
  TypesArrayWithHooks,
  TypesArrayWithReturns,
} from "../../../types/globalTypes";

const modulateObjectToMask = (masksObject: TypesMasks) => {
  const arrayForResult: TypesArrayWithHooks = [];

  for (const [key, value] of Object.entries(masksObject)) {
    const valueWithType: TypesArrayWithReturns = value;
    let object = { maskName: key, properties: valueWithType };
    arrayForResult.push(object);
  }

  return arrayForResult;
};

export { modulateObjectToMask };
