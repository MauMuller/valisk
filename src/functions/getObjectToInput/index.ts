import { MaskFormated } from "../../types";

export const getObjectToInput = <T>(
  formatedMaskValidation: any[],
  nameInput: keyof T
) => {
  return formatedMaskValidation.find(
    (obj) => obj?.name === nameInput
  ) as MaskFormated<T>;
};
