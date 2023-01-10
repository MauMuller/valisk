const getNameFunctions = (functionValue: Function) => {
  const coreFunction = functionValue.toString();
  const findedNameIntoArray = coreFunction.match(
    /((?<=const\s\w\s=\s(.+)?")\w+(?="))/g
  );
  const nameFunction = findedNameIntoArray?.join("") ?? "";
  let finalName = "";

  switch (nameFunction) {
    case "phoneMovel":
      finalName = nameFunction.replace(/(movel)/im, "");
      break;
    default:
      finalName = nameFunction;
  }

  return finalName;
};

export { getNameFunctions };
