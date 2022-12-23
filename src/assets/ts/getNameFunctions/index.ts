const getNameFunctions = (
  functionValue: Function,
  substring?: Array<number>
) => {
  const nameFunction = functionValue.name.toLowerCase();

  const start = substring?.at(0) ?? 0;
  const end = substring?.at(1) ?? nameFunction.length;

  const cutName = nameFunction.substring(start, end);

  return cutName;
};

export { getNameFunctions };
