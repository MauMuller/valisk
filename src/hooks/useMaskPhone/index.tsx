import { useState, useEffect } from "react";
import { acessValidationTypes } from "../../assets/ts/acessValidationTypes";
import { usePrefixAndDDDToPhone } from "../../assets/ts/usePrefixAndDDDToPhone";
import { masks } from "../../data/masks";

import {
  TypeChangeState,
  TypesInicialObject,
  TypesMaskReturn,
  TypesPhoneMask,
} from "../../types/globalTypes";

const useMaskPhone = ({
  inicialValue,
  useExplictMask,
  typePhone,
  incrementDDDAndPrefix,
}: TypesPhoneMask): TypesMaskReturn => {
  const typeMask = typePhone ?? "phoneMovel";
  const valueMask = masks[typeMask];

  const inicialValueCheck = String(inicialValue ?? "");
  const useExplictMaskCheck = useExplictMask ?? false;

  const phoneWithOrWithoutDDD = incrementDDDAndPrefix
    ? usePrefixAndDDDToPhone(valueMask)
    : valueMask;

  const inicialMaskValue = useExplictMask ? phoneWithOrWithoutDDD : "";

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
      incrementDDDAndPrefix,
      typeValidationCheck: typeMask,
      hashMaskCheck: useExplictMaskCheck,
      defaultValue: defaultValueForMask,
      valueInput,
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

  return [value, formatingValueToInput, isValid, setKey];
};

export { useMaskPhone };
