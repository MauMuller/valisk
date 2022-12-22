import { useState, useEffect } from "react";
import { acessValidationTypes } from "../../assets/ts/acessValidationTypes";
import { masks } from "../../data/masks";

import {
  TypeChangeState,
  TypesInicialObject,
  TypesMaskReturn,
  TypesBasicsProperties,
} from "../../types/globalTypes";

const useMaskCEP = ({
  inicialValue,
  useExplictMask,
}: TypesBasicsProperties): TypesMaskReturn => {
  const typeMask = "cep";
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

  const formatingValueToInput = (valueInput: string) => {
    const { formatedValue, isValidateValue } = acessValidationTypes({
      typeValidationCheck: typeMask,
      valueInput,
      hashMaskCheck: useExplictMaskCheck,
      keyDown,
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

  useEffect(() => {
    if (inicialValueCheck != "") formatingValueToInput(inicialValueCheck);
  }, []);

  return [value, formatingValueToInput, isValid, setKey];
};

export { useMaskCEP };
