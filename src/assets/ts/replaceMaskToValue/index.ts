import setAnMasksCharacter from "../../../data/setAnMasksCharacter";

const replaceMaskToValue = (mask: string) => {
  const { char } = setAnMasksCharacter;
  return mask.replaceAll(char, "0");
};

export { replaceMaskToValue };
