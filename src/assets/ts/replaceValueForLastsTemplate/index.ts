import setAnMasksCharacter from "../setAnMasksCharacter";

const replaceValueForLastsTemplate = (value: string, template: string) => {
  const { char } = setAnMasksCharacter;
  const regextString = `((${char}$)|(${char}(?=(\\W?)\\d)))`;
  const regex = new RegExp(regextString, "mi");

  for (const letter of value) {
    let existCharToReplace = template.search(/(_)/g);
    template = template.replace(regex, letter);

    if (existCharToReplace === -1) {
      let firstNumberValue = template.search(/\d/);
      let firstPart = template.substring(0, firstNumberValue);
      let secondPart = template.substring(firstNumberValue, template.length);
      template = `${firstPart}${letter}${secondPart}`;
    }
  }

  console.log(template);
};

export { replaceValueForLastsTemplate };
