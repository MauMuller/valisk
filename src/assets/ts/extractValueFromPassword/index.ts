import { masks } from "../../../data/masks";

const extractValueFromPassword = (
  sourceValue?: string //**5555
) => {
  const { password } = masks;
  const regex = new RegExp(`[^${password}]`, "g");

  const getAllValuesFromInput = sourceValue?.match(regex)?.join("");
  return getAllValuesFromInput ?? "";
};

export { extractValueFromPassword };
