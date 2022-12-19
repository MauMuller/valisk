import { TypesDigits } from "../../../modules/InputPassword";

const defaultValuesForPassword = (password?: TypesDigits) => {
  const clonnedPassword = { ...password };

  clonnedPassword.numbers = clonnedPassword?.numbers ?? [0];
  clonnedPassword.specialChars = clonnedPassword?.specialChars ?? [0];
  clonnedPassword.words = clonnedPassword?.words ?? [0];

  return clonnedPassword;
};

export { defaultValuesForPassword };
