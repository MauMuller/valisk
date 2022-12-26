const isCPF = (value: string) => {
  const regex = /^(\d{3})(\.?)(\d{3})(\.?)(\d{3})(\-?)(\d{2})$/gim;
  return regex.test(value);
};

export { isCPF };
