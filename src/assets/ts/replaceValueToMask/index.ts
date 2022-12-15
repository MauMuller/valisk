const replaceValueToMask = (mask: string) => {
  return mask.replaceAll(/(\d)/gim, "_");
};

export { replaceValueToMask };
