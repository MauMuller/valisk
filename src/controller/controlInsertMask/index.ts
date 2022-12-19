import { TypesValidation, TypesPhones } from "../../modules/InputValidation";

type TypesMasks = {
  moneyMask?: string;
  phoneMask?: string;
  defaultMask?: string;
};

const controlInsertMask = (
  typeValidationCheck: TypesValidation | TypesPhones,
  { moneyMask, phoneMask, defaultMask }: TypesMasks
) => {
  let maskFinal = "";
  const phones = typeValidationCheck.includes("phone")
    ? typeValidationCheck
    : "";

  switch (typeValidationCheck) {
    case "money":
      maskFinal = moneyMask ?? "";
      break;
    case phones:
      maskFinal = phoneMask ?? "";
      break;
    default:
      maskFinal = defaultMask ?? "";
  }

  return maskFinal;
};

export { controlInsertMask };
