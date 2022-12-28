import { useState, useEffect } from "react";
import { acessValidationTypes } from "../../assets/ts/acessValidationTypes";
import { firstPartMoney } from "../../assets/ts/firstPartMoney";
import { masks } from "../../data/masks";

import {
  TypesMaskMoneyReturn,
  TypesBasicsProperties,
  TypesChangeBoolean,
} from "../../types/globalTypes";

const useMaskMoney = ({
  inicialValue,
  useExplictMask,
}: TypesBasicsProperties): TypesMaskMoneyReturn => {
  const typeMask = "money";
  const valueMask = masks[typeMask];

  const inicialValueCheck = String(inicialValue ?? "");
  const useExplictMaskCheck = useExplictMask ?? false;
  const inicialMaskValue = useExplictMask
    ? valueMask
    : firstPartMoney(valueMask);

  const inicialObjectValues = {
    value: inicialMaskValue,
    isValid: false,
  };

  const [inputValue, setInputValue] = useState(inicialObjectValues);
  const { value, isValid } = inputValue;

  const changeStateInputValue = ({
    formatedValue,
    formatedValidate,
  }: TypesChangeBoolean) =>
    setInputValue((prevValue) => {
      const clonedObject = { ...prevValue };
      const { value, isValid } = clonedObject;

      if (formatedValue != value) clonedObject.value = formatedValue ?? value;

      if (formatedValidate != isValid)
        clonedObject.isValid = formatedValidate ?? isValid;

      return clonedObject;
    });

  const formatingValueToInput = (valueInput: string) => {
    const { formatedValue, isValidateValue } = acessValidationTypes({
      typeValidationCheck: typeMask,
      valueInput,
      hashMaskCheck: useExplictMaskCheck,
    });

    const isValidBoolean =
      typeof isValidateValue === "object" ? false : isValidateValue;

    changeStateInputValue({
      formatedValue,
      formatedValidate: isValidBoolean,
    });
  };

  useEffect(() => {
    if (inicialValueCheck != "") formatingValueToInput(inicialValueCheck);
  }, []);

  return [value, formatingValueToInput, isValid];
};

export { useMaskMoney };
