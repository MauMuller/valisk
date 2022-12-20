import { modulateObjectToMask } from "../modulateObjectToMask";
import { TypesMasks } from "../../../hooks/useMasks/useMasks";

const filterByInputMasks = (
  hooksArray: Array<Function>,
  masksObject: TypesMasks
) => {
  const modulateObjectMask = modulateObjectToMask(masksObject);

  return hooksArray.filter((hooks) => {
    let nameHook = hooks.name.substring(7).toLowerCase();

    console.log(masksArray);
    return masksArray.includes(nameHook);
  });
};

export { filterByInputMasks };
