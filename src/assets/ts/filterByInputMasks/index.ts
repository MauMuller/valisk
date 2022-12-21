import { getNameFunctions } from "../getNameFunctions";

const filterByInputMasks = (
  hooksArray: Array<Function>,
  masksNames: string[]
) => {
  return hooksArray.filter((hooks) => {
    let nameHook = getNameFunctions(hooks, [7]);
    return masksNames.includes(nameHook);
  });
};

export { filterByInputMasks };
