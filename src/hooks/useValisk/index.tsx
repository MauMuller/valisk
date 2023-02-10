import React from "react";

import {
  MaskTypes,
  DetailsHTML,
  ReturnType,
  ForceUpdateParams,
  ForceObject,
  PhoneTypes,
} from "../../types";

import { defaultProps } from "../../templates/defaultProps";
import { masks } from "../../options/masks";
import { getObjectToInput } from "../../functions/getObjectToInput";
import { typeInput } from "../../options/typeInput";

import { cleanValues } from "../../functions/cleanValues";

function useValisk<T>(maskValidation: MaskTypes<T>): ReturnType<T> {
  const keysMask = Object.keys(maskValidation);

  const formatedMaskValidation = keysMask.flatMap((key) => {
    const keyMask = key as keyof MaskTypes<T>;
    const arrayByKey = [maskValidation[keyMask]].flat();

    return arrayByKey?.map((obj) => {
      const defaultPropsObj = defaultProps<T>(keyMask);
      return { key: keyMask, ...defaultPropsObj, ...obj };
    });
  });

  const _masks = (nameInput: keyof T): DetailsHTML => {
    const objectToInput = getObjectToInput<T>(
      formatedMaskValidation,
      nameInput
    );

    return {
      onInput: (evt: React.FormEvent<HTMLInputElement>) => {
        const valueInput = evt.currentTarget.value;
        const elementInput = evt.currentTarget;

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

  const _getValues = () => {
    const namesInputsArr = formatedMaskValidation.map((obj: any) => obj.name);
    const inputsObjectArr = namesInputsArr.map((name: any) => ({
      name,
      value: document.querySelector<HTMLInputElement>(
        `input[name=${name as string}]`
      )?.value,
    }));

    return inputsObjectArr.reduce(
      (prev: any, current: any) => ({ ...prev, [current.name]: current.value }),
      {}
    ) as T;
  };

  const _cleanVal = (props: T) => {
    const nameInputAndTypeMaskArr = formatedMaskValidation.map((obj: any) => ({
      mask:
        obj.key === "phone"
          ? (obj.typePhone as PhoneTypes)
          : (obj.key as Omit<keyof T, "phone">),
      inputName: obj.name as MaskTypes<T>,
    }));

    const formatedValue = cleanValues<T>(nameInputAndTypeMaskArr, props);
    return formatedValue as T;
  };

  const _forceUpdate = (props: ForceUpdateParams<T>): void => {
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

      typeInput<T>()[inputType](updateInputConfig);
    });
  };

  return { _masks, _forceUpdate, _getValues, _cleanVal };
}

export { useValisk };
