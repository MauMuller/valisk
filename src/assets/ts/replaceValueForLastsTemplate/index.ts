import setAnMasksCharacter from "../../../data/setAnMasksCharacter";

const replaceValueForLastsTemplate = (value: string, template: string) => {
  const { char } = setAnMasksCharacter;
  let cont = 0;

  console.log(template);
  console.log(value);

  const valuesRest = value.length > 4 ? value.length - 4 : 0;
  const arrayWithChars = [];

  for (let i = 0; i < valuesRest; i++) {
    arrayWithChars.push(char);
  }

  const firstPartTemplate = template.substring(0, 3);
  const lastPartTemplate = template.substring(3);

  const modifiedTemplate =
    firstPartTemplate + arrayWithChars.join("") + lastPartTemplate;

  const templateArrReverse = modifiedTemplate.split("").reverse();

  const templateFormated = templateArrReverse.map((charTemplate) => {
    let valueToReplace =
      charTemplate === char ? value[cont++] ?? "0" : charTemplate;

    let formatedValue =
      charTemplate === char
        ? charTemplate.replace(charTemplate, valueToReplace)
        : charTemplate;

    return formatedValue;
  });

  const templateStringAndReversed = templateFormated.reverse().join("");
  console.log(templateStringAndReversed);

  return templateStringAndReversed;
};

export { replaceValueForLastsTemplate };
