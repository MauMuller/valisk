const isCEP = (value: string) => {
  const regex = /^(\d{5})(-.?)(\d{3})$/gim;
  return regex.test(value);
};

export { isCEP };
