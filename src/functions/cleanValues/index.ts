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

  type objMask =
    | {
        mask: keyof Omit<MaskTypes<T>, "phone">;
        inputName: keyof T;
      }
    | undefined;

  for (const [key, value] of Object.entries(props as ObjectInput)) {
    const objectWithMask = nameInputAndTypeMaskArr.find(
      (obj) => obj.inputName === key
    ) as objMask;

    const regexToRemove =
      objectWithMask != undefined
        ? objectWithMask.mask === "password"
          ? ""
          : /([^\d])/gim
        : "";

    const formatedValue = value.replaceAll(regexToRemove, "");

    InputsObject[key] = formatedValue ?? value;
  }

  return InputsObject;
};
