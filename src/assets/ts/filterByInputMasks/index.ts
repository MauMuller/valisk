import { getNameFunctions } from "../getNameFunctions";
import { reduceArraysToUniqueArray } from "../reduceArraysToUniqueArray";

import hooksArray from "../../../lib/index";

const filterByInputMasks = (masksNames: string[]) => {
  const functionsOrdened = masksNames.map((nameMask) =>
    hooksArray.filter((hook) => getNameFunctions(hook) === nameMask)
  );

  return reduceArraysToUniqueArray(functionsOrdened);
};

export { filterByInputMasks };
