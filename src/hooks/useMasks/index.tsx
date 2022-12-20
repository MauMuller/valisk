import { filterByInputMasks } from "../../assets/ts/filterByInputMasks";

import { useMaskCPF } from "../useMaskCPF";
import { useMaskCNPJ } from "../useMaskCNPJ";
import { useMaskCEP } from "../useMaskCEP";
import { useMaskMoney } from "../useMaskMoney";

import { TypesMasks } from "../useMasks/useMasks";
import { TypesHooks } from "../useMasks/useMasks";

const hooksArray = [useMaskCPF, useMaskCNPJ, useMaskCEP, useMaskMoney];

const useMasks = (objMasks: TypesMasks) => {
  const hookFiltered = filterByInputMasks(hooksArray, objMasks);

  const values: string[] = [],
    setValues: Function[] = [],
    isValidValues: boolean[] = [],
    setKeys: boolean[] = [];

  hookFiltered.forEach((hooks) => {
    let [value, setValue, isValid, setKey]: TypesHooks = hooks({});
    values.push(value);
    setValues.push(setValue);
    isValidValues.push(isValid);
    setKeys.push(setKey);
  });

  return { values, setValues, isValidValues, setKeys };
};

export { useMasks };
