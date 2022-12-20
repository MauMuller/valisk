import { useState, LegacyRef, CSSProperties, useEffect } from "react";
import { acessValidationTypes } from "../../assets/ts/acessValidationTypes";
import { masks } from "../../data/masks";

import {
  TypeChangeState,
  TypesInicialObject,
  TypesMaskReturn,
  TypesValuesFromUseMask,
} from "../types/globalTypes";

const useMaskCPF = ({
  inicialValue,
  useExplictMask,
}: TypesValuesFromUseMask): TypesMaskReturn => {
  const typeMask = "cpf";
  const valueMask = masks[typeMask];

  const inicialValueCheck = String(inicialValue ?? "");
  const useExplictMaskCheck = useExplictMask ?? false;
  const inicialMaskValue = useExplictMask ? valueMask : "";

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

export { useMaskCPF };
