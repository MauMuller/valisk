const reduceArraysToUniqueArray = (arrays: Array<Function[]>) => {
  return arrays.reduce((prev, current) => [...prev, ...current], []);
};

export { reduceArraysToUniqueArray };
