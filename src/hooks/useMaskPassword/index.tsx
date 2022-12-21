import { useState, useEffect } from "react";
import { acessValidationTypes } from "../../assets/ts/acessValidationTypes";
import { defaultValuesForPassword } from "../../assets/ts/defaultValuesForPassword";
import { extractValueFromPassword } from "../../assets/ts/extractValueFromPassword";

import {
  TypesChangePasswordState,
  TypesInicialPassword,
  TypesMaskReturn,
  TypesPasswordMask,
  TypesMaskPasswordReturn,
} from "../types/globalTypes";

const useMaskPassword = ({
  inicialValue,
  passwordPontenciality,
  hideValue,
}: TypesPasswordMask): TypesMaskPasswordReturn => {
  const typeMask = "password";

  const passwordPontencialityCheck = defaultValuesForPassword(
    passwordPontenciality
  );

  const hideValueCheck = hideValue ?? true;
  const inicialValueCheck = String(inicialValue ?? "");
  const inicialObjectValues: TypesInicialPassword = {
    value: "",
    sourceValue: "",
    isValid: false,
    keyDown: false,
  };

  const [inputValue, setInputValue] = useState(inicialObjectValues);
  const { value, isValid, keyDown, sourceValue } = inputValue;

  useEffect(() => {
    if (!hideValueCheck) formatingValueToInput(sourceValue);
    if (hideValueCheck) formatingValueToInput(value);
  }, [hideValue]);

  useEffect(() => {
    if (inicialValueCheck != "") formatingValueToInput(inicialValueCheck);
  }, []);

  const changeStateInputValue = ({
    formatedValue,
    formatedValidate,
    formatedKeyDown,
    formatedSourceValue,
  }: TypesChangePasswordState) => {
    setInputValue((prevValue) => {
      const clonedObject = { ...prevValue };
      const { value, isValid, keyDown, sourceValue } = clonedObject;

      if (formatedValue != value) clonedObject.value = formatedValue ?? value;

      if (formatedValidate != isValid)
        clonedObject.isValid = formatedValidate ?? isValid;

      if (formatedKeyDown != keyDown)
        clonedObject.keyDown = formatedKeyDown ?? keyDown;

      clonedObject.sourceValue = formatedSourceValue ?? sourceValue;
      return clonedObject;
    });
  };

  const formatingValueToInput = (valueInput: string) => {
    const pureSourcePassword = extractValueFromPassword(valueInput);
    const valueSource = sourceValue + pureSourcePassword;

    const inputLength = valueInput.length;
    const sourceLength = valueSource.length;

    const differenceLength = sourceLength - (sourceLength - inputLength);
    const removingDiferenceLength = valueSource.substring(0, differenceLength);

    const formatedSource =
      inputLength < sourceLength ? removingDiferenceLength : valueSource;

    console.log(sourceValue);

    const { formatedValue, isValidateValue } = acessValidationTypes({
      passwordPontencialityCheck,
      typeValidationCheck: typeMask,
      sourceValue: formatedSource,
      valueInput,
      keyDown,
      hideValueCheck,
    });

    changeStateInputValue({
      sourceValue: formatedSource,
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

  return [value, formatingValueToInput, isValid, setKey, sourceValue];
};

export { useMaskPassword };
