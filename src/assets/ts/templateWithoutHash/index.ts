import setAnMasksCharacter from "../setAnMasksCharacter";
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
  const indexToRemove = valueWithoutMaskChar.search(/(\W$)/gim);
  console.log(valueWithoutMaskChar.match(/(\W$)/gim));

  return (
    valueWithoutMaskChar.substring(0, indexToRemove) || valueWithoutMaskChar
  );
};

export { templateWithoutHash };
