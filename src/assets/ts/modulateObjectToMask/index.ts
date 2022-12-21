import {
  TypesMasks,
  TypesMaskObject,
  TypesMasksForKeysObject,
} from "../../../hooks/useMasks/useMasks";

const modulateObjectToMask = (masksObject: TypesMasks) => {
  const arrayForResult = [];
  const keys = Object.keys(masksObject);
  const values = keys.map((keyValue) => {
    let value = masksObject[keyValue];
    return value;
  });

  for (let i = 0; i < keys.length; i++) {
    let object = { maskName: keys[i], properties: values[i] };
    arrayForResult.push(object);
  }

  return arrayForResult;
};

export { modulateObjectToMask };
