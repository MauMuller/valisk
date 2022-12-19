import { useState, LegacyRef, CSSProperties, useEffect } from "react";
import { acessValidationTypes } from "../../assets/ts/acessValidationTypes";
import { masks } from "../../data/masks";
import { firstPartMoney } from "../../assets/ts/firstPartMoney";

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
  inputReference?: LegacyRef<HTMLInputElement>;
  translate?: TypesBooleanString;
  spellCheck?: TypesBoolean;
  className?: string;
  style?: CSSProperties;
  name?: string;
  placeholder?: string;
  autoComplete?: TypesAutoComplete;

  valueFromInput?: (value: string) => void;
  validationFromInput?: (value: boolean | object) => void;
}

const InputMoney = ({
  type,
  inicialValue,
  hashMask,

  id,
  inputReference,
  translate,
  spellCheck,
  className,
  style,
  autoComplete,
  name,
  placeholder,

  valueFromInput,
  validationFromInput,
}: InputProps) => {
  const hashMaskCheck = hashMask ?? false;
  const styleCheck: CSSProperties = style ?? {};
  const inicialValueCheck = inicialValue ?? "";

  const valueMask = masks.money;
  const moneyMask = hashMaskCheck ? valueMask : firstPartMoney(valueMask);

  const defaultInputState: TypesValidationReturn = {
    value: moneyMask,
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
    const typeValidationCheck = "money";

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
      type={type}
      value={value}
      ref={inputReference}
      className={className}
      disabled={false}
      id={id}
      translate={translate}
      spellCheck={spellCheck}
      style={styleCheck}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
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
    />
  );
};

export { InputMoney };