const lastPartMoney = (value: string) => {
  const regex = /((?<=\s).+)/;
  const index = value.search(regex);
  return value.substring(index, value.length);
};

export { lastPartMoney };
