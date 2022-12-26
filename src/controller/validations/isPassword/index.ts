import { TypesDigits } from "../../../types/globalTypes";
import { defaultValuesForPassword } from "../../../assets/ts/defaultValuesForPassword";
interface TypesRegex {
  [value: string]: string;
}

const typesRegex: TypesRegex = {
  numbers: "\\d",
  specialChars: "^\\d\\s\\w",
  words: "^\\d\\s\\W",
};

const isPassword = (
  normalText?: string,
  passwordPontenciality?: TypesDigits,
  value?: string
) => {
  const defaultValueCheck = normalText ?? value;
  const passwordPontencialityCheck =
    passwordPontenciality ?? defaultValuesForPassword(passwordPontenciality);
  const propertiesCheck = [];

  for (const [key, value] of Object.entries(passwordPontencialityCheck)) {
    let [quantTimesThatNeed, especifValueThatNeed] = value;
    let checkedkey = key ?? "";
    let valueToSearch = especifValueThatNeed || typesRegex[checkedkey];
    let quantificators = especifValueThatNeed ? valueToSearch.length : "1";
    let regexTemplate = `([${valueToSearch}]{${quantificators}})`;
    let createdRegexObject = new RegExp(regexTemplate, "gim");

    let procedencesSearched =
      defaultValueCheck?.match(createdRegexObject) ?? [];

    let boolValidation = procedencesSearched.length >= quantTimesThatNeed;
    let objectValidation = { [`${key}Validation`]: boolValidation };

    propertiesCheck.push(objectValidation);
  }

  return propertiesCheck;
};

export { isPassword };
