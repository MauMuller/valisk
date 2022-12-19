import { useState, LegacyRef, CSSProperties, useEffect } from "react";
import { acessValidationTypes } from "../../assets/ts/acessValidationTypes";
import { masks } from "../../data/masks";
import { defaultValuesForPassword } from "../../assets/ts/defaultValuesForPassword";
import { firstPartMoney } from "../../assets/ts/firstPartMoney";
import { usePrefixAndDDDToPhone } from "../../assets/ts/usePrefixAndDDDToPhone";
import { controlInsertMask } from "../../controller/controlInsertMask";

export type TypesValidation =
  | "cpf"
  | "cnpj"
  | "cep"
  | "money"
  | "phone"
  | "password"
  | "default";

export type TypesPhones = "phoneMovel" | "phoneFixo";

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
  inputReference?: LegacyRef<HTMLInputElement>;
  typeValidation?: TypesValidation;
  hashMask?: TypesBoolean;
  id?: string;
  translate?: TypesBooleanString;
  spellCheck?: TypesBoolean;
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  autoComplete?: TypesAutoComplete;
  hideValue?: TypesBoolean;
  inicialValue?: string;
  name?: string;

  typePhone?: TypesPhones;
  incrementDDDAndPrefix?: boolean;

  passwordPontenciality?: TypesDigits;
  valueFromInput?: (value: string) => void;
  validationFromInput?: (value: boolean | object) => void;
}

const InputValidation = ({
  type,
  typeValidation,
  inputReference,
  hashMask,
  id,
  translate,
  spellCheck,
  className,
  style,
  autoComplete,
  name,
  typePhone,
  incrementDDDAndPrefix,
  inicialValue,
  hideValue,
  placeholder,
  passwordPontenciality,
  valueFromInput,
  validationFromInput,
}: InputProps) => {
  const phoneValidation =
    typeValidation === "phone" ? typePhone ?? "phoneMovel" : typeValidation;

  const typeValidationCheck = phoneValidation ?? "default";
  const hashMaskCheck = hashMask ?? false;
  const styleCheck: CSSProperties = style ?? {};
  const hideValueCheck = hideValue ?? false;
  const inicialValueCheck = inicialValue ?? "";

  const passwordPontencialityCheck = defaultValuesForPassword(
    passwordPontenciality
  );

  const valueMask = masks[typeValidationCheck];

  const phoneWithOrWithoutDDD = incrementDDDAndPrefix
    ? usePrefixAndDDDToPhone(valueMask)
    : valueMask;

  const phoneMask = hashMaskCheck ? phoneWithOrWithoutDDD : "";

  const moneyMask = hashMaskCheck ? valueMask : firstPartMoney(valueMask);
  const defaultMask = hashMaskCheck ? valueMask : "";

  const inicialValueForInput = controlInsertMask(typeValidationCheck, {
    moneyMask,
    phoneMask,
    defaultMask,
  });

  const defaultInputState: TypesValidationReturn = {
    value: inicialValueForInput,
    validation: false,
  };

  const [inputValue, setInputValue] = useState(defaultInputState);
  const [defaultValue, setDefaultValue] = useState("");

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
    const { formatedValue, isValidateValue } = acessValidationTypes({
      incrementDDDAndPrefix,
      typeValidationCheck,
      valueInput,
      hashMaskCheck,
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
    if (typeValidationCheck === "password") formatingValueToInput(defaultValue);
  }, [hideValue]);

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
        const isPassawordType = typeValidationCheck === "password";

        const templateValue = savingLetterByLetterFromValue(valueInput);
        isPassawordType ? setDefaultValue(templateValue) : "";

        const { isValidateValue } = formatingValueToInput(
          valueInput,
          templateValue
        );

        if (valueFromInput) valueFromInput(valueInput);
        if (validationFromInput) validationFromInput(isValidateValue);
      }}
    />
  );
};

export { InputValidation };
