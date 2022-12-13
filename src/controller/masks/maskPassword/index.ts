import { masks } from "../../../data/masks";

const maskPassword = (value: string) => {
  const template = masks.password;
  return value.replaceAll(/./gi, template);
};

export { maskPassword };
