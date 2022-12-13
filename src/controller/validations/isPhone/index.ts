const isPhone = (value: string) => {
  //(##) ## # ####-####
  const regex =
    /^(\(?)(\d{2})(\)?)(\s?)(\d{2})(\s?)(\d{1})(\s?)(\d{4})(-?)(\d{4})$/gim;
  return regex.test(value);
};

export { isPhone };
