import React from "react";

import {
  ValiskEntryType,
  ReturnValisk,
  MasksType,
  ForceUpdateEntryType,
  ForceObject,
  PhoneTypes,
  GetValuesType,
} from "../../types";

import { defaultProps } from "../../templates/defaultProps";
import { getObjectToInput } from "../../functions/getObjectToInput";
import { cleanValues } from "../../functions/cleanValues";
import { masks } from "../../options/masks";
import { typeInput } from "../../options/typeInput";

function useValisk<T>(maskValidation: ValiskEntryType<T>): ReturnValisk<T> {
  const keysMask = Object.keys(maskValidation);

  const formatedMaskValidation = keysMask.flatMap((key) => {
    const keyMask = key as keyof ValiskEntryType<T>;
    const arrayByKey = [maskValidation[keyMask]].flat();

    return arrayByKey?.map((obj) => {
      const defaultPropsObj = defaultProps<T>(keyMask);
      return { key: keyMask, ...defaultPropsObj, ...obj };
    });
  });

  const _masks: MasksType<T> = (nameInput: keyof T) => {
    const objectToInput = getObjectToInput<T>(
      formatedMaskValidation,
      nameInput
    );

    return {
      onInput: (evt: React.FormEvent<HTMLInputElement>) => {
        const valueInput = evt.currentTarget.value;
        const elementInput = evt.currentTarget;

        if (!objectToInput) return;

        elementInput
          ? masks[objectToInput.key]<T>({
              ...objectToInput,
              element: evt.currentTarget,
            })
          : valueInput;
      },
      name: String(nameInput) ?? "",
    };
  };

  const _getValues: GetValuesType<T> = (func) => (evt) => {
    evt.preventDefault();

    const allInputs = [...(evt.target as HTMLFormElement).children].filter(
      (element) => element.hasAttribute("name")
    ) as HTMLInputElement[];

    const objectWithAllKeys = allInputs.reduce(
      (prev, curr) => ({ ...prev, [curr.name]: curr.value }),
      {}
    );

    func(objectWithAllKeys as T);
    return evt;
  };

  const _cleanValues = (props: T) => {
    const nameInputAndTypeMaskArr = formatedMaskValidation.map((obj: any) => ({
      mask:
        obj.key === "phone"
          ? (obj.typePhone as PhoneTypes)
          : (obj.key as Omit<keyof T, "phone">),
      inputName: obj.name as keyof T,
    }));

    return cleanValues<T>(nameInputAndTypeMaskArr, props) as T;
  };

  const _forceUpdate = (props: ForceUpdateEntryType<T>): void => {
    const arrayWithUpdates: Array<ForceObject<T>> = [props].flat();

    arrayWithUpdates.forEach((obj) => {
      const { inputName, inputType, dispatchSetValue } = obj;

      const objectToInput = getObjectToInput<T>(
        formatedMaskValidation,
        inputName
      );

      const elementInput = document.querySelector<HTMLInputElement>(
        `input[name="${String(inputName)}"]`
      );

      const updateInputConfig = {
        elementInput,
        inputName,
        objectToInput,
        dispatchSetValue,
      };

      if (objectToInput) typeInput<T>()[inputType](updateInputConfig);
    });
  };

  return { _masks, _forceUpdate, _getValues, _cleanValues };
}

export { useValisk };
