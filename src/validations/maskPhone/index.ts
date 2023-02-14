import { maskWithHash } from "../maskWithHash";
import { maskWithoutHash } from "../maskWithoutHash";
import { phoneOptions } from "../../options/phoneOptions";

export const maskPhone = (
  template: string,
  showDDD: boolean,
  showPrefix: boolean,
  explictMask: boolean,
  value: string
) => {
  const ddd = showDDD ? phoneOptions.ddd : "";
  const prefix = showPrefix ? phoneOptions.prefix : "";
  const formatedTemplate = `${ddd}${prefix}${template}`;

  const valueWithoutMask = maskWithoutHash(formatedTemplate, value);
  const valueWithMask = maskWithHash(formatedTemplate, value);

  return explictMask ? valueWithMask : valueWithoutMask;
};
