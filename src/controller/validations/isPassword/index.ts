import { TypesDigits } from "../../../modules/InputValidation";

interface TypesRegex {
  [value: string]: string;
}

const typesRegex: TypesRegex = {
  numbers: "\\d",
  specialChars: "^\\d\\s\\w",
  words: "^\\d\\s\\W",
};

const isPassword = (normalText: string, passwordPontenciality: TypesDigits) => {
  const propertiesCheck = [];

  for (const [key, value] of Object.entries(passwordPontenciality)) {
    let [quantTimesThatNeed, especifValueThatNeed] = value;
    let checkedkey = key ?? "";
    let valueToSearch = especifValueThatNeed || typesRegex[checkedkey];
    let quantificators = especifValueThatNeed ? valueToSearch.length : "1";
    let regexTemplate = `([${valueToSearch}]{${quantificators}})`;
    let createdRegexObject = new RegExp(regexTemplate, "gim");

    let procedencesSearched = normalText.match(createdRegexObject) ?? [];

    let boolValidation = procedencesSearched.length >= quantTimesThatNeed;
    let objectValidation = { [`${key}Validation`]: boolValidation };

    propertiesCheck.push(objectValidation);
  }

  // console.clear();
  // console.log(normalText);
  // console.log(JSON.stringify(propertiesCheck, null, "\t"));
  return propertiesCheck;
};

export { isPassword };
