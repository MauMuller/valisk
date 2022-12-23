import { TypesPhones } from "../../../types/globalTypes";
import { TypesValidation } from "../../../model/ValidationsType";

const isPhone = (
  value: string,
  typeValidationCheck: TypesPhones | TypesValidation
) => {
  const regexPhone =
    typeValidationCheck === "phoneMovel" ? "(\\d{1})(\\s?)" : "";
  const regexString = `^(\\+?)(\\d{2})(\\s?)(\\(?)(\\d{2})(\\)?)(\\s?)${regexPhone}(\\d{4})(\\-?)(\\d{4})$`;
  const regex = new RegExp(regexString, "gim");

  return regex.test(value);
};

export { isPhone };
