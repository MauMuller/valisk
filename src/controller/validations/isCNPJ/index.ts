const isCNPJ = (value: string) => {
  //##.###.###/####-##
  const regex = /^(\d{2})(\.?)(\d{3})(\.?)(\d{3})(\/?)(\d{4})(\-?)(\d{2})$/gim;
  return regex.test(value);
};

export { isCNPJ };
