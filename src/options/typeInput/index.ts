import { InputTypes } from "../../types";
import { masks } from "../masks";

export const typeInput = <T>(): InputTypes<T> => ({
  controlled: ({ dispatchSetValue, objectToInput, elementInput }) => {
    const inputValue = elementInput?.value;

    const formatedValue = elementInput
      ? masks[objectToInput.key]<T>({
          ...objectToInput,
          element: elementInput,
        })
      : inputValue;

    if (dispatchSetValue) dispatchSetValue(formatedValue);
  },
  uncontrolled: ({ elementInput, objectToInput }) => {
    const inputValue = elementInput?.value;

    elementInput
      ? masks[objectToInput.key]<T>({
          ...objectToInput,
          element: elementInput,
        })
      : inputValue;
  },
  react_hook_form: ({
    dispatchSetValue,
    elementInput,
    inputName,
    objectToInput,
  }) => {
    const inputValue = elementInput?.value;

    const formatedValue = elementInput
      ? masks[objectToInput.key]<T>({
          ...objectToInput,
          element: elementInput,
        })
      : inputValue;

    if (dispatchSetValue) dispatchSetValue(inputName, formatedValue);
  },
});
