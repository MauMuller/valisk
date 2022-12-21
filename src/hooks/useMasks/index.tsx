import { filterByInputMasks } from "../../assets/ts/filterByInputMasks";
import { modulateObjectToMask } from "../../assets/ts/modulateObjectToMask";
import { getNameFunctions } from "../../assets/ts/getNameFunctions";

import { useMaskCPF } from "../useMaskCPF";
import { useMaskCNPJ } from "../useMaskCNPJ";
import { useMaskCEP } from "../useMaskCEP";
import { useMaskMoney } from "../useMaskMoney";

import { TypesMasks } from "../useMasks/useMasks";
import { TypesHooks } from "../useMasks/useMasks";

const hooksArray = [useMaskCPF, useMaskCNPJ, useMaskCEP, useMaskMoney];

const useMasks = (objMasks: TypesMasks) => {
  const modulateObjectMask = modulateObjectToMask(objMasks);
  const namesMasks = modulateObjectMask.map((obj) => obj.maskName);
  const hookFiltered = filterByInputMasks(hooksArray, namesMasks);

  const values: string[] = [],
    setValues: Function[] = [],
    isValidValues: boolean[] = [],
    setKeys: Function[] = [];

  hookFiltered.forEach((hooks) => {
    let nameFunction = getNameFunctions(hooks, [7]);
    let maskObjectFiltred = modulateObjectMask.find(
      (obj) => obj.maskName === nameFunction
    );

    let properties = maskObjectFiltred?.properties ?? {};
    let [value, setValue, isValid, setKey]: TypesHooks = hooks(properties);

    values.push(value);
    setValues.push(setValue);
    isValidValues.push(isValid);
    setKeys.push(setKey);
  });

  return { values, setValues, isValidValues, setKeys };
};

export { useMasks };
