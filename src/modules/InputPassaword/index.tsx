import { useState, LegacyRef, CSSProperties, useEffect } from "react";
import { acessValidationTypes } from "../../assets/ts/acessValidationTypes";
import { masks } from "../../data/masks";
import { defaultValuesForPassword } from "../../assets/ts/defaultValuesForPassword";

export type TypesInput = "text" | "tel";
type TypesBooleanString = "yes" | "no";
type TypesBoolean = true | false;
type TypesAutoComplete = "on" | "off";
type TypesValidationReturn = { value: string; validation: boolean | object };

type TypesPropertiesArray = [number, string?];

export type TypesDigits = {
  specialChars?: TypesPropertiesArray;
  numbers?: TypesPropertiesArray;
  words?: TypesPropertiesArray;
};

interface InputProps {
  type: TypesInput;
  hideValue?: TypesBoolean;
  inicialValue?: string;
  passwordPontenciality?: TypesDigits;

  inputReference?: LegacyRef<HTMLInputElement>;
  id?: string;
  translate?: TypesBooleanString;
  spellCheck?: TypesBoolean;
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  autoComplete?: TypesAutoComplete;
  name?: string;

  valueFromInput?: (value: string) => void;
  validationFromInput?: (value: boolean | object) => void;
}

const InputPassaword = ({
  type,
  inicialValue,
  hideValue,
  passwordPontenciality,

  id,
  translate,
  inputReference,
  spellCheck,
  className,
  style,
  autoComplete,
  name,
  placeholder,

  valueFromInput,
  validationFromInput,
}: InputProps) => {
  const styleCheck: CSSProperties = style ?? {};
  const hideValueCheck = hideValue ?? false;
  const inicialValueCheck = inicialValue ?? "";

  const passwordPontencialityCheck = defaultValuesForPassword(
    passwordPontenciality
  );

  const valueMask = masks.password;

  const defaultInputState: TypesValidationReturn = {
    value: valueMask,
    validation: false,
  };

  const [inputValue, setInputValue] = useState(defaultInputState);
  const [defaultValue, setDefaultValue] = useState("");

  const { value, validation } = inputValue;
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
    const typeValidationCheck = "password";

    const { formatedValue, isValidateValue } = acessValidationTypes({
      typeValidationCheck,
      valueInput,
      keyDown,
      defaultValue,
      hideValueCheck,
      passwordPontencialityCheck,
    });

    changeStateInputValue(formatedValue, isValidateValue);

    return { formatedValue, isValidateValue };
  };

  const savingLetterByLetterFromValue = (valueInput: string) => {
    const stringMask = `(${masks.password})`;
    const regexToCircle = new RegExp(stringMask, "gi");
    const existAsteriscs = valueInput.search(regexToCircle) != -1;
    const getValueToInsert = valueInput.replaceAll(regexToCircle, "");
    let template = "";

    if (existAsteriscs) {
      for (let i = 0; i < valueInput.length; i++) {
        template += defaultValue[i] ?? "";
      }

      template = `${template}${getValueToInsert}`;
    } else {
      template = getValueToInsert;
    }

    return template;
  };

  useEffect(() => {
    const { isValidateValue, formatedValue } =
      formatingValueToInput(defaultValue);

    if (valueFromInput) valueFromInput(formatedValue);
    if (validationFromInput) validationFromInput(isValidateValue);
  }, [hideValue]);

  useEffect(() => {
    if (inicialValueCheck != "") {
      formatingValueToInput(inicialValueCheck);
      setDefaultValue(inicialValueCheck);
    }
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

        const templateValue = savingLetterByLetterFromValue(valueInput);
        setDefaultValue(templateValue);

        const { isValidateValue, formatedValue } = formatingValueToInput(
          valueInput,
          templateValue
        );

        if (valueFromInput) valueFromInput(formatedValue);
        if (validationFromInput) validationFromInput(isValidateValue);
      }}
    />
  );
};

export { InputPassaword };
