import { useState, useEffect } from "react";
import { acessValidationTypes } from "../../assets/ts/acessValidationTypes";
import { defaultValuesForPassword } from "../../assets/ts/defaultValuesForPassword";
import { extractValueFromPassword } from "../../assets/ts/extractValueFromPassword";

import {
  TypesChangePasswordState,
  TypesInicialPassword,
  TypesPasswordMask,
  TypesPasswordValuesReturn,
  TypesMaskPasswordReturn,
} from "../../types/globalTypes";

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
  };

  const [inputValue, setInputValue] = useState(inicialObjectValues);
  const { value, isValid, sourceValue } = inputValue;

  const valuesPassword: TypesPasswordValuesReturn = [value, sourceValue];

  const changeStateInputValue = ({
    formatedValue,
    formatedValidate,
    formatedSourceValue,
  }: TypesChangePasswordState) => {
    setInputValue((prevValue) => {
      const clonedObject = { ...prevValue };
      const { value, isValid, sourceValue } = clonedObject;

      if (formatedValue != value) clonedObject.value = formatedValue ?? value;

      if (formatedValidate != isValid)
        clonedObject.isValid = formatedValidate ?? isValid;

      if (formatedSourceValue != sourceValue)
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

    const { formatedValue, isValidateValue } = acessValidationTypes({
      passwordPontencialityCheck,
      typeValidationCheck: typeMask,
      sourceValue: formatedSource,
      valueInput,
      hideValueCheck,
    });

    changeStateInputValue({
      formatedSourceValue: formatedSource,
      formatedValue,
      formatedValidate: isValidateValue,
    });
  };

  useEffect(() => {
    if (!hideValueCheck) formatingValueToInput(sourceValue);
    if (hideValueCheck) formatingValueToInput(value);
  }, [hideValue]);

  useEffect(() => {
    if (inicialValueCheck != "") formatingValueToInput(inicialValueCheck);
  }, []);

  return [valuesPassword, formatingValueToInput, isValid];
};

export { useMaskPassword };
