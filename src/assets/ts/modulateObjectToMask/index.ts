import { TypesMasks } from "../../../types/globalTypes";

const modulateObjectToMask = (masksObject: TypesMasks) => {
  const arrayForResult = [];

  for (const [key, value] of Object.entries(masksObject)) {
    let object = { maskName: key, properties: value };
    arrayForResult.push(object);
  }

  return arrayForResult;
};

export { modulateObjectToMask };
