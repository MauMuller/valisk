import { templateWithHash } from "../templateWithHash";
import { templateWithoutHash } from "../templateWithoutHash";

const replaceTemplateCharByValueChar = (
  template: string,
  value: string,
  hashMask: boolean,
  keydown: string
) => {
  const withHash = templateWithHash(template, value, keydown);
  const withoutHash = templateWithoutHash(template, value);
  return hashMask ? withHash : withoutHash;
};

export { replaceTemplateCharByValueChar };
