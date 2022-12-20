import { useState, LegacyRef, CSSProperties, useEffect } from "react";
import { acessValidationTypes } from "../../assets/ts/acessValidationTypes";
import { masks } from "../../data/masks";

export type TypesInput = "text" | "tel";
type TypesBooleanString = "yes" | "no";
type TypesBoolean = true | false;
type TypesAutoComplete = "on" | "off";
type TypesValidationReturn = { value: string; validation: boolean | object };

interface InputProps {
  type: TypesInput;
  hashMask?: TypesBoolean;
  inicialValue?: string;

  id?: string;
  translate?: TypesBooleanString;
  spellCheck?: TypesBoolean;
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  autoComplete?: TypesAutoComplete;
  name?: string;
  ref?: LegacyRef<HTMLInputElement>;
  disabled?: boolean;

  valueFromInput?: (value: string) => void;
  validationFromInput?: (value: boolean | object) => void;
}

const InputCPF = ({
  hashMask,
  inicialValue,

  valueFromInput,
  validationFromInput,

  ...rest
}: InputProps) => {
  const hashMaskCheck = hashMask ?? false;
  const inicialValueCheck = inicialValue ?? "";

  const valueMask = masks.cpf;
  const inicialValueForInput = hashMaskCheck ? valueMask : "";

  const defaultInputState: TypesValidationReturn = {
    value: inicialValueForInput,
    validation: false,
  };

  const [inputValue, setInputValue] = useState(defaultInputState);

  const { value } = inputValue;
  let keyDown: string;

  const changeStateInputValue = (
    formatedValue: string,
    isValidateValue: boolean | object
  ) =>
    setInputValue((prevValue) => {
      const clonedObject = { ...prevValue };

      clonedObject.value = formatedValue;
      clonedObject.validation = isValidateValue;

      return clonedObject;
    });

  const formatingValueToInput = (valueInput: string, defaultValue?: string) => {
    const typeValidationCheck = "cpf";

    const { formatedValue, isValidateValue } = acessValidationTypes({
      typeValidationCheck,
      valueInput,
      hashMaskCheck,
      keyDown,
      defaultValue,
    });

    changeStateInputValue(formatedValue, isValidateValue);
    return { formatedValue, isValidateValue };
  };

  useEffect(() => {
    if (inicialValueCheck != "") formatingValueToInput(inicialValueCheck);
  }, []);

  return (
    <input
      value={value}
      onKeyDown={(evt) => {
        let keyDelete = "Backspace";
        keyDown = evt.key === keyDelete ? keyDelete : "";
      }}
      onChange={(evt) => {
        const valueInput = evt.target.value;
        const { isValidateValue, formatedValue } =
          formatingValueToInput(valueInput);

        if (valueFromInput) valueFromInput(formatedValue);
        if (validationFromInput) validationFromInput(isValidateValue);
      }}
      {...rest}
    />
  );
};

export { InputCPF };
