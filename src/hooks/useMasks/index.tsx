import { filterByInputMasks } from "../../assets/ts/filterByInputMasks";
import { modulateObjectToMask } from "../../assets/ts/modulateObjectToMask";
import { getNameFunctions } from "../../assets/ts/getNameFunctions";

import {
  TypesMasks,
  TypesHooks,
  TypesPasswordValuesReturn,
  TypesDigits,
} from "../../types/globalTypes";

const useMasks = (objMasks: TypesMasks) => {
  const modulateObjectMask = modulateObjectToMask(objMasks);

  const namesMasks = modulateObjectMask.map((obj) =>
    obj.maskName.toLowerCase()
  );

  const hookFiltered = filterByInputMasks(namesMasks);

  const values: Array<string | TypesPasswordValuesReturn> = [],
    setValues: Function[] = [],
    areValidValues: Array<boolean | TypesDigits> = [],
    setKeys: Array<Function | undefined> = [];

  hookFiltered.forEach((hooks) => {
    const nameFunction = getNameFunctions(hooks);
    const maskObjectFiltred = modulateObjectMask.find(
      (obj) => obj.maskName === nameFunction
    );

    const properties = maskObjectFiltred?.properties ?? {};
    const [value, setValue, isValid, setKey]: TypesHooks = hooks(properties);

    values.push(value);
    setValues.push(setValue);
    areValidValues.push(isValid);
    setKeys.push(setKey);
  });

  return { values, setValues, areValidValues, setKeys };
};

export { useMasks };
