export const onlyNumbers = (value: string) => {
  return value.replaceAll(/([^\d])/gim, "");
};
