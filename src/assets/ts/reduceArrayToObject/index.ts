const reduceArrayToObject = (arrayToReduce: Array<Object>) => {
  const result = arrayToReduce.reduce((prev, current, index) => {
    console.log(current);

    return current["values"];
  }, []);

  console.log(result);

  return "";
};

export { reduceArrayToObject };
