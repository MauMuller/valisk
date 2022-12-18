import setAnMasksCharacter from "../../../data/setAnMasksCharacter";

const { char } = setAnMasksCharacter;

const replaceValueForMasks = (value: string, letter: string) => {
  return value.replaceAll(letter, char);
};

export { replaceValueForMasks };
