import { useState, useEffect } from "react";
import { acessValidationTypes } from "../../assets/ts/acessValidationTypes";
import { firstPartMoney } from "../../assets/ts/firstPartMoney";
import { masks } from "../../data/masks";

import {
  TypeChangeState,
  TypesInicialObject,
  TypesMaskReturn,
  TypesValuesFromUseMask,
} from "../../types/globalTypes";

const useMaskMoney = ({
  inicialValue,
  useExplictMask,
}: TypesValuesFromUseMask): TypesMaskReturn => {
  const typeMask = "money";
  const valueMask = masks[typeMask];

  const inicialValueCheck = String(inicialValue ?? "");
  const useExplictMaskCheck = useExplictMask ?? false;
  const inicialMaskValue = useExplictMask
    ? valueMask
    : firstPartMoney(valueMask);

  const inicialObjectValues: TypesInicialObject = {
    value: inicialMaskValue,
    isValid: false,
    keyDown: false,
  };

  const [inputValue, setInputValue] = useState(inicialObjectValues);
  const { value, isValid, keyDown } = inputValue;

  useEffect(() => {
    if (inicialValueCheck != "") formatingValueToInput(inicialValueCheck);
  }, []);

  const changeStateInputValue = ({
    formatedValue,
    formatedValidate,
    formatedKeyDown,
  }: TypeChangeState) =>
    setInputValue((prevValue) => {
      const clonedObject = { ...prevValue };
      const { value, isValid, keyDown } = clonedObject;

      if (formatedValue != value) clonedObject.value = formatedValue ?? value;

      if (formatedValidate != isValid)
        clonedObject.isValid = formatedValidate ?? isValid;

      if (formatedKeyDown != keyDown)
        clonedObject.keyDown = formatedKeyDown ?? keyDown;

      return clonedObject;
    });

  const formatingValueToInput = (valueInput: string, defaultValue?: string) => {
    const defaultValueForMask = defaultValue ?? "";

    const { formatedValue, isValidateValue } = acessValidationTypes({
      typeValidationCheck: typeMask,
      valueInput,
      hashMaskCheck: useExplictMaskCheck,
      keyDown,
      defaultValue: defaultValueForMask,
    });

    changeStateInputValue({
      formatedValue,
      formatedValidate: isValidateValue,
      formatedKeyDown: keyDown,
    });
  };

  const setKey = (value: string) => {
    if (value === "Backspace") changeStateInputValue({ formatedKeyDown: true });

    if (value != "Backspace" && keyDown)
      changeStateInputValue({ formatedKeyDown: false });
  };

  return [value, formatingValueToInput, isValid, setKey];
};

export { useMaskMoney };
