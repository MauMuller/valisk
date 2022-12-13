import setAnMasksCharacter from "../setAnMasksCharacter";
const { char } = setAnMasksCharacter;

const templateWithHash = (template: string, value: string, keydown: string) => {
  let contValueIndex = 0;

  for (const letterTemplate of template) {
    let letterFromValue = value[contValueIndex] ?? char;

    if (letterTemplate === char) {
      template = template.replace(letterTemplate, letterFromValue);

      contValueIndex =
        contValueIndex < template.length ? contValueIndex + 1 : template.length;
    }
  }

  const arrayWithValidIndex = [];

  for (let i = 0; i < template.length; i++) {
    if (/(\d)/.test(template[i])) arrayWithValidIndex.push(i);
  }

  if (keydown != "") {
    const lastIndex =
      arrayWithValidIndex.find(
        (value, ind) => ind === arrayWithValidIndex.length - 1
      ) ?? -1;

    const firstPartFromValue = template.substring(0, lastIndex);
    const lastPartFromValue = template.substring(
      lastIndex + 1,
      template.length
    );

    template =
      lastIndex > -1 ? `${firstPartFromValue}_${lastPartFromValue}` : template;
  }

  return template;
};

export { templateWithHash };
