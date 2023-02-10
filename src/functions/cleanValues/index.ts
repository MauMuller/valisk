import { MaskTypes, PhoneTypes } from "../../types";

type Props<T> = {
  mask: PhoneTypes | Omit<keyof T, "phone">;
  inputName: MaskTypes<T>;
}[];

interface ObjectInput {
  [key: string]: string;
}

export const cleanValues = <T>(nameInputAndTypeMaskArr: Props<T>, props: T) => {
  const InputsObject: ObjectInput = {};

  for (const [key, value] of Object.entries(props as ObjectInput)) {
    type objMask = {
      mask: keyof Omit<MaskTypes<T>, "phone">;
      inputName: keyof T;
    };

    const { mask } = nameInputAndTypeMaskArr.find(
      (obj) => obj.inputName === key
    ) as objMask;

    const regexToRemove = mask === "password" ? "" : /([^\d])/gim;
    const formatedValue = value.replaceAll(regexToRemove, "");

    InputsObject[key] = formatedValue ?? value;
  }

  return InputsObject;
};
