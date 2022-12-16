import setAnMasksCharacter from "../../../data/setAnMasksCharacter";
const { char } = setAnMasksCharacter;

const templateWithoutHash = (template: string, value: string) => {
  let contValueIndex = 0;

  for (const letterTemplate of template) {
    let letterFromValue = value[contValueIndex] ?? char;

    if (letterTemplate === char) {
      template = template.replace(letterTemplate, letterFromValue);

      contValueIndex =
        contValueIndex < template.length ? contValueIndex + 1 : template.length;
    }
  }

  const indexLastValue =
    template.indexOf(char) === -1 ? template.length : template.indexOf(char);

  const valueWithoutMaskChar = template.substring(0, indexLastValue);
  const indexSpecialChar = valueWithoutMaskChar.search(/(\W$)/gim);

  const indexToRemove =
    valueWithoutMaskChar.search(/((\)|\s)(\s|\()$)/gi) != -1
      ? indexSpecialChar - 1
      : indexSpecialChar;

  return (
    valueWithoutMaskChar.substring(0, indexToRemove) || valueWithoutMaskChar
  );
};

export { templateWithoutHash };
