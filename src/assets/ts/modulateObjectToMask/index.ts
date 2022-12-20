import { TypesMasks } from "../../../hooks/useMasks/useMasks";

const modulateObjectToMask = (masksObject: TypesMasks) => {
  const keyAndValue = Object.entries(masksObject);
  const arrayToInsert = [];

  for (const [key, value] of keyAndValue) {
    let object = { maskName: key, properties: value };
    arrayToInsert.push(object);
  }

  console.log(arrayToInsert);
};

export { modulateObjectToMask };
